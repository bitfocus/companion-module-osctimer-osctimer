// Actions for the OSC Timer module
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
                timer_add_seconds: {
                        name: "Timer - Add 1 Second",
                        description: "Add 1 second to the selected timer.",
                        options: [TIMER_DROPDOWN],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/seconds/add",
                                        [1],
                                );
                        },
                },
                timer_subtract_seconds: {
                        name: "Timer - Subtract 1 Second",
                        description:
                                "Subtract 1 second from the selected timer.",
                        options: [TIMER_DROPDOWN],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/seconds/subtract",
                                        [1],
                                );
                        },
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
                        description:
                                "Set the color and opacity for display elements (timer, notes, etc.).",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "Display Element",
                                        id: "element",
                                        default: "timer_normal",
                                        choices: [
                                                {
                                                        id: "timer_normal",
                                                        label: "Timer (Normal State)",
                                                },
                                                {
                                                        id: "timer_warning",
                                                        label: "Timer (Warning State)",
                                                },
                                                {
                                                        id: "timer_end",
                                                        label: "Timer (End State)",
                                                },
                                                {
                                                        id: "timer_background",
                                                        label: "Timer Background",
                                                },
                                                {
                                                        id: "app_background",
                                                        label: "App Background",
                                                },
                                                {
                                                        id: "clock_normal",
                                                        label: "Clock (Normal)",
                                                },
                                                {
                                                        id: "broadcast_normal",
                                                        label: "Broadcast Display (Normal)",
                                                },
                                                {
                                                        id: "notes_normal",
                                                        label: "Notes (Normal)",
                                                },
                                                {
                                                        id: "notes_background",
                                                        label: "Notes Background",
                                                },
                                        ],
                                },
                                {
                                        type: "colorpicker",
                                        label: "Color",
                                        id: "color",
                                        default: "#FFFFFF", // White as default
                                },
                                {
                                        type: "number",
                                        label: "Opacity (0-100%)",
                                        id: "alpha",
                                        default: 100,
                                        min: 0,
                                        max: 100,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                // Get the element path based on the selected element
                                const elementPaths = {
                                        timer_normal:
                                                "/timer/display/normalColor",
                                        timer_warning:
                                                "/timer/display/warningColor",
                                        timer_end: "/timer/display/endColor",
                                        timer_background:
                                                "/timer/display/backgroundColor",
                                        app_background:
                                                "/app/display/backgroundColor",
                                        clock_normal:
                                                "/clock/display/normalColor",
                                        broadcast_normal:
                                                "/broadcast/display/normalColor",
                                        notes_normal:
                                                "/notes/display/normalColor",
                                        notes_background:
                                                "/notes/display/backgroundColor",
                                };

                                // Set default colors based on element type for fallback
                                const defaultColors = {
                                        timer_normal: [1.0, 1.0, 1.0], // White
                                        timer_warning: [1.0, 1.0, 0.0], // Yellow
                                        timer_end: [1.0, 0.0, 0.0], // Red
                                        timer_background: [0.0, 0.0, 0.0], // Black
                                        app_background: [0.0, 0.0, 0.0], // Black
                                        clock_normal: [1.0, 1.0, 1.0], // White
                                        broadcast_normal: [1.0, 1.0, 1.0], // White
                                        notes_normal: [1.0, 1.0, 1.0], // White
                                        notes_background: [0.0, 0.0, 0.0], // Black
                                };

                                // Select the appropriate OSC path
                                const path =
                                        elementPaths[event.options.element];
                                const defaultRGB =
                                        defaultColors[event.options.element];

                                // Handle color value which might be a number (RGB int) instead of a string
                                let r, g, b;
                                const colorValue = event.options.color;

                                // Check if color is a number (RGB integer)
                                if (typeof colorValue === "number") {
                                        r =
                                                ((colorValue >> 16) & 0xff) /
                                                        255 +
                                                0.00001; // Adding tiny value to ensure float
                                        g =
                                                ((colorValue >> 8) & 0xff) /
                                                        255 +
                                                0.00001;
                                        b = (colorValue & 0xff) / 255 + 0.00001;
                                }
                                // Or if it's a string (hex color)
                                else if (typeof colorValue === "string") {
                                        const color = colorValue.replace(
                                                "#",
                                                "",
                                        );
                                        r =
                                                parseInt(
                                                        color.substring(0, 2),
                                                        16,
                                                ) /
                                                        255 +
                                                0.00001;
                                        g =
                                                parseInt(
                                                        color.substring(2, 4),
                                                        16,
                                                ) /
                                                        255 +
                                                0.00001;
                                        b =
                                                parseInt(
                                                        color.substring(4, 6),
                                                        16,
                                                ) /
                                                        255 +
                                                0.00001;
                                }
                                // Default colors based on element type if format is unexpected
                                else {
                                        r = defaultRGB[0];
                                        g = defaultRGB[1];
                                        b = defaultRGB[2];
                                }

                                const a = event.options.alpha / 100 + 0.00001; // Add tiny amount to ensure float

                                self.sendCommand(event.options.timerNum, path, [
                                        r,
                                        g,
                                        b,
                                        a,
                                ]);
                        },
                },

                timer_set_normal_color: {
                        name: "Set Timer Normal Color",
                        description: "Set the color for normal timer display",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "colorpicker",
                                        label: "Normal Color",
                                        id: "color",
                                        default: "#FFFFFF", // White
                                },
                                {
                                        type: "number",
                                        label: "Opacity (0-100%)",
                                        id: "alpha",
                                        default: 100,
                                        min: 0,
                                        max: 100,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                // Handle color value which might be a number (RGB int) instead of a string
                                let r, g, b;
                                const colorValue = event.options.color;

                                // Check if color is a number (RGB integer)
                                if (typeof colorValue === "number") {
                                        r = ((colorValue >> 16) & 0xff) / 255;
                                        g = ((colorValue >> 8) & 0xff) / 255;
                                        b = (colorValue & 0xff) / 255;
                                }
                                // Or if it's a string (hex color)
                                else if (typeof colorValue === "string") {
                                        const color = colorValue.replace(
                                                "#",
                                                "",
                                        );
                                        r =
                                                parseInt(
                                                        color.substring(0, 2),
                                                        16,
                                                ) / 255;
                                        g =
                                                parseInt(
                                                        color.substring(2, 4),
                                                        16,
                                                ) / 255;
                                        b =
                                                parseInt(
                                                        color.substring(4, 6),
                                                        16,
                                                ) / 255;
                                }
                                // Default to white if format is unexpected
                                else {
                                        r = 1.0;
                                        g = 1.0;
                                        b = 1.0;
                                }

                                const a = event.options.alpha / 100; // Convert percentage to 0.0-1.0

                                const toForcedFloat = (val) => val + 1e-6;

                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/normal/font/color",
                                        [
                                                toForcedFloat(r),
                                                toForcedFloat(g),
                                                toForcedFloat(b),
                                                toForcedFloat(a),
                                        ],
                                );
                        },
                },

                timer_set_warning_color: {
                        name: "Set Timer Warning Color",
                        description: "Set the color for timer warning state",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "colorpicker",
                                        label: "Warning Color",
                                        id: "color",
                                        default: "#FFFF00", // Yellow
                                },
                                {
                                        type: "number",
                                        label: "Opacity (0-100%)",
                                        id: "alpha",
                                        default: 100,
                                        min: 0,
                                        max: 100,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                // Handle color value which might be a number (RGB int) instead of a string
                                let r, g, b;
                                const colorValue = event.options.color;

                                // Check if color is a number (RGB integer)
                                if (typeof colorValue === "number") {
                                        r = ((colorValue >> 16) & 0xff) / 255;
                                        g = ((colorValue >> 8) & 0xff) / 255;
                                        b = (colorValue & 0xff) / 255;
                                }
                                // Or if it's a string (hex color)
                                else if (typeof colorValue === "string") {
                                        const color = colorValue.replace(
                                                "#",
                                                "",
                                        );
                                        r =
                                                parseInt(
                                                        color.substring(0, 2),
                                                        16,
                                                ) / 255;
                                        g =
                                                parseInt(
                                                        color.substring(2, 4),
                                                        16,
                                                ) / 255;
                                        b =
                                                parseInt(
                                                        color.substring(4, 6),
                                                        16,
                                                ) / 255;
                                }
                                // Default to yellow if format is unexpected
                                else {
                                        r = 1.0;
                                        g = 1.0;
                                        b = 0.0;
                                }

                                const a = event.options.alpha / 100; // Convert percentage to 0.0-1.0

                                const toForcedFloat = (val) => val + 1e-6;

                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/alert/font/color",
                                        [
                                                toForcedFloat(r),
                                                toForcedFloat(g),
                                                toForcedFloat(b),
                                                toForcedFloat(a),
                                        ],
                                );
                        },
                },

                timer_set_end_color: {
                        name: "Set Timer End Color",
                        description: "Set the color for timer end state",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "colorpicker",
                                        label: "End Color",
                                        id: "color",
                                        default: "#FF0000", // Red
                                },
                                {
                                        type: "number",
                                        label: "Opacity (0-100%)",
                                        id: "alpha",
                                        default: 100,
                                        min: 0,
                                        max: 100,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                // Handle color value which might be a number (RGB int) instead of a string
                                let r, g, b;
                                const colorValue = event.options.color;

                                // Check if color is a number (RGB integer)
                                if (typeof colorValue === "number") {
                                        r = ((colorValue >> 16) & 0xff) / 255;
                                        g = ((colorValue >> 8) & 0xff) / 255;
                                        b = (colorValue & 0xff) / 255;
                                }
                                // Or if it's a string (hex color)
                                else if (typeof colorValue === "string") {
                                        const color = colorValue.replace(
                                                "#",
                                                "",
                                        );
                                        r =
                                                parseInt(
                                                        color.substring(0, 2),
                                                        16,
                                                ) / 255;
                                        g =
                                                parseInt(
                                                        color.substring(2, 4),
                                                        16,
                                                ) / 255;
                                        b =
                                                parseInt(
                                                        color.substring(4, 6),
                                                        16,
                                                ) / 255;
                                }
                                // Default to red if format is unexpected
                                else {
                                        r = 1.0;
                                        g = 0.0;
                                        b = 0.0;
                                }

                                const a = event.options.alpha / 100; // Convert percentage to 0.0-1.0

                                const toForcedFloat = (val) => val + 1e-6;

                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/end/font/color",
                                        [
                                                toForcedFloat(r),
                                                toForcedFloat(g),
                                                toForcedFloat(b),
                                                toForcedFloat(a),
                                        ],
                                );
                        },
                },

                timer_set_background_color: {
                        name: "Set Timer Background Color",
                        description:
                                "Set the background color for timer display",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "colorpicker",
                                        label: "Background Color",
                                        id: "color",
                                        default: "#000000", // Black
                                },
                                {
                                        type: "number",
                                        label: "Opacity (0-100%)",
                                        id: "alpha",
                                        default: 100,
                                        min: 0,
                                        max: 100,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                // Handle color value which might be a number (RGB int) instead of a string
                                let r, g, b;
                                const colorValue = event.options.color;

                                // Check if color is a number (RGB integer)
                                if (typeof colorValue === "number") {
                                        r = ((colorValue >> 16) & 0xff) / 255;
                                        g = ((colorValue >> 8) & 0xff) / 255;
                                        b = (colorValue & 0xff) / 255;
                                }
                                // Or if it's a string (hex color)
                                else if (typeof colorValue === "string") {
                                        const color = colorValue.replace(
                                                "#",
                                                "",
                                        );
                                        r =
                                                parseInt(
                                                        color.substring(0, 2),
                                                        16,
                                                ) / 255;
                                        g =
                                                parseInt(
                                                        color.substring(2, 4),
                                                        16,
                                                ) / 255;
                                        b =
                                                parseInt(
                                                        color.substring(4, 6),
                                                        16,
                                                ) / 255;
                                }
                                // Default to black if format is unexpected
                                else {
                                        r = 0.0;
                                        g = 0.0;
                                        b = 0.0;
                                }

                                const a = event.options.alpha / 100; // Convert percentage to 0.0-1.0

                                const toForcedFloat = (val) => val + 1e-6;

                                self.sendCommand(
                                        event.options.timerNum,
                                        "/background/timer/color",
                                        [
                                                toForcedFloat(r),
                                                toForcedFloat(g),
                                                toForcedFloat(b),
                                                toForcedFloat(a),
                                        ],
                                );
                        },
                },
        };
}

module.exports = { getActionDefinitions };
