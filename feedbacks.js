function getFeedbackDefinitions(self) {
	return {
		timer_zone: {
			type: "boolean",
			name: "Timer Zone",
			description: "Changes style based on timer zone (normal, warning, end)",
			styleConfigurable: true,
			defaultStyle: {
				color: 0xffffff, // white
				bgcolor: 0x000000, // black
			},
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

				// Nu er timerNum defineret korrekt!
				const currentZone = (self[`timer${timerNum}_zone`] || '').toLowerCase()
				const targetZone = (zone || '').toLowerCase()

				self.log(
					"debug",
					`Feedback check: timer${timerNum}_zone = ${currentZone} (wanted: ${targetZone})`
				)

				return currentZone === targetZone
			}
		},
	};
}

module.exports = { getFeedbackDefinitions };
