// Presets for the OSC Timer module
function getPresetDefinitions(self) {
        const presets = {}
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
                darkblue: 128
        }

        // Generate preset buttons for each timer
        for (let timerNum = 1; timerNum <= 4; timerNum++) {
                
                // Timer Control - Start
                presets[`timer${timerNum}_start`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Control`,
                        name: `Start Timer ${timerNum}`,
                        style: {
                                text: `START\nT${timerNum}`,
                                size: '18',
                                color: colors.white,
                                bgcolor: colors.green
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_action',
                                                        options: {
                                                                timerNum: timerNum,
                                                                action: 'start'
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }

                // Timer Control - Stop
                presets[`timer${timerNum}_stop`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Control`,
                        name: `Stop Timer ${timerNum}`,
                        style: {
                                text: `STOP\nT${timerNum}`,
                                size: '18',
                                color: colors.white,
                                bgcolor: colors.red
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_action',
                                                        options: {
                                                                timerNum: timerNum,
                                                                action: 'stop'
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }

                // Timer Control - Reset
                presets[`timer${timerNum}_reset`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Control`,
                        name: `Reset Timer ${timerNum}`,
                        style: {
                                text: `RESET\nT${timerNum}`,
                                size: '18',
                                color: colors.white,
                                bgcolor: colors.blue
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_action',
                                                        options: {
                                                                timerNum: timerNum,
                                                                action: 'reset'
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }

                // Timer Control - Reset & Stop
                presets[`timer${timerNum}_resetstop`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Control`,
                        name: `Reset & Stop Timer ${timerNum}`,
                        style: {
                                text: `RESET\n& STOP\nT${timerNum}`,
                                size: '14',
                                color: colors.white,
                                bgcolor: colors.darkred
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_action',
                                                        options: {
                                                                timerNum: timerNum,
                                                                action: 'resetAndStop'
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }

                // Time Setting Presets
                const timePresets = [
                        { name: '30s', hours: 0, minutes: 0, seconds: 30, color: colors.orange },
                        { name: '1m', hours: 0, minutes: 1, seconds: 0, color: colors.purple },
                        { name: '5m', hours: 0, minutes: 5, seconds: 0, color: colors.purple },
                        { name: '10m', hours: 0, minutes: 10, seconds: 0, color: colors.purple },
                        { name: '15m', hours: 0, minutes: 15, seconds: 0, color: colors.teal },
                        { name: '30m', hours: 0, minutes: 30, seconds: 0, color: colors.teal }
                ]

                timePresets.forEach(preset => {
                        presets[`timer${timerNum}_set_${preset.name}`] = {
                                type: 'button',
                                category: `Timer ${timerNum} - Time`,
                                name: `Set ${preset.name} - Timer ${timerNum}`,
                                style: {
                                        text: `SET\n${preset.name}\nT${timerNum}`,
                                        size: '14',
                                        color: colors.white,
                                        bgcolor: preset.color
                                },
                                steps: [
                                        {
                                                down: [
                                                        {
                                                                actionId: 'timer_set_time',
                                                                options: {
                                                                        timerNum: timerNum,
                                                                        hours: preset.hours,
                                                                        minutes: preset.minutes,
                                                                        seconds: preset.seconds
                                                                }
                                                        }
                                                ],
                                                up: []
                                        }
                                ]
                        }
                })

                // Add/Subtract Time Presets
                presets[`timer${timerNum}_add_1sec`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Adjust`,
                        name: `Add 1 Second - Timer ${timerNum}`,
                        style: {
                                text: `+1s\nT${timerNum}`,
                                size: '18',
                                color: colors.white,
                                bgcolor: colors.darkgreen
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_add_second',
                                                        options: {
                                                                timerNum: timerNum
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }

                presets[`timer${timerNum}_sub_1sec`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Adjust`,
                        name: `Subtract 1 Second - Timer ${timerNum}`,
                        style: {
                                text: `-1s\nT${timerNum}`,
                                size: '18',
                                color: colors.white,
                                bgcolor: colors.darkred
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_subtract_second',
                                                        options: {
                                                                timerNum: timerNum
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }

                // Direction Control
                presets[`timer${timerNum}_count_up`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Settings`,
                        name: `Count Up - Timer ${timerNum}`,
                        style: {
                                text: `COUNT\nUP\nT${timerNum}`,
                                size: '14',
                                color: colors.white,
                                bgcolor: colors.teal
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_set_direction',
                                                        options: {
                                                                timerNum: timerNum,
                                                                direction: 1
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }

                presets[`timer${timerNum}_count_down`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Settings`,
                        name: `Count Down - Timer ${timerNum}`,
                        style: {
                                text: `COUNT\nDOWN\nT${timerNum}`,
                                size: '14',
                                color: colors.white,
                                bgcolor: colors.darkblue
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_set_direction',
                                                        options: {
                                                                timerNum: timerNum,
                                                                direction: 0
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }

                // Display Format Presets
                const formatPresets = [
                        { name: 'SS', format: 0, text: 'SEC\nONLY' },
                        { name: 'MM:SS', format: 1, text: 'MIN:SEC' },
                        { name: 'HH:MM:SS', format: 2, text: 'FULL\nTIME' }
                ]

                formatPresets.forEach(format => {
                        presets[`timer${timerNum}_format_${format.format}`] = {
                                type: 'button',
                                category: `Timer ${timerNum} - Display`,
                                name: `${format.name} Format - Timer ${timerNum}`,
                                style: {
                                        text: `${format.text}\nT${timerNum}`,
                                        size: '12',
                                        color: colors.white,
                                        bgcolor: colors.gray
                                },
                                steps: [
                                        {
                                                down: [
                                                        {
                                                                actionId: 'timer_set_display_format',
                                                                options: {
                                                                        timerNum: timerNum,
                                                                        format: format.format
                                                                }
                                                        }
                                                ],
                                                up: []
                                        }
                                ]
                        }
                })

                // Alert Time Presets
                const alertPresets = [
                        { name: '10s', minutes: 0, seconds: 10 },
                        { name: '30s', minutes: 0, seconds: 30 },
                        { name: '1m', minutes: 1, seconds: 0 }
                ]

                alertPresets.forEach(alert => {
                        presets[`timer${timerNum}_alert_${alert.name}`] = {
                                type: 'button',
                                category: `Timer ${timerNum} - Alert`,
                                name: `Alert ${alert.name} - Timer ${timerNum}`,
                                style: {
                                        text: `ALERT\n${alert.name}\nT${timerNum}`,
                                        size: '12',
                                        color: colors.white,
                                        bgcolor: colors.yellow
                                },
                                steps: [
                                        {
                                                down: [
                                                        {
                                                                actionId: 'timer_set_alert_time',
                                                                options: {
                                                                        timerNum: timerNum,
                                                                        hours: 0,
                                                                        minutes: alert.minutes,
                                                                        seconds: alert.seconds
                                                                }
                                                        }
                                                ],
                                                up: []
                                        }
                                ]
                        }
                })

                // End Behavior Presets
                presets[`timer${timerNum}_end_stop`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Settings`,
                        name: `Stop at End - Timer ${timerNum}`,
                        style: {
                                text: `STOP\nAT END\nT${timerNum}`,
                                size: '12',
                                color: colors.white,
                                bgcolor: colors.red
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_set_end_behavior',
                                                        options: {
                                                                timerNum: timerNum,
                                                                behavior: 1
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }

                presets[`timer${timerNum}_end_continue`] = {
                        type: 'button',
                        category: `Timer ${timerNum} - Settings`,
                        name: `Continue at End - Timer ${timerNum}`,
                        style: {
                                text: `CONT.\nAT END\nT${timerNum}`,
                                size: '12',
                                color: colors.white,
                                bgcolor: colors.green
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'timer_set_end_behavior',
                                                        options: {
                                                                timerNum: timerNum,
                                                                behavior: 0
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }
        }

        // Layout Control Presets
        const layoutPresets = [
                { name: 'Single', id: 'single', text: 'SINGLE\nVIEW' },
                { name: 'Dual', id: 'dual', text: 'DUAL\nVIEW' },
                { name: 'Quad', id: 'quad', text: 'QUAD\nVIEW' }
        ]

        layoutPresets.forEach(layout => {
                presets[`layout_${layout.id}`] = {
                        type: 'button',
                        category: 'Layout Control',
                        name: `${layout.name} Layout`,
                        style: {
                                text: layout.text,
                                size: '18',
                                color: colors.white,
                                bgcolor: colors.gray
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'layout_set_slot_count',
                                                        options: {
                                                                layout: layout.id
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }
        })

        // Widget Assignment Presets (for Slot 1)
        const widgetPresets = [
                { name: 'Timer 1', widget: 'timer1', text: 'T1\nSLOT1' },
                { name: 'Timer 2', widget: 'timer2', text: 'T2\nSLOT1' },
                { name: 'Timer 3', widget: 'timer3', text: 'T3\nSLOT1' },
                { name: 'Timer 4', widget: 'timer4', text: 'T4\nSLOT1' },
                { name: 'Clock', widget: 'clock', text: 'CLOCK\nSLOT1' },
                { name: 'Broadcast', widget: 'broadcast', text: 'BCAST\nSLOT1' }
        ]

        widgetPresets.forEach(widget => {
                presets[`slot1_${widget.widget}`] = {
                        type: 'button',
                        category: 'Widget Assignment',
                        name: `${widget.name} to Slot 1`,
                        style: {
                                text: widget.text,
                                size: '14',
                                color: colors.white,
                                bgcolor: colors.purple
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'layout_assign_widget',
                                                        options: {
                                                                slot: 1,
                                                                widget: widget.widget
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }
        })

        // Notes Control Presets
        const notesPresets = [
                { text: 'BREAK', color: colors.yellow },
                { text: 'STANDBY', color: colors.orange },
                { text: 'CLEAR STAGE', color: colors.red },
                { text: 'GO', color: colors.green }
        ]

        notesPresets.forEach(note => {
                presets[`notes_${note.text.toLowerCase().replace(' ', '_')}`] = {
                        type: 'button',
                        category: 'Notes Control',
                        name: `Show "${note.text}" Note`,
                        style: {
                                text: `SHOW\n${note.text}`,
                                size: '14',
                                color: colors.white,
                                bgcolor: note.color
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'notes_set_text',
                                                        options: {
                                                                text: note.text,
                                                                timerNum: 1
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }
        })

        // Clear Notes Preset
        presets['notes_clear'] = {
                type: 'button',
                category: 'Notes Control',
                name: 'Clear Notes',
                style: {
                        text: 'CLEAR\nNOTES',
                        size: '18',
                        color: colors.white,
                        bgcolor: colors.black
                },
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'notes_set_text',
                                                options: {
                                                        text: '',
                                                        timerNum: 1
                                                }
                                        }
                                ],
                                up: []
                        }
                ]
        }

        // Color Control Presets
        const colorPresets = [
                { name: 'Normal White', element: 'timer_normal', color: '#FFFFFF', alpha: 100 },
                { name: 'Warning Yellow', element: 'timer_warning', color: '#FFFF00', alpha: 100 },
                { name: 'End Red', element: 'timer_end', color: '#FF0000', alpha: 100 },
                { name: 'Black Background', element: 'timer_background', color: '#000000', alpha: 100 }
        ]

        colorPresets.forEach(colorPreset => {
                presets[`color_${colorPreset.element}`] = {
                        type: 'button',
                        category: 'Color Control',
                        name: `Set ${colorPreset.name}`,
                        style: {
                                text: colorPreset.name.toUpperCase().replace(' ', '\n'),
                                size: '12',
                                color: colors.white,
                                bgcolor: colors.gray
                        },
                        steps: [
                                {
                                        down: [
                                                {
                                                        actionId: 'set_display_color',
                                                        options: {
                                                                timerNum: 1,
                                                                element: colorPreset.element,
                                                                color: colorPreset.color,
                                                                alpha: colorPreset.alpha
                                                        }
                                                }
                                        ],
                                        up: []
                                }
                        ]
                }
        })

        // Broadcast Control Presets
        presets['broadcast_text_local'] = {
                type: 'button',
                category: 'Broadcast Control',
                name: 'Subscribe Text Broadcast (Local)',
                style: {
                        text: 'BCAST\nTEXT\nLOCAL',
                        size: '12',
                        color: colors.white,
                        bgcolor: colors.teal
                },
                steps: [
                        {
                                down: [
                                        {
                                                actionId: 'broadcast_subscribe_text',
                                                options: {
                                                        timerNum: 1,
                                                        ip: '127.0.0.1',
                                                        port: 53000,
                                                        path: '/timer/text'
                                                }
                                        }
                                ],
                                up: []
                        }
                ]
        }

        return presets
}

module.exports = { getPresetDefinitions }