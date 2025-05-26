function getFeedbackDefinitions(self) {
	return {
		timer_running: {
			type: "boolean",
			name: "Timer Running",
			description: "True if the selected timer is running",
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
			defaultStyle: {
				color: "white",
				bgcolor: "green",
			},
			callback: (feedback) => {
				const status = self[`timer${feedback.options.timerNum}_status`];
				return status === "running";
			},
		},

		timer_alert_active: {
			type: "boolean",
			name: "Timer in Alert",
			description: "True if the timer is currently in alert state",
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
			defaultStyle: {
				color: "white",
				bgcolor: "yellow",
			},
			callback: (feedback) => {
				return self[`timer${feedback.options.timerNum}_alert`] === true;
			},
		},

		timer_ended: {
			type: "boolean",
			name: "Timer Ended",
			description: "True if the timer has reached zero",
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
			defaultStyle: {
				color: "white",
				bgcolor: "red",
			},
			callback: (feedback) => {
				return self[`timer${feedback.options.timerNum}_status`] === "ended";
			},
		},
	};
}

module.exports = { getFeedbackDefinitions };
