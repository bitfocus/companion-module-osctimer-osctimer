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

        return {
                // Timer Control Actions
                timer_start: {
                        name: "Start Timer",
                        options: [TIMER_DROPDOWN],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/start",
                                );
                        },
                },
                timer_stop: {
                        name: "Stop Timer",
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
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/stop",
                                );
                        },
                },
                timer_reset: {
                        name: "Reset Timer",
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
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/reset",
                                );
                        },
                },
                timer_reset_and_stop: {
                        name: "Reset and Stop Timer",
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
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/resetAndStop",
                                );
                        },
                },

                // Timer Duration Setting Actions
                timer_set_seconds: {
                        name: "Set Timer (Seconds)",
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
                                        type: "number",
                                        label: "Seconds",
                                        id: "seconds",
                                        default: 30,
                                        min: 0,
                                        max: 86400, // 24 hours in seconds
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/seconds",
                                        [event.options.seconds],
                                );
                        },
                },
                timer_set_minutes: {
                        name: "Set Timer (Minutes)",
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
                                        type: "number",
                                        label: "Minutes",
                                        id: "minutes",
                                        default: 5,
                                        min: 0,
                                        max: 1440, // 24 hours in minutes
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/minutes",
                                        [event.options.minutes],
                                );
                        },
                },
                timer_set_hours: {
                        name: "Set Timer (Hours)",
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
                                        type: "number",
                                        label: "Hours",
                                        id: "hours",
                                        default: 1,
                                        min: 0,
                                        max: 24,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/hours",
                                        [event.options.hours],
                                );
                        },
                },
                timer_set_time: {
                        name: "Set Timer (HH:MM:SS)",
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

                // Timer Adjustment Actions
                timer_add_seconds: {
                        name: "Add Seconds to Timer",
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
                                        type: "number",
                                        label: "Seconds to Add",
                                        id: "seconds",
                                        default: 30,
                                        min: 1,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/seconds/add",
                                        [event.options.seconds],
                                );
                        },
                },
                timer_subtract_seconds: {
                        name: "Subtract Seconds from Timer",
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
                                        type: "number",
                                        label: "Seconds to Subtract",
                                        id: "seconds",
                                        default: 30,
                                        min: 1,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/count/seconds/subtract",
                                        [event.options.seconds],
                                );
                        },
                },

                // Timer Direction Control
                timer_count_direction: {
                        name: "Set Timer Direction",
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
                        name: "Set Timer Display Format",
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
                        name: "Set Alert Time (Seconds)",
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
                                        type: "number",
                                        label: "Alert Seconds",
                                        id: "seconds",
                                        default: 10,
                                        min: 0,
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/alert/seconds",
                                        [event.options.seconds],
                                );
                        },
                },

                // Notes Management
                set_notes: {
                        name: "Set Notes Text",
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
                        name: "Set Notes Alignment",
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
                        name: "Set Display Layout",
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
                        name: "Assign Widget to Display Slot",
                        options: [
                                {
                                        type: "dropdown",
                                        label: "Slot",
                                        id: "slot",
                                        default: 1,
                                        choices: [
                                                { id: 1, label: "Slot 1" },
                                                { id: 2, label: "Slot 2" },
                                                { id: 3, label: "Slot 3" },
                                                { id: 4, label: "Slot 4" },
                                        ],
                                },
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
                        name: "Set Timer End Behavior",
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
                        name: "Subscribe Text Broadcast",
                        description:
                                "Subscribe to broadcast the timer's time as text to a specified destination",
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
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/broadcast/text/subscribe",
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_text_unsubscribe: {
                        name: "Unsubscribe Text Broadcast",
                        description:
                                "Unsubscribe from broadcasting the timer's time as text",
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
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/broadcast/text/unsubscribe",
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_warning_subscribe: {
                        name: "Subscribe Warning Broadcast",
                        description:
                                "Subscribe to receive an OSC message when timer enters warning state",
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
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/broadcast/warning/subscribe",
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_warning_unsubscribe: {
                        name: "Unsubscribe Warning Broadcast",
                        description: "Unsubscribe from warning broadcast",
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
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/broadcast/warning/unsubscribe",
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_end_subscribe: {
                        name: "Subscribe End Broadcast",
                        description:
                                "Subscribe to receive an OSC message when timer reaches end",
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
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/broadcast/end/subscribe",
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_end_unsubscribe: {
                        name: "Unsubscribe End Broadcast",
                        description: "Unsubscribe from end broadcast",
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
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/broadcast/end/unsubscribe",
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_color_subscribe: {
                        name: "Subscribe Color Broadcast",
                        description:
                                "Subscribe to broadcast color changes (QLab specific)",
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
                                        default: "/cue/timer/colorName",
                                        required: true,
                                },
                                {
                                        type: "textinput",
                                        label: "Normal Color",
                                        id: "normalColor",
                                        default: "None",
                                        required: true,
                                },
                                {
                                        type: "textinput",
                                        label: "Warning Color",
                                        id: "warningColor",
                                        default: "Yellow",
                                        required: true,
                                },
                                {
                                        type: "textinput",
                                        label: "End Color",
                                        id: "endColor",
                                        default: "Red",
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/broadcast/color/subscribe",
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                                event.options.normalColor,
                                                event.options.warningColor,
                                                event.options.endColor,
                                        ],
                                );
                        },
                },

                broadcast_color_unsubscribe: {
                        name: "Unsubscribe Color Broadcast",
                        description: "Unsubscribe from color broadcast",
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
                                        default: "/cue/timer/colorName",
                                        required: true,
                                },
                        ],
                        callback: (event) => {
                                self.sendCommand(
                                        event.options.timerNum,
                                        "/broadcast/color/unsubscribe",
                                        [
                                                event.options.ip,
                                                event.options.port,
                                                event.options.oscPath,
                                        ],
                                );
                        },
                },

                broadcast_at_time_subscribe: {
                        name: "Subscribe Time Trigger",
                        description:
                                "Subscribe to receive a trigger at a specific time",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "Time Format",
                                        id: "timeFormat",
                                        default: "seconds",
                                        choices: [
                                                {
                                                        id: "seconds",
                                                        label: "Seconds",
                                                },
                                                {
                                                        id: "minutes",
                                                        label: "Minutes",
                                                },
                                                { id: "hours", label: "Hours" },
                                                {
                                                        id: "time",
                                                        label: "Hours:Minutes:Seconds",
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
                                        isVisible: (options) =>
                                                options.timeFormat === "time",
                                },
                                {
                                        type: "number",
                                        label: "Minutes",
                                        id: "minutes",
                                        default: 1,
                                        min: 0,
                                        max: 59,
                                        isVisible: (options) =>
                                                options.timeFormat === "time" ||
                                                options.timeFormat ===
                                                        "minutes",
                                },
                                {
                                        type: "number",
                                        label: "Seconds",
                                        id: "seconds",
                                        default: 30,
                                        min: 0,
                                        max: 59,
                                        isVisible: (options) =>
                                                options.timeFormat === "time" ||
                                                options.timeFormat ===
                                                        "seconds",
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
                                const format = options.timeFormat;
                                let args = [];

                                if (format === "seconds") {
                                        args = [
                                                options.seconds,
                                                options.ip,
                                                options.port,
                                                options.oscPath,
                                        ];
                                        self.sendCommand(
                                                options.timerNum,
                                                "/broadcast/atTime/subscribe/seconds",
                                                args,
                                        );
                                } else if (format === "minutes") {
                                        args = [
                                                options.minutes,
                                                options.ip,
                                                options.port,
                                                options.oscPath,
                                        ];
                                        self.sendCommand(
                                                options.timerNum,
                                                "/broadcast/atTime/subscribe/minutes",
                                                args,
                                        );
                                } else if (format === "hours") {
                                        args = [
                                                options.hours,
                                                options.ip,
                                                options.port,
                                                options.oscPath,
                                        ];
                                        self.sendCommand(
                                                options.timerNum,
                                                "/broadcast/atTime/subscribe/hours",
                                                args,
                                        );
                                } else if (format === "time") {
                                        args = [
                                                options.hours,
                                                options.minutes,
                                                options.seconds,
                                                options.ip,
                                                options.port,
                                                options.oscPath,
                                        ];
                                        self.sendCommand(
                                                options.timerNum,
                                                "/broadcast/atTime/subscribe/time",
                                                args,
                                        );
                                }
                        },
                },

                broadcast_at_time_unsubscribe: {
                        name: "Unsubscribe Time Trigger",
                        description: "Unsubscribe from a specific time trigger",
                        options: [
                                TIMER_DROPDOWN,
                                {
                                        type: "dropdown",
                                        label: "Time Format",
                                        id: "timeFormat",
                                        default: "seconds",
                                        choices: [
                                                {
                                                        id: "seconds",
                                                        label: "Seconds",
                                                },
                                                {
                                                        id: "minutes",
                                                        label: "Minutes",
                                                },
                                                { id: "hours", label: "Hours" },
                                                {
                                                        id: "time",
                                                        label: "Hours:Minutes:Seconds",
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
                                        isVisible: (options) =>
                                                options.timeFormat === "time",
                                },
                                {
                                        type: "number",
                                        label: "Minutes",
                                        id: "minutes",
                                        default: 1,
                                        min: 0,
                                        max: 59,
                                        isVisible: (options) =>
                                                options.timeFormat === "time" ||
                                                options.timeFormat ===
                                                        "minutes",
                                },
                                {
                                        type: "number",
                                        label: "Seconds",
                                        id: "seconds",
                                        default: 30,
                                        min: 0,
                                        max: 59,
                                        isVisible: (options) =>
                                                options.timeFormat === "time" ||
                                                options.timeFormat ===
                                                        "seconds",
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
                                const format = options.timeFormat;
                                let args = [];

                                if (format === "seconds") {
                                        args = [
                                                options.seconds,
                                                options.ip,
                                                options.port,
                                                options.oscPath,
                                        ];
                                        self.sendCommand(
                                                options.timerNum,
                                                "/broadcast/atTime/unsubscribe/seconds",
                                                args,
                                        );
                                } else if (format === "minutes") {
                                        args = [
                                                options.minutes,
                                                options.ip,
                                                options.port,
                                                options.oscPath,
                                        ];
                                        self.sendCommand(
                                                options.timerNum,
                                                "/broadcast/atTime/unsubscribe/minutes",
                                                args,
                                        );
                                } else if (format === "hours") {
                                        args = [
                                                options.hours,
                                                options.ip,
                                                options.port,
                                                options.oscPath,
                                        ];
                                        self.sendCommand(
                                                options.timerNum,
                                                "/broadcast/atTime/unsubscribe/hours",
                                                args,
                                        );
                                } else if (format === "time") {
                                        args = [
                                                options.hours,
                                                options.minutes,
                                                options.seconds,
                                                options.ip,
                                                options.port,
                                                options.oscPath,
                                        ];
                                        self.sendCommand(
                                                options.timerNum,
                                                "/broadcast/atTime/unsubscribe/time",
                                                args,
                                        );
                                }
                        },
                },

                // TIMER DISPLAY CUSTOMIZATION
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

                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/normal/font/color",
                                        [r, g, b, a],
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

                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/alert/font/color",
                                        [r, g, b, a],
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

                                self.sendCommand(
                                        event.options.timerNum,
                                        "/timer/end/font/color",
                                        [r, g, b, a],
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

                                self.sendCommand(
                                        event.options.timerNum,
                                        "/background/timer/color",
                                        [r, g, b, a],
                                );
                        },
                },
        };
}

module.exports = { getActionDefinitions };
