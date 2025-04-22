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
		gray: 8421504
	}

	// Generate preset buttons for each timer
	for (let timerNum = 1; timerNum <= 4; timerNum++) {
		// Timer Control Buttons
		presets[`timer${timerNum}_start`] = {
			type: 'button',
			category: `Timer ${timerNum}`,
			name: `Start Timer ${timerNum}`,
			style: {
				text: `Start\nTimer ${timerNum}`,
				size: '14',
				color: colors.white,
				bgcolor: colors.green
			},
			feedbacks: [
				{
					type: 'timer_enabled',
					options: {
						timerNum: timerNum
					},
					style: {
						color: colors.white,
						bgcolor: colors.green
					}
				}
			],
			steps: [
				{
					down: [
						{
							actionId: 'timer_start',
							options: {
								timerNum: timerNum
							}
						}
					],
					up: []
				}
			]
		}

		presets[`timer${timerNum}_stop`] = {
			type: 'button',
			category: `Timer ${timerNum}`,
			name: `Stop Timer ${timerNum}`,
			style: {
				text: `Stop\nTimer ${timerNum}`,
				size: '14',
				color: colors.white,
				bgcolor: colors.red
			},
			feedbacks: [
				{
					type: 'timer_enabled',
					options: {
						timerNum: timerNum
					},
					style: {
						color: colors.white,
						bgcolor: colors.red
					}
				}
			],
			steps: [
				{
					down: [
						{
							actionId: 'timer_stop',
							options: {
								timerNum: timerNum
							}
						}
					],
					up: []
				}
			]
		}

		presets[`timer${timerNum}_reset`] = {
			type: 'button',
			category: `Timer ${timerNum}`,
			name: `Reset Timer ${timerNum}`,
			style: {
				text: `Reset\nTimer ${timerNum}`,
				size: '14',
				color: colors.white,
				bgcolor: colors.blue
			},
			feedbacks: [
				{
					type: 'timer_enabled',
					options: {
						timerNum: timerNum
					},
					style: {
						color: colors.white,
						bgcolor: colors.blue
					}
				}
			],
			steps: [
				{
					down: [
						{
							actionId: 'timer_reset',
							options: {
								timerNum: timerNum
							}
						}
					],
					up: []
				}
			]
		}

		// Common Time Presets
		const timeDurations = [
			{ name: '1m', minutes: 1, seconds: 0 },
			{ name: '5m', minutes: 5, seconds: 0 },
			{ name: '10m', minutes: 10, seconds: 0 },
			{ name: '30s', minutes: 0, seconds: 30 },
			{ name: '+1m', addMinutes: 1 },
			{ name: '-1m', subtractMinutes: 1 }
		]

		timeDurations.forEach(duration => {
			let presetId = `timer${timerNum}_`
			let actionId = ''
			let options = { timerNum: timerNum }
			let buttonText = ''

			if (duration.addMinutes) {
				presetId += `add_${duration.name}`
				actionId = 'timer_add_seconds'
				options.seconds = duration.addMinutes * 60
				buttonText = `+${duration.name}\nTimer ${timerNum}`
			} else if (duration.subtractMinutes) {
				presetId += `subtract_${duration.name}`
				actionId = 'timer_subtract_seconds'
				options.seconds = duration.subtractMinutes * 60
				buttonText = `${duration.name}\nTimer ${timerNum}`
			} else {
				presetId += `set_${duration.name}`
				actionId = 'timer_set_time'
				options.hours = 0
				options.minutes = duration.minutes
				options.seconds = duration.seconds
				buttonText = `Set ${duration.name}\nTimer ${timerNum}`
			}

			presets[presetId] = {
				type: 'button',
				category: `Timer ${timerNum}`,
				name: buttonText.replace('\n', ' '),
				style: {
					text: buttonText,
					size: '14',
					color: colors.white,
					bgcolor: colors.purple
				},
				feedbacks: [
					{
						type: 'timer_enabled',
						options: {
							timerNum: timerNum
						},
						style: {
							color: colors.white,
							bgcolor: colors.purple
						}
					}
				],
				steps: [
					{
						down: [
							{
								actionId: actionId,
								options: options
							}
						],
						up: []
					}
				]
			}
		})

		// Direction Control
		presets[`timer${timerNum}_direction_up`] = {
			type: 'button',
			category: `Timer ${timerNum}`,
			name: `Count Up - Timer ${timerNum}`,
			style: {
				text: `Count Up\nTimer ${timerNum}`,
				size: '14',
				color: colors.white,
				bgcolor: colors.teal
			},
			feedbacks: [
				{
					type: 'timer_enabled',
					options: {
						timerNum: timerNum
					},
					style: {
						color: colors.white,
						bgcolor: colors.teal
					}
				}
			],
			steps: [
				{
					down: [
						{
							actionId: 'timer_count_direction',
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

		presets[`timer${timerNum}_direction_down`] = {
			type: 'button',
			category: `Timer ${timerNum}`,
			name: `Count Down - Timer ${timerNum}`,
			style: {
				text: `Count Down\nTimer ${timerNum}`,
				size: '14',
				color: colors.white,
				bgcolor: colors.teal
			},
			feedbacks: [
				{
					type: 'timer_enabled',
					options: {
						timerNum: timerNum
					},
					style: {
						color: colors.white,
						bgcolor: colors.teal
					}
				}
			],
			steps: [
				{
					down: [
						{
							actionId: 'timer_count_direction',
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
	}

	// Display Layout Presets
	const layoutOptions = [
		{ name: 'Single', id: 'single' },
		{ name: 'Dual', id: 'dual' },
		{ name: 'Quad', id: 'quad' }
	]

	layoutOptions.forEach(layout => {
		presets[`layout_${layout.id}`] = {
			type: 'button',
			category: 'Display',
			name: `${layout.name} Layout`,
			style: {
				text: `${layout.name}\nLayout`,
				size: '14',
				color: colors.white,
				bgcolor: colors.gray
			},
			steps: [
				{
					down: [
						{
							actionId: 'set_display_layout',
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

	return presets
}

module.exports = { getPresetDefinitions }
