// Actions for the O:S:C Timer module
function getActionDefinitions(self) {
        // Helper constants for common dropdown options
        const TIMER_DROPDOWN = {
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
        };

        const ACTION_DROPDOWN = {
                type: "dropdown",
                label: "Action",
                id: "action",
                default: "start",
                choices: [
                        { id: "start", label: "Start" },
                        { id: "stop", label: "Stop" },
                        { id: "reset", label: "Reset" },
                        { id: "resetAndStop", label: "Reset og Stop" },
                ],
        };

        const { splitRgb } = require('@companion-module/base')
        
        return {
                // Timer Control Actions
                timer_action: {
                        name: "Timer - Control",
                        description:
                                "Start, stop, reset, or reset and stop the selected timer.",
                        options: [TIMER_DROPDOWN, ACTION_DROPDOWN],
                        callback: (event) => {
                                const action = event.options.action;
                                const timerNum = event.options.timerNum;

                                self.sendCommand(timerNum, `/timer/${action}`);
                        },
                },

                timer_set_time: {
                        name: "Timer - Set Time",
                        description:
                                "Set the time for the selected timer to count to or from.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "number",
                                        label: "Hours",
                                        id: "hours",
                                        default: 0,
                                        min: 0,
                                        max: 24,
                                        required: true,
                                },
                                {
                                        type: "number",
                                        label: "Minutes",
                                        id: "minutes",
                                        default: 5,
                                        min: 0,
                                        max: 59,
                                        required: true,
                                },
                                {
                                        type: "number",
                                        label: "Seconds",
                                        id: "seconds",
                                        default: 0,
                                        min: 0,
                                        max: 59,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/time",
                                        [
                                                event.options.hours,
                                                event.options.minutes,
                                                event.options.seconds,
                                        ],
                                );
                        },
                },

                timer_set_time_of_day: {
                        name: "Timer - Set Time of Day",
                        description:
                                "Set the time of day the selected timer should count down to. Optionally select time zone by UTC offset.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "number",
                                        label: "Hour (0–23)",
                                        id: "hours",
                                        default: 8,
                                        min: 0,
                                        max: 23,
                                        required: true,
                                },
                                {
                                        type: "number",
                                        label: "Minutes",
                                        id: "minutes",
                                        default: 0,
                                        min: 0,
                                        max: 59,
                                        required: true,
                                },
                                {
                                        type: "number",
                                        label: "Seconds",
                                        id: "seconds",
                                        default: 0,
                                        min: 0,
                                        max: 59,
                                        required: true,
                                },
                                {
                                        type: "dropdown",
                                        label: "Time Zone (by UTC Offset)",
                                        id: "utcOffset",
                                        default: 0,
                                        choices: [
                                                {
                                                        id: -12,
                                                        label: "UTC−12 – Baker Island",
                                                },
                                                {
                                                        id: -11,
                                                        label: "UTC−11 – American Samoa",
                                                },
                                                {
                                                        id: -10,
                                                        label: "UTC−10 – Hawaii",
                                                },
                                                {
                                                        id: -9,
                                                        label: "UTC−9 – Alaska",
                                                },
                                                {
                                                        id: -8,
                                                        label: "UTC−8 – Pacific Time (PT)",
                                                },
                                                {
                                                        id: -7,
                                                        label: "UTC−7 – Mountain Time (MT)",
                                                },
                                                {
                                                        id: -6,
                                                        label: "UTC−6 – Central Time (CT)",
                                                },
                                                {
                                                        id: -5,
                                                        label: "UTC−5 – Eastern Time (ET)",
                                                },
                                                {
                                                        id: -4,
                                                        label: "UTC−4 – Atlantic Time (AT)",
                                                },
                                                {
                                                        id: -3,
                                                        label: "UTC−3 – Argentina / Brazil (East)",
                                                },
                                                {
                                                        id: -2,
                                                        label: "UTC−2 – South Georgia",
                                                },
                                                {
                                                        id: -1,
                                                        label: "UTC−1 – Azores",
                                                },
                                                {
                                                        id: 0,
                                                        label: "UTC±0 – London / Lisbon",
                                                },
                                                {
                                                        id: 1,
                                                        label: "UTC+1 – Central Europe (CET)",
                                                },
                                                {
                                                        id: 2,
                                                        label: "UTC+2 – Eastern Europe / South Africa",
                                                },
                                                {
                                                        id: 3,
                                                        label: "UTC+3 – Moscow / EAT",
                                                },
                                                {
                                                        id: 4,
                                                        label: "UTC+4 – Dubai / Samara",
                                                },
                                                {
                                                        id: 5,
                                                        label: "UTC+5 – Pakistan / Uzbekistan",
                                                },
                                                {
                                                        id: 6,
                                                        label: "UTC+6 – Bangladesh / Kazakhstan",
                                                },
                                                {
                                                        id: 7,
                                                        label: "UTC+7 – Thailand / Vietnam",
                                                },
                                                {
                                                        id: 8,
                                                        label: "UTC+8 – China / Singapore / Perth",
                                                },
                                                {
                                                        id: 9,
                                                        label: "UTC+9 – Japan / Korea",
                                                },
                                                {
                                                        id: 10,
                                                        label: "UTC+10 – Sydney / Vladivostok",
                                                },
                                                {
                                                        id: 11,
                                                        label: "UTC+11 – Solomon Islands",
                                                },
                                                {
                                                        id: 12,
                                                        label: "UTC+12 – New Zealand / Fiji",
                                                },
                                                {
                                                        id: 13,
                                                        label: "UTC+13 – Tonga / Phoenix Islands",
                                                },
                                                {
                                                        id: 14,
                                                        label: "UTC+14 – Line Islands (Kiribati)",
                                                },
                                        ],
                                        required: false,
                                },
                        ],
                        callback: (event) => {
                                const args = [
                                        event.options.hours,
                                        event.options.minutes,
                                        event.options.seconds,
                                ];

                                if (
                                        typeof event.options.utcOffset ===
                                        "number"
                                ) {
                                        args.push(event.options.utcOffset);
                                }

                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/toTimeOfDay",
                                        args,
                                );
                        },
                },

                // Timer Adjustment Actions
                timer_adjust_time: {
                        name: "Timer - Adjust Time",
                        description: "Add or subtract hours/minutes/seconds (live or static) to a timer.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: 'number',
                                        label: 'Hours',
                                        id: 'hours',
                                        default: 0,
                                        min: 0,
                                },
                                {
                                        type: 'number',
                                        label: 'Minutes',
                                        id: 'minutes',
                                        default: 0,
                                        min: 0,
                                },
                                {
                                        type: 'number',
                                        label: 'Seconds',
                                        id: 'seconds',
                                        default: 0,
                                        min: 0,
                                },
                                {
                                        type: 'dropdown',
                                        label: 'Adjustment Type',
                                        id: 'adjustType',
                                        default: 'add',
                                        choices: [
                                                { id: 'add', label: 'Add' },
                                                { id: 'subtract', label: 'Subtract' },
                                        ],
                                },
                                {
                                        type: 'dropdown',
                                        label: 'Timing Mode',
                                        id: 'timingMode',
                                        default: 'static',
                                        choices: [
                                                { id: 'static', label: 'Static (permanent)' },
                                                { id: 'live', label: 'Live (temporary)' },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                const { timerNum, hours, minutes, seconds, adjustType, timingMode } = event.options
                        
                                const parsed = [
                                        parseInt(hours) || 0,
                                        parseInt(minutes) || 0,
                                        parseInt(seconds) || 0,
                                ]
                        
                                let path
                        
                                if (timingMode === 'live') {
                                        // Capitalize only the first letter for live mode
                                        const capitalized = adjustType.charAt(0).toUpperCase() + adjustType.slice(1)
                                        path = `/timer/count/time/live${capitalized}`
                                } else {
                                        // Static mode uses lowercase path
                                        path = `/timer/count/time/${adjustType}`
                                }
                        
                                self.sendCommand(timerNum, path, parsed)
                        }
                },
                
                // Timer Direction Control
                timer_count_direction: {
                        name: "Timer - Set Direction",
                        description:
                                "Set whether the selected timer counts up or down.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "Direction",
                                        id: "direction",
                                        default: 0,
                                        choices: [
                                                { id: 0, label: "Count Down" },
                                                { id: 1, label: "Count Up" },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/direction",
                                        [event.options.direction],
                                );
                        },
                },

                // Timer Display Format
                timer_show_format: {
                        name: "Timer - Set Display Format",
                        description:
                                "Set the time display format of the selected timer.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "Format",
                                        id: "format",
                                        default: 2,
                                        choices: [
                                                {
                                                        id: 0,
                                                        label: "Seconds with Decimals (SS.D)",
                                                },
                                                {
                                                        id: 1,
                                                        label: "Seconds Only (SS)",
                                                },
                                                {
                                                        id: 2,
                                                        label: "Minutes and Seconds (MM:SS)",
                                                },
                                                {
                                                        id: 3,
                                                        label: "Hours, Minutes, and Seconds (HH:MM:SS)",
                                                },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/show",
                                        [event.options.format],
                                );
                        },
                },

                // Timer Alert Settings
                timer_set_alert_seconds: {
                        name: "Timer - Set Alert Time",
                        description:
                                "Define the time when the selected timer enters alert state.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "number",
                                        label: "Hours",
                                        id: "hours",
                                        default: 0,
                                        min: 0,
                                        max: 24,
                                        required: true,
                                },
                                {
                                        type: "number",
                                        label: "Minutes",
                                        id: "minutes",
                                        default: 5,
                                        min: 0,
                                        max: 59,
                                        required: true,
                                },
                                {
                                        type: "number",
                                        label: "Seconds",
                                        id: "seconds",
                                        default: 0,
                                        min: 0,
                                        max: 59,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/alert/time",
                                        [
                                                event.options.hours,
                                                event.options.minutes,
                                                event.options.seconds,
                                        ],
                                );
                        },
                },

                // Notes Management
                set_notes: {
                        name: "Notes - Set Text",
                        description:
                                "Set the text displayed in the notes area. Optionally auto-remove after a time.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "textinput",
                                        label: "Notes Text",
                                        id: "text",
                                        default: "Speaker Time Remaining",
                                        required: true,
                                },
                                {
                                        type: "number",
                                        label: "Auto Remove After (seconds, 0 = never)",
                                        id: "autoRemove",
                                        default: 0,
                                        min: 0,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                const args = [event.options.text];
                                if (event.options.autoRemove > 0) {
                                        args.push(event.options.autoRemove);
                                }
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/notes/text",
                                        args,
                                );
                        },
                },
                set_notes_alignment: {
                        name: "Notes - Set Alignment",
                        description:
                                "Set the alignment of the notes text on screen.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "Alignment",
                                        id: "alignment",
                                        default: 1,
                                        choices: [
                                                {
                                                        id: 0,
                                                        label: "Center - Trailing",
                                                },
                                                {
                                                        id: 1,
                                                        label: "Center - Center",
                                                },
                                                {
                                                        id: 2,
                                                        label: "Center - Leading",
                                                },
                                                {
                                                        id: 3,
                                                        label: "Top - Trailing",
                                                },
                                                {
                                                        id: 4,
                                                        label: "Top - Center",
                                                },
                                                {
                                                        id: 5,
                                                        label: "Top - Leading",
                                                },
                                                {
                                                        id: 6,
                                                        label: "Bottom - Trailing",
                                                },
                                                {
                                                        id: 7,
                                                        label: "Bottom - Center",
                                                },
                                                {
                                                        id: 8,
                                                        label: "Bottom - Leading",
                                                },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/notes/alignment",
                                        [event.options.alignment],
                                );
                        },
                },

                // Display Slot Layout
                set_display_layout: {
                        name: "Layout - Set Slot Count",
                        description:
                                "Set the number of visible display slots (single, dual, or quad).",
                        options: [
                                {
                                        type: "dropdown",
                                        label: "Layout",
                                        id: "layout",
                                        default: "single",
                                        choices: [
                                                {
                                                        id: "single",
                                                        label: "Single Timer",
                                                },
                                                {
                                                        id: "dual",
                                                        label: "Dual Timers",
                                                },
                                                {
                                                        id: "quad",
                                                        label: "Quad Timers",
                                                },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                // This command is sent without a timer number prefix
                                const fullPath = `/display/slot/layout/${event.options.layout}`;
                                self.sendCommand(1, fullPath, []); // Using timer 1 as default for global commands
                        },
                },
                set_slot_widget: {
                        name: "Layout - Assign Widget to Slot",
                        description:
                                "Assign a timer or other widget to a display slot.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "Widget",
                                        id: "widget",
                                        default: "timer1",
                                        choices: [
                                                {
                                                        id: "timer1",
                                                        label: "Timer 1",
                                                },
                                                {
                                                        id: "timer2",
                                                        label: "Timer 2",
                                                },
                                                {
                                                        id: "timer3",
                                                        label: "Timer 3",
                                                },
                                                {
                                                        id: "timer4",
                                                        label: "Timer 4",
                                                },
                                                {
                                                        id: "broadcast",
                                                        label: "Broadcast",
                                                },
                                                { id: "clock", label: "Clock" },
                                                {
                                                        id: "monitor",
                                                        label: "Monitor",
                                                },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                // This command is sent without a timer number prefix
                                const fullPath = `/display/slot/${event.options.slot}/${event.options.widget}`;
                                self.sendCommand(1, fullPath, []); // Using timer 1 as default for global commands
                        },
                },

                // Timer end behavior
                set_timer_end_behavior: {
                        name: "Timer - Set End Behavior",
                        description:
                                "Set what happens when the selected timer reaches zero.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "End Behavior",
                                        id: "behavior",
                                        default: 0,
                                        choices: [
                                                {
                                                        id: 0,
                                                        label: "Continue Past Zero",
                                                },
                                                {
                                                        id: 1,
                                                        label: "Stop at Zero",
                                                },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/atEnd",
                                        [event.options.behavior],
                                );
                        },
                },

                // BROADCAST ACTIONS
                broadcast_text_subscribe: {
                        name: "Broadcast - Subscribe to Text",
                        description:
                                "Subscribe or unsubscribe to broadcasting timer text over OSC.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "textinput",
                                        label: "IP Address",
                                        id: "ip",
                                        default: "127.0.0.1",
                                        regex: "^(?:\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})|(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*(?:[A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$",
                                },
                                {
                                        type: "number",
                                        label: "Port",
                                        id: "port",
                                        default: 53000,
                                        min: 1,
                                        max: 65535,
                                        required: true,
                                },
                                {
                                        type: "textinput",
                                        label: "OSC Path",
                                        id: "oscPath",
                                        default: "/timer/time",
                                        required: true,
                                },
                                {
                                        type: "dropdown",
                                        label: "Action",
                                        id: "action",
                                        default: "subscribe",
                                        choices: [
                                                {
                                                        id: "subscribe",
                                                        label: "Subscribe",
                                                },
                                                {
                                                        id: "unsubscribe",
                                                        label: "Unsubscribe",
                                                },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        `/broadcast/text/${event.options.action}`,
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_warning_subscribe: {
                        name: "Broadcast - Subscribe to Warning",
                        description:
                                "Subscribe or unsubscribe to OSC messages when timer enters warning state.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "textinput",
                                        label: "IP Address",
                                        id: "ip",
                                        default: "127.0.0.1",
                                        regex: "^(?:\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})|(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*(?:[A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$",
                                },
                                {
                                        type: "number",
                                        label: "Port",
                                        id: "port",
                                        default: 53000,
                                        min: 1,
                                        max: 65535,
                                        required: true,
                                },
                                {
                                        type: "textinput",
                                        label: "OSC Path",
                                        id: "oscPath",
                                        default: "/timer/warning",
                                        required: true,
                                },
                                {
                                        type: "dropdown",
                                        label: "Action",
                                        id: "action",
                                        default: "subscribe",
                                        choices: [
                                                {
                                                        id: "subscribe",
                                                        label: "Subscribe",
                                                },
                                                {
                                                        id: "unsubscribe",
                                                        label: "Unsubscribe",
                                                },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        `/broadcast/warning/${event.options.action}`,
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_end_subscribe: {
                        name: "Broadcast - Subscribe to End",
                        description:
                                "Subscribe or unsubscribe to OSC messages when timer ends.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "textinput",
                                        label: "IP Address",
                                        id: "ip",
                                        default: "127.0.0.1",
                                        regex: "^(?:\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})|(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*(?:[A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$",
                                },
                                {
                                        type: "number",
                                        label: "Port",
                                        id: "port",
                                        default: 53000,
                                        min: 1,
                                        max: 65535,
                                        required: true,
                                },
                                {
                                        type: "textinput",
                                        label: "OSC Path",
                                        id: "oscPath",
                                        default: "/timer/end",
                                        required: true,
                                },
                                {
                                        type: "dropdown",
                                        label: "Action",
                                        id: "action",
                                        default: "subscribe",
                                        choices: [
                                                {
                                                        id: "subscribe",
                                                        label: "Subscribe",
                                                },
                                                {
                                                        id: "unsubscribe",
                                                        label: "Unsubscribe",
                                                },
                                        ],
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        `/broadcast/end/${event.options.action}`,
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_at_time_subscribe: {
                        name: "Broadcast - Subscribe to Time Trigger",
                        description:
                                "Subscribe or unsubscribe to receive a message at a specific timer value.",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "Action",
                                        id: "action",
                                        default: "subscribe",
                                        choices: [
                                                {
                                                        id: "subscribe",
                                                        label: "Subscribe",
                                                },
                                                {
                                                        id: "unsubscribe",
                                                        label: "Unsubscribe",
                                                },
                                        ],
                                },
                                {
                                        type: "number",
                                        label: "Hours",
                                        id: "hours",
                                        default: 0,
                                        min: 0,
                                        max: 24,
                                },
                                {
                                        type: "number",
                                        label: "Minutes",
                                        id: "minutes",
                                        default: 1,
                                        min: 0,
                                        max: 59,
                                },
                                {
                                        type: "number",
                                        label: "Seconds",
                                        id: "seconds",
                                        default: 30,
                                        min: 0,
                                        max: 59,
                                },
                                {
                                        type: "textinput",
                                        label: "IP Address",
                                        id: "ip",
                                        default: "127.0.0.1",
                                        regex: "^(?:\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})|(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*(?:[A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$",
                                },
                                {
                                        type: "number",
                                        label: "Port",
                                        id: "port",
                                        default: 53000,
                                        min: 1,
                                        max: 65535,
                                        required: true,
                                },
                                {
                                        type: "textinput",
                                        label: "OSC Path",
                                        id: "oscPath",
                                        default: "/timer/trigger",
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                const options = event.options;
                                let args = [
                                        options.hours,
                                        options.minutes,
                                        options.seconds,
                                        options.ip,
                                        options.port,
                                        options.oscPath,
                                ];
                                self.sendCommand(
                                        options.timerNum,
                                        `/broadcast/atTime/${options.action}/time`,
                                        args,
                                );
                        },
                },

                // TIMER DISPLAY CUSTOMIZATION

                set_display_color: {
                        name: "Display - Set Color",
                        description: "Set the color and opacity for display elements (timer, notes, etc.).",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "Display Element",
                                        id: "element",
                                        default: "timer_normal_font",
                                        choices: [
                                                { id: "timer_normal_background", label: "Timer Background (Normal State)" },
                                                { id: "timer_warning_background", label: "Timer Background (Warning State)" },
                                                { id: "timer_end_background", label: "Timer Background (End State)" },
                                                { id: "timer_background", label: "Timer Background (All zones)" },

                                                { id: "timer_normal_font", label: "Timer Font (Normal State)" },
                                                { id: "timer_end_font", label: "Timer Font (End State)" },
                                                { id: "timer_warning_font", label: "Timer Font (Warning State)" },
                                                { id: "timer_font", label: "Timer Font (All zones)" }, 
                                                
                                                { id: "notes_normal_background", label: "Notes Background (Normal State)" },
                                                { id: "notes_warning_background", label: "Notes Background (Warning State)" },
                                                { id: "notes_end_background", label: "Notes Background (End State)" },
                                                { id: "notes_background", label: "Notes Background (All zones)" },

                                                { id: "notes_normal_font", label: "Notes Font (Normal State)" },
                                                { id: "notes_end_font", label: "Notes Font (End State)" },
                                                { id: "notes_warning_font", label: "Notes Font (Warning State)" },
                                                { id: "notes_font", label: "Notes Font (All zones)" }, 

                                                { id: "app_background", label: "App Background" },
                                                { id: "clock_normal", label: "Clock Background" },
                                                { id: "clock_normal_", label: "Clock Font" },
                                        ],
                                },
                                {
                                        type: "colorpicker",
                                        label: "Color (RGBA)",
                                        id: "color",
                                        default: "#FFFFFFFF", // White with full alpha
                                },
                        ],


                        callback: (event) => {
                                const pathMap = {
                                        timer_normal_background: "/background/timer/color/normal",
                                        timer_warning_background: "/background/timer/color/alert",
                                        timer_end_background: "/background/timer/color/end",
                                        timer_background: "/background/timer/color",

                                        timer_normal_font: "/timer/normal/font/color",
                                        timer_warning_font: "/timer/alert/font/color",
                                        timer_end_font: "/timer/end/font/color",
                                        timer_font: "/timer/font/color",

                                        notes_normal_background: "/background/notes/color/normal",
                                        notes_warning_background: "/background/notes/color/alert",
                                        notes_end_background: "/background/notes/color/end",
                                        notes_background: "/background/notes/color",

                                        notes_normal_font: "/notes/normal/font/color",
                                        notes_warning_font: "/notes/alert/font/color",
                                        notes_end_font: "/notes/end/font/color",
                                        notes_font: "/notes/font/color",

                                        app_background: "/background/app/color",
                                        clock_normal: "/clock/background/color",
                                        clock_normal: "/clock/font/color",
                                }
                
                                const path = pathMap[event.options.element]

                                const { r, g, b, a } = splitRgb(event.options.color)

                                const toFloat = (v) => parseFloat((v / 255) + 0.000001)

                                const values = [toFloat(r), toFloat(g), toFloat(b), parseFloat(a + 0.000001)]
                
                                self.sendCommand(event.options.timerNum, path, values)
                        },
                },
        };
}


module.exports = { getActionDefinitions };
