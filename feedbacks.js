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
			styleConfigurable: true, // 👈 gør farver konfigurerbare i UI
			defaultStyle: {
				color: 0xffffff, // white
				bgcolor: 0x000000, // black
			},
			callback: (feedback) => {
				const { timerNum, zone } = feedback.options;
				return self[`timer${timerNum}_zone`] === zone;
			},
		},
	};
}

module.exports = { getFeedbackDefinitions };
