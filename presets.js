// Presets for the OSC Timer module
function getPresetDefinitions(self) {
        const label = "OSC_Timer";

        const presets = {};
        const colors = {
                white: 16777215,
                black: 0,
                red: 16711680,
                green: 65280,
                blue: 255,
                yellow: 16776960,
                orange: 16753920,
                purple: 8388736,
                teal: 32896,
                gray: 8421504,
                darkgreen: 32768,
                darkred: 8388608,
                darkblue: 128,
        };

        for (let timerNum = 1; timerNum <= 4; timerNum++) {
                // Start
                presets[`timer${timerNum}_start`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Control`,
                        name: `Timer Start - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\nSTART`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.darkgreen,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_action",
                                                        options: {
                                                                timerNum,
                                                                action: "start",
                                                        },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };

                // Stop
                presets[`timer${timerNum}_stop`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Control`,
                        name: `Timer Stop - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\nSTOP`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.darkred,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_action",
                                                        options: {
                                                                timerNum,
                                                                action: "stop",
                                                        },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };

                // Start'n'Stop toogle
                presets[`timer${timerNum}_start_stop_toggle`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Control`,
                        name: `Start/Stop Toggle - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\nSTART/STOP`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.darkgreen,
                        },
                        steps: [
                                // Step 1: START
                                {
                                        down: [
                                                {
                                                        actionId: "timer_action",
                                                        options: {
                                                                timerNum,
                                                                action: "start",
                                                        },
                                                },
                                        ],
                                        up: [],
                                },
                                // Step 2: STOP
                                {
                                        down: [
                                                {
                                                        actionId: "timer_action",
                                                        options: {
                                                                timerNum,
                                                                action: "stop",
                                                        },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };

                // Reset
                presets[`timer${timerNum}_reset`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Control`,
                        name: `Timer Reset - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\nRESET`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.darkblue,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_action",
                                                        options: {
                                                                timerNum,
                                                                action: "reset",
                                                        },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };

                // Reset & Stop
                presets[`timer${timerNum}_resetstop`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Control`,
                        name: `Timer Reset & Stop - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\nRESET\nSTOP`,
                                size: "14",
                                color: colors.white,
                                bgcolor: colors.darkred,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_action",
                                                        options: {
                                                                timerNum,
                                                                action: "resetAndStop",
                                                        },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };

                presets[`timer_${timerNum}_feedback`] = {
                        type: "button",
                        category: "Visuel Feedback",
                        name: `Timer ${timerNum} Zone`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n$(${label}:timer${timerNum}_time)`,
                                size: "auto",
                                color: 0xffffff,
                                bgcolor: 0x000000,
                        },
                        steps: [],
                        feedbacks: [
                                {
                                        feedbackId: "timer_zone",
                                        options: {
                                                timerNum: timerNum,
                                                zone: "normal",
                                        },
                                        style: {
                                                color: 0xffffff,
                                                bgcolor: 0x000000,
                                        },
                                },
                                {
                                        feedbackId: "timer_zone",
                                        options: {
                                                timerNum: timerNum,
                                                zone: "warning",
                                        },
                                        style: {
                                                color: 0x000000,
                                                bgcolor: 0xffff00,
                                        },
                                },
                                {
                                        feedbackId: "timer_zone",
                                        options: {
                                                timerNum: timerNum,
                                                zone: "end",
                                        },
                                        style: {
                                                color: 0x000000,
                                                bgcolor: 0xff0000,
                                        },
                                },
                        ],
                };

                // Count Direction
                presets[`timer${timerNum}_direction_up`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Set time`,
                        name: `$(${label}:timer${timerNum}_name)\nTimer Count Up - T`,
                        style: {
                                text: `COUNT\nUP\nT${timerNum}`,
                                size: "14",
                                color: colors.white,
                                bgcolor: colors.teal,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_count_direction",
                                                        options: {
                                                                timerNum,
                                                                direction: 1,
                                                        },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_direction_down`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Set time`,
                        name: `$(${label}:timer${timerNum}_name)\nTimer Count Down - T`,
                        style: {
                                text: `COUNT\nDOWN\nT${timerNum}`,
                                size: "14",
                                color: colors.white,
                                bgcolor: colors.teal,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_count_direction",
                                                        options: {
                                                                timerNum,
                                                                direction: 0,
                                                        },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };

                // Add/Sub Seconds
                presets[`timer${timerNum}_add_1s`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer +1s - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n+1s`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_add_seconds",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_sub_1s`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer -1s - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n-1s`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_subtract_seconds",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_add_1m`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer +1m - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n+1m`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_add_minute",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_sub_1m`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer -1m - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n-1m`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_subtract_minute",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_add_1h`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer +1h - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n+1h`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_add_hour",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_sub_1h`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer -1h - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n-1h`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_subtract_hour",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };

                presets[`timer${timerNum}_live_add_1s`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer +1s - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n+1s\n(LIVE)`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_live_add_seconds",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_live_sub_1s`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer -1s - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n-1s\n(LIVE)`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_live_subtract_seconds",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_live_add_1m`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer +1m - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n+1m\n(LIVE)`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_live_add_minute",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_live_sub_1m`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer -1m - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n-1m\n(LIVE)`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_live_subtract_minute",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_live_add_1h`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer +1h - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n+1h\n(LIVE)`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_live_add_hour",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
                presets[`timer${timerNum}_live_sub_1h`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Add/Subtract`,
                        name: `Timer -1h - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n-1h\n(LIVE)`,
                                size: "Auto",
                                color: colors.white,
                                bgcolor: colors.purple,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_live_subtract_hour",
                                                        options: { timerNum },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };

                // Set Time of Day
                presets[`timer${timerNum}_set_08_00`] = {
                        type: "button",
                        category: `Timer ${timerNum} - Set time`,
                        name: `Timer Set Time of Day 08:00 - T${timerNum}`,
                        style: {
                                text: `$(${label}:timer${timerNum}_name)\n08:00`,
                                size: "14",
                                color: colors.white,
                                bgcolor: colors.orange,
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: "timer_set_time_of_day",
                                                        options: {
                                                                timerNum,
                                                                hours: 8,
                                                                minutes: 0,
                                                                seconds: 0,
                                                                utcOffset: 1,
                                                        },
                                                },
                                        ],
                                        up: [],
                                },
                        ],
                };
        }

        return presets;
}

module.exports = { getPresetDefinitions };
