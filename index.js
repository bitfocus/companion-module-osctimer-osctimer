// OSC Timer Companion Module
const {
        InstanceBase,
        Regex,
        runEntrypoint,
        InstanceStatus,
} = require("@companion-module/base");
const { getActionDefinitions } = require("./actions");
const { getFeedbackDefinitions } = require("./feedbacks");
const { getPresetDefinitions } = require("./presets");
const { getVariables } = require("./variables");
const {
        initOSC,
        sendOSCMessage,
        closeOSC,
        enableOSCListening,
} = require("./osc");
const { getConfigFields } = require("./config");

// Need "os" for getting local IP address
const os = require("os");

// Define module manifest
const MODULE_MANIFEST = {
        // Populate required fields from manifest.json
        id: "osc-timer",
        name: "OSC Timer Control",
        shortname: "OSC Timer",
        description: "Control OSC-based timer application with up to 4 timers",
        version: "1.0.0",
        license: "MIT",
        manufacturer: "OSC Timer",
        products: ["OSC Timer API"],
        keywords: ["Timer", "Countdown", "OSC"],
};

function getLocalIPAddress() {
        const interfaces = os.networkInterfaces();
        for (const iface of Object.values(interfaces)) {
                for (const config of iface) {
                        if (config.family === "IPv4" && !config.internal) {
                                return config.address;
                        }
                }
        }
        return "127.0.0.1";
}

class OSCTimerInstance extends InstanceBase {
        constructor(internal) {
                super(internal);
                this.updateStatus(InstanceStatus.Disconnected);
        }

        async init(config) {
                this.config = config;
                this.timers = {
                        1: { connected: false },
                        2: { connected: false },
                        3: { connected: false },
                        4: { connected: false },
                };

                this.initOSCClients();
                this.initActions();
                this.initFeedbacks();
                this.initPresets();
                this.initVariables();
                this.startVariableSubscriptionLoop();
        }

        async configUpdated(config) {
                const oldConfig = this.config;

                for (let timerNum = 1; timerNum <= 4; timerNum++) {
                        const oldPort = oldConfig[`timer${timerNum}Port`];
                        const newPort = config[`timer${timerNum}Port`];

                        if (oldPort && (!newPort || newPort.trim() === "")) {
                                const ip = getLocalIPAddress();
                                const port = 60000 + timerNum;
                                const paths = [
                                        `/timer/${timerNum}/time`,
                                        `/timer/${timerNum}/status`,
                                        `/timer/${timerNum}/alert`,
                                        `/timer/${timerNum}/end`,
                                ];

                                this.sendCommand(
                                        timerNum,
                                        "/bc/unsubscribeToVariables",
                                        [ip, port, ...paths],
                                );

                                this.log(
                                        "info",
                                        `Sent unsubscribe for Timer ${timerNum} due to port being disabled`,
                                );
                        }
                }
                this.config = config;

                this.initOSCClients();
        }

        initOSCClients() {
                if (!this.config.host) {
                        this.updateStatus(
                                InstanceStatus.BadConfig,
                                "Host IP not set",
                        );
                        return;
                }

                for (let timerNum = 1; timerNum <= 4; timerNum++) {
                        // Close any existing connections first
                        if (this.timers[timerNum].connected) {
                                closeOSC(this, timerNum);
                                this.timers[timerNum].connected = false;
                        }

                        // Get port from configuration
                        const portConfig = this.config[`timer${timerNum}Port`];

                        // If port is set, attempt to connect
                        if (portConfig && portConfig.trim() !== "") {
                                try {
                                        const port = parseInt(portConfig);
                                        if (
                                                isNaN(port) ||
                                                port < 1 ||
                                                port > 65535
                                        ) {
                                                this.log(
                                                        "error",
                                                        `Invalid port for Timer ${timerNum}: ${portConfig}`,
                                                );
                                                continue;
                                        }

                                        initOSC(
                                                this,
                                                timerNum,
                                                this.config.host,
                                                port,
                                        );
                                        enableOSCListening(this, timerNum);
                                        this.timers[timerNum].connected = true;
                                        this.log(
                                                "info",
                                                `Connected to Timer ${timerNum} on ${this.config.host}:${port}`,
                                        );
                                } catch (error) {
                                        this.timers[timerNum].connected = false;
                                        this.log(
                                                "error",
                                                `Failed to connect to Timer ${timerNum}: ${error.message}`,
                                        );
                                }
                        } else {
                                this.log(
                                        "debug",
                                        `Timer ${timerNum} disabled (no port configured)`,
                                );
                                this.timers[timerNum].connected = false;
                        }
                }

                // Set overall status based on whether any timer is connected
                const anyConnected = Object.values(this.timers).some(
                        (timer) => timer.connected,
                );
                if (anyConnected) {
                        this.updateStatus(InstanceStatus.Ok);
                } else {
                        this.updateStatus(
                                InstanceStatus.Disconnected,
                                "No timers enabled or connected",
                        );
                }
        }

