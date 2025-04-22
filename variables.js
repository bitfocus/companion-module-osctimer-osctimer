// Variables for the OSC Timer module
function getVariables() {
	return [
		{
			name: 'Timer 1 Status',
			variableId: 'timer1_status'
		},
		{
			name: 'Timer 2 Status',
			variableId: 'timer2_status'
		},
		{
			name: 'Timer 3 Status',
			variableId: 'timer3_status'
		},
		{
			name: 'Timer 4 Status',
			variableId: 'timer4_status'
		}
		// Note: In a full implementation with bidirectional communication,
		// we would add variables for timer values, alert states, etc.
	]
}

module.exports = { getVariables }
