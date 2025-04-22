// OSC Timer Companion Module
const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const { getActionDefinitions } = require('./actions')
const { getFeedbackDefinitions } = require('./feedbacks')
const { getPresetDefinitions } = require('./presets')
const { getVariables } = require('./variables')
const { initOSC, sendOSCMessage, closeOSC } = require('./osc')
const { getConfigFields } = require('./config')

// Define module manifest
const MODULE_MANIFEST = {
        // Populate required fields from manifest.json
        id: 'osc-timer',
        name: 'OSC Timer Control',
        shortname: 'OSC Timer',
        description: 'Control OSC-based timer application with up to 4 timers',
        version: '1.0.0',
        license: 'MIT',
        manufacturer: 'Generic',
        products: ['OSC Timer'],
        keywords: ['Timer', 'Countdown', 'OSC']
}

class OSCTimerInstance extends InstanceBase {
        constructor(internal) {
                super(internal)
                this.updateStatus(InstanceStatus.Disconnected)
        }

        async init(config) {
                this.config = config
                this.timers = {
                        1: { port: 53001, connected: false },
                        2: { port: 53002, connected: false },
                        3: { port: 53003, connected: false },
                        4: { port: 53004, connected: false }
                }
                
                this.initOSCClients()
                this.initActions()
                this.initFeedbacks()
                this.initPresets()
                this.initVariables()
        }
        
        async configUpdated(config) {
                this.config = config
                this.initOSCClients()
        }

        initOSCClients() {
                if (!this.config.host) {
                        this.updateStatus(InstanceStatus.BadConfig, 'Host IP not set')
                        return
                }

                for (let timerNum = 1; timerNum <= 4; timerNum++) {
                        if (this.config[`enableTimer${timerNum}`]) {
                                try {
                                        const port = this.timers[timerNum].port
                                        initOSC(this, timerNum, this.config.host, port)
                                        this.timers[timerNum].connected = true
                                        this.log('info', `Connected to Timer ${timerNum} on ${this.config.host}:${port}`)
                                } catch (error) {
                                        this.timers[timerNum].connected = false
                                        this.log('error', `Failed to connect to Timer ${timerNum}: ${error.message}`)
                                }
                        } else {
                                this.timers[timerNum].connected = false
                        }
                }

                // Set overall status based on whether any timer is connected
                const anyConnected = Object.values(this.timers).some(timer => timer.connected)
                if (anyConnected) {
                        this.updateStatus(InstanceStatus.Ok)
                } else {
                        this.updateStatus(InstanceStatus.Disconnected, 'No timers enabled or connected')
                }
        }

        initActions() {
                this.setActionDefinitions(getActionDefinitions(this))
        }

        initFeedbacks() {
                this.setFeedbackDefinitions(getFeedbackDefinitions(this))
        }

        initPresets() {
                this.setPresetDefinitions(getPresetDefinitions(this))
        }

        initVariables() {
                this.setVariableDefinitions(getVariables())
        }

        sendCommand(timerNum, path, args = []) {
                if (!this.timers[timerNum]?.connected) {
                        this.log('warn', `Timer ${timerNum} not connected, can't send command`)
                        return
                }

                const fullPath = `/timer${timerNum}${path}`
                sendOSCMessage(this, timerNum, fullPath, args)
        }

        getConfigFields() {
                return getConfigFields()
        }

        async destroy() {
                // Clean up OSC connections when module is destroyed
                for (let timerNum = 1; timerNum <= 4; timerNum++) {
                        if (this.timers[timerNum].connected) {
                                // Properly close OSC connections
                                this.log('info', `Disconnecting from Timer ${timerNum}`)
                                closeOSC(this, timerNum)
                                this.timers[timerNum].connected = false
                        }
                }
        }
}

runEntrypoint(OSCTimerInstance, MODULE_MANIFEST)