        initActions() {
                this.setActionDefinitions(getActionDefinitions(this));
        }

        initFeedbacks() {
                this.setFeedbackDefinitions(getFeedbackDefinitions(this));
        }

        initPresets() {
                this.setPresetDefinitions(getPresetDefinitions(this));
        }

        initVariables() {
                this.setVariableDefinitions(getVariables());
        }

        sendCommand(timerNum, path, args = []) {
                if (!this.timers[timerNum]?.connected) {
                        this.log(
                                "warn",
                                `Timer ${timerNum} not connected, can't send command`,
                        );
                        return;
                }

                sendOSCMessage(this, timerNum, path, args);
        }

        receiveOscMessage(timerNum, address, args) {
                const logPrefix = `Timer ${timerNum} OSC`;

                if (address.endsWith("/status") && args[0]?.value) {
                        const status = args[0].value.toString();
                        this[`timer${timerNum}_status`] = status;

                        this.setVariableValues({
                                [`timer${timerNum}_status`]: status,
                        });
                        this.checkFeedbacks("timer_running");
                        this.checkFeedbacks("timer_ended");

                        this.log("debug", `${logPrefix} status: ${status}`);
                } else if (address.endsWith("/time") && args[0]?.value) {
                        const time = args[0].value.toString();

                        this.setVariableValues({
                                [`timer${timerNum}_time`]: time,
                        });
                        this.log("debug", `${logPrefix} time: ${time}`);
                } else if (address.endsWith("/alert") && args[0]) {
                        const isAlert = Boolean(args[0].value);
                        this[`timer${timerNum}_alert`] = isAlert;

                        this.setVariableValues({
                                [`timer${timerNum}_alert`]: isAlert,
                        });
                        this.checkFeedbacks("timer_alert_active");

                        this.log("debug", `${logPrefix} alert: ${isAlert}`);
                }

                // ...tilføj evt. flere som fx /end etc.
        }

        startVariableSubscriptionLoop() {
                const ip = getLocalIPAddress();

                this.variableSubscriptionInterval = setInterval(() => {
                        for (let timerNum = 1; timerNum <= 4; timerNum++) {
                                const port = 60000 + timerNum;
                                const path1 = `/timer/${timerNum}/time`;
                                const path2 = `/timer/${timerNum}/status`;
                                const path3 = `/timer/${timerNum}/alert`;
                                const path4 = `/timer/${timerNum}/end`;

                                if (this.timers[timerNum]?.connected) {
                                        this.sendCommand(
                                                timerNum,
                                                "/bc/subscribeToVariables",
                                                [
                                                        ip,
                                                        port,
                                                        path1,
                                                        path2,
                                                        path3,
                                                        path4,
                                                ],
                                        );
                                }
                        }
                }, 10000);
        }

        getConfigFields() {
                return getConfigFields();
        }

        async destroy() {}
}

runEntrypoint(OSCTimerInstance, MODULE_MANIFEST);
