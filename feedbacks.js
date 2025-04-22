// Feedbacks for the OSC Timer module
function getFeedbackDefinitions(self) {
	// This module primarily sends commands to the timer application
	// but doesn't currently receive feedback from it.
	// In a full implementation, we would need to set up receivers for OSC messages
	// from the timer application to provide real-time status.
	
	return {
		// Placeholder for future feedback implementation
		timer_enabled: {
			type: 'boolean',
			name: 'Timer Enabled',
			description: 'Indicates if a specific timer is enabled in the module configuration',
			options: [
				{
					type: 'dropdown',
					label: 'Timer',
					id: 'timerNum',
					default: 1,
					choices: [
						{ id: 1, label: 'Timer 1' },
						{ id: 2, label: 'Timer 2' },
						{ id: 3, label: 'Timer 3' },
						{ id: 4, label: 'Timer 4' }
					]
				}
			],
			defaultStyle: {
				color: 'white',
				bgcolor: 'green'
			},
			callback: (feedback) => {
				const timerNum = feedback.options.timerNum
				return self.config[`enableTimer${timerNum}`] === true
			}
		}
	}
}

module.exports = { getFeedbackDefinitions }
