// Actions for the OSC Timer module
function getActionDefinitions(self) {
	return {
		// Timer Control Actions
		timer_start: {
			name: "Start Timer",
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
				self.sendCommand("timer", event.options.timerNum, "/start");
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
				self.sendCommand("timer", event.options.timerNum, "/stop");
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
				self.sendCommand("timer", event.options.timerNum, "/reset");
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
				self.sendCommand("timer", event.options.timerNum, "/resetAndStop");
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
				self.sendCommand("timer", event.options.timerNum, "/count/seconds", [
					event.options.seconds,
				]);
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
				self.sendCommand("timer", event.options.timerNum, "/count/minutes", [
					event.options.minutes,
				]);
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
				self.sendCommand("timer", event.options.timerNum, "/count/hours", [
					event.options.hours,
				]);
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
				self.sendCommand("timer", event.options.timerNum, "/count/time", [
					event.options.hours,
					event.options.minutes,
					event.options.seconds,
				]);
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
					"timer",
					event.options.timerNum,
					"/count/seconds/add",
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
					"timer",
					event.options.timerNum,
					"/count/seconds/subtract",
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
				self.sendCommand("timer", event.options.timerNum, "/count/direction", [
					event.options.direction,
				]);
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
						{ id: 0, label: "Seconds with Decimals (SS.D)" },
						{ id: 1, label: "Seconds Only (SS)" },
						{ id: 2, label: "Minutes and Seconds (MM:SS)" },
						{ id: 3, label: "Hours, Minutes, and Seconds (HH:MM:SS)" },
					],
				},
			],
			callback: (event) => {
				self.sendCommand("timer", event.options.timerNum, "/show", [
					event.options.format,
				]);
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
				self.sendCommand("timer", event.options.timerNum, "/alert/seconds", [
					event.options.seconds,
				]);
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
				self.sendCommand("notes", event.options.timerNum, "/text", args);
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
						{ id: 0, label: "Center - Trailing" },
						{ id: 1, label: "Center - Center" },
						{ id: 2, label: "Center - Leading" },
						{ id: 3, label: "Top - Trailing" },
						{ id: 4, label: "Top - Center" },
						{ id: 5, label: "Top - Leading" },
						{ id: 6, label: "Bottom - Trailing" },
						{ id: 7, label: "Bottom - Center" },
						{ id: 8, label: "Bottom - Leading" },
					],
				},
			],
			callback: (event) => {
				self.sendCommand("notes", event.options.timerNum, "/alignment", [
					event.options.alignment,
				]);
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
						{ id: "single", label: "Single Timer" },
						{ id: "dual", label: "Dual Timers" },
						{ id: "quad", label: "Quad Timers" },
					],
				},
			],
			callback: (event) => {
				// This command is sent without a timer number prefix
				const fullPath = `/slot/layout/${event.options.layout}`;
				self.sendCommand("display", 1, fullPath, []); // Using timer 1 as default for global commands
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
						{ id: "timer1", label: "Timer 1" },
						{ id: "timer2", label: "Timer 2" },
						{ id: "timer3", label: "Timer 3" },
						{ id: "timer4", label: "Timer 4" },
						{ id: "broadcast", label: "Broadcast" },
						{ id: "clock", label: "Clock" },
						{ id: "monitor", label: "Monitor" },
					],
				},
			],
			callback: (event) => {
				// This command is sent without a timer number prefix
				const fullPath = `/slot/${event.options.slot}/${event.options.widget}`;
				self.sendCommand("display", 1, fullPath, []); // Using timer 1 as default for global commands
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
						{ id: 0, label: "Continue Past Zero" },
						{ id: 1, label: "Stop at Zero" },
					],
				},
			],
			callback: (event) => {
				self.sendCommand(event.options.timerNum, "/atEnd", [
					event.options.behavior,
				]);
			},
		},
	};
}

module.exports = { getActionDefinitions };
