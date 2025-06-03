function getFeedbackDefinitions(self) {
        return {
                timer_zone: {
                        type: "advanced",
                        name: "Timer Zone",
                        description: "Changes style based on timer zone (normal, warning, end)",
                        options: [
                                {
                                        type: "dropdown",
                                        label: "Timer",
                                        id: "timerNum",
                                        default: 1,
                                        choices: [
                                                { id: 1, label: "Timer 1" },
                                                { id: 2, label: "Timer 2" },
                                                { id: 3, label: "Timer 3" },
                                                { id: 4, label: "Timer 4" },
                                        ],
                                },
                                {
                                        type: "dropdown",
                                        label: "Zone",
                                        id: "zone",
                                        default: "normal",
                                        choices: [
                                                { id: "normal", label: "Normal" },
                                                { id: "warning", label: "Warning" },
                                                { id: "end", label: "End" },
                                        ],
                                },
                        ],
                        callback: (feedback) => {
                                const { timerNum, zone } = feedback.options

                                const currentZone = (self[`timer${timerNum}_zone`] || '').toLowerCase()
                                const targetZone = (zone || '').toLowerCase()

                                self.log(
                                        "debug",
                                        `Feedback check: timer${timerNum}_zone = ${currentZone} (wanted: ${targetZone})`
                                )

                                if (currentZone === targetZone) {
                                        return {
                                                color: 0xffffff, // white
                                                bgcolor: 0x00ff00, // green when matched
                                        }
                                }
                                
                                return {}
                        }
                },

                timer_running: {
                        type: "advanced",
                        name: "Timer Running",
                        description: "Shows if timer is currently running",
                        options: [
                                {
                                        type: "dropdown",
                                        label: "Timer",
                                        id: "timerNum",
                                        default: 1,
                                        choices: [
                                                { id: 1, label: "Timer 1" },
                                                { id: 2, label: "Timer 2" },
                                                { id: 3, label: "Timer 3" },
                                                { id: 4, label: "Timer 4" },
                                        ],
                                },
                        ],
                        callback: (feedback) => {
                                const { timerNum } = feedback.options
                                const isRunning = self[`timer${timerNum}_running`] || false

                                if (isRunning) {
                                        return {
                                                color: 0xffffff, // white
                                                bgcolor: 0x00aa00, // green when running
                                        }
                                }
                                
                                return {
                                        color: 0xffffff, // white
                                        bgcolor: 0x666666, // gray when stopped
                                }
                        }
                },

                timer_time_remaining: {
                        type: "advanced",
                        name: "Timer Time Display",
                        description: "Shows current timer time",
                        options: [
                                {
                                        type: "dropdown",
                                        label: "Timer",
                                        id: "timerNum",
                                        default: 1,
                                        choices: [
                                                { id: 1, label: "Timer 1" },
                                                { id: 2, label: "Timer 2" },
                                                { id: 3, label: "Timer 3" },
                                                { id: 4, label: "Timer 4" },
                                        ],
                                },
                        ],
                        callback: (feedback) => {
                                const { timerNum } = feedback.options
                                const timeRemaining = self[`timer${timerNum}_time`] || "00:00"

                                return {
                                        text: timeRemaining,
                                        color: 0xffffff,
                                        bgcolor: 0x000000,
                                }
                        }
                }
        };
}

module.exports = { getFeedbackDefinitions };
