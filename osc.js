// OSC communication for the Timer module
const osc = require("osc");


// Store OSC clients
const clients = {};

function initOSC(instance, timerNum, host, port) {
        if (clients[timerNum]) {
                // Clean up existing client if we're reinitializing
                clients[timerNum] = null;
        }
        try {
                // Create new OSC client - the newer osc library needs to use UDPPort
                // Configure with localPort: 0 to use a dynamic port and avoid EADDRINUSE errors
                clients[timerNum] = new osc.UDPPort({
                        remoteAddress: host,
                        remotePort: port,
                        localAddress: "0.0.0.0", // Listen on all interfaces
                        localPort: 0, // Use a random available port
                        metadata: true,
                });

                // Open the port
                clients[timerNum].open();

                instance.log(
                        "debug",
                        `OSC client created for Timer ${timerNum} at ${host}:${port}`,
                );

                // Update the status variable to reflect connection
                instance.setVariableValues({
                        [`timer${timerNum}_status`]: "Connected",
                });

                return true;
        } catch (error) {
                instance.log(
                        "error",
                        `Failed to create OSC client for Timer ${timerNum}: ${error.toString()}`,
                );

                // Update the status variable to reflect connection failure
                instance.setVariableValues({
                        [`timer${timerNum}_status`]: "Error",
                });

                return false;
        }
}

function sendOSCMessage(instance, timerNum, path, args) {
        if (!clients[timerNum]) {
                instance.log(
                        "warn",
                        `Cannot send OSC message to Timer ${timerNum} - not connected`,
                );
                return false;
        }

        try {
                // For debugging purposes, log the message being sent
                let argsStr = JSON.stringify(args);
                instance.log(
                        "debug",
                        `Sending to Timer ${timerNum}: ${path} ${argsStr}`,
                );

                // Send the OSC message - format for UDPPort is different
                clients[timerNum].send({
                        address: path,
                        args: args.map((arg) => {
                                let type = "s"; // default til string
                                if (typeof arg === "number") {
                                        type = Number.isInteger(arg)
                                                ? "i"
                                                : "f";
                                }
                                return { type, value: arg };
                        }),
                });
                return true;
        } catch (error) {
                instance.log(
                        "error",
                        `Failed to send OSC message to Timer ${timerNum}: ${error.toString()}`,
                );
                return false;
        }
}

// Close the OSC connection
function closeOSC(instance, timerNum) {
        if (clients[timerNum]) {
                try {
                        // Close the UDP port
                        clients[timerNum].close();
                        instance.log(
                                "debug",
                                `Closed OSC connection for Timer ${timerNum}`,
                        );
                        clients[timerNum] = null;
                        return true;
                } catch (error) {
                        instance.log(
                                "error",
                                `Error closing OSC connection for Timer ${timerNum}: ${error.toString()}`,
                        );
                        return false;
                }
        }
        return true;
}

// Internal listener registry for each timer
const listeners = {};

// Setup OSC listener for incoming messages
function enableOSCListening(instance, timerNum) {
        if (listeners[timerNum]) {
                return; // Already listening
        }

        const listenPort = 60000 + timerNum; // e.g., 60001 for Timer 1
        const listener = new osc.UDPPort({
                localAddress: "0.0.0.0",
                localPort: listenPort,
                metadata: true,
        });

        listener.on("ready", () => {
                instance.log(
                        "info",
                        `Listening for OSC messages on port ${listenPort} for Timer ${timerNum}`,
                );
        });

        listener.on("message", (oscMsg) => {
                const address = oscMsg.address;
                const args = oscMsg.args || [];

                if (typeof instance.receiveOscMessage === "function") {
                        instance.receiveOscMessage(timerNum, address, args);
                } else {
                        instance.log(
                                "debug",
                                `Received OSC (${address}) but no receiveOscMessage() handler defined.`,
                        );
                }
        });

        listener.on("error", (error) => {
                instance.log(
                        "error",
                        `OSC listener error on Timer ${timerNum}: ${error.toString()}`,
                );
        });

        listener.open();
        listeners[timerNum] = listener;
}

// Optional: stop listener for cleanup
function disableOSCListening(timerNum) {
        if (listeners[timerNum]) {
                listeners[timerNum].close();
                delete listeners[timerNum];
        }
}



module.exports = {
        initOSC,
        enableOSCListening,
        sendOSCMessage,
        closeOSC,
        enableOSCListening,
        disableOSCListening,
};
