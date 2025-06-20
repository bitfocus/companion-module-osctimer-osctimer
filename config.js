const { Regex } = require('@companion-module/base')

function getConfigFields() {
        return [
                {
                        type: "static-text",
                        id: "info",
                        width: 12,
                        label: "Information",
                        value: "This module controls O:S:C Timer.",
                },
                {
                        type: "textinput",
                        id: "host",
                        label: "Timer Host IP",
                        width: 6,
                        default: "127.0.0.1",
                        regex: Regex.IP,
                },
                {
                        type: "static-text",
                        id: "timersHeader",
                        width: 12,
                        label: "Timer Ports",
                        value: "Set the OSC ports for each timer. Leave empty to disable a timer.",
                },
                {
                        type: "textinput",
                        id: "timer1Port",
                        label: "Timer 1 Port",
                        width: 6,
                        default: "53001",
                        regex: Regex.PORT,
                },
                {
                        type: "textinput",
                        id: "timer2Port",
                        label: "Timer 2 Port",
                        width: 6,
                        default: "53002",       
                        regex: Regex.PORT,

                },
                {
                        type: "textinput",
                        id: "timer3Port",
                        label: "Timer 3 Port",
                        width: 6,
                        default: "53003",
                        regex: Regex.PORT,
                },
                {
                        type: "textinput",
                        id: "timer4Port",
                        label: "Timer 4 Port",
                        width: 6,
                        default: "53004",
                        regex: Regex.PORT,
                },
                {
                        type: "static-text",
                        id: "portInfo",
                        width: 12,
                        label: "Port Information",
                        value: "Valid port range is 1024-65535. Be sure to use ports that are available on your system.",
                },
        ];
}

module.exports = { getConfigFields };
