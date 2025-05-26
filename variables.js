function getVariables() {
	return [
		{ variableId: "timer1_time", name: "Timer 1 Time" },
		{ variableId: "timer2_time", name: "Timer 2 Time" },
		{ variableId: "timer3_time", name: "Timer 3 Time" },
		{ variableId: "timer4_time", name: "Timer 4 Time" },

		{ variableId: "timer1_status", name: "Timer 1 Status" },
		{ variableId: "timer2_status", name: "Timer 2 Status" },
		{ variableId: "timer3_status", name: "Timer 3 Status" },
		{ variableId: "timer4_status", name: "Timer 4 Status" },

		{ variableId: "timer1_alert", name: "Timer 1 Alert Active" },
		{ variableId: "timer2_alert", name: "Timer 2 Alert Active" },
		{ variableId: "timer3_alert", name: "Timer 3 Alert Active" },
		{ variableId: "timer4_alert", name: "Timer 4 Alert Active" },
	];
}

module.exports = { getVariables };
