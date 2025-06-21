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

                // Adjust Time (examples for +1s, -1s, +1m, -1m, +1h, -1h, both static and live)
                const times = [
                        { id: "1s", h: 0, m: 0, s: 1 },
                        { id: "1m", h: 0, m: 1, s: 0 },
                        { id: "1h", h: 1, m: 0, s: 0 },
                ];
                const modes = [
                        { label: "", mode: "static" },
                        { label: "\n(LIVE)", mode: "live" },
                ];
                const signs = [
                        { prefix: "+", adjustType: "add" },
                        { prefix: "-", adjustType: "subtract" },
                ];

                for (const time of times) {
                        for (const mode of modes) {
                                for (const sign of signs) {
                                        const id = `${sign.adjustType}_${time.id}_${mode.mode}`;
                                        presets[`timer${timerNum}_${id}`] = {
                                                type: "button",
                                                category: `Timer ${timerNum} - Add/Subtract`,
                                                name: `Timer ${sign.prefix}${time.id} - T${timerNum}`,
                                                style: {
                                                        text: `$(${label}:timer${timerNum}_name)\n${sign.prefix}${time.id}${mode.label}`,
                                                        size: "Auto",
                                                        color: colors.white,
                                                        bgcolor: colors.purple,
                                                },
                                                steps: [
                                                        {
                                                                down: [
                                                                        {
                                                                                actionId: "timer_adjust_time",
                                                                                options: {
                                                                                        timerNum,
                                                                                        hours: time.h,
                                                                                        minutes: time.m,
                                                                                        seconds: time.s,
                                                                                        adjustType: sign.adjustType,
                                                                                        timingMode: mode.mode,
                                                                                },
                                                                        },
                                                                ],
                                                                up: [],
                                                        },
                                                ],
                                        };
                                }
                        }
                }
        }

        return presets;
}

module.exports = { getPresetDefinitions };      