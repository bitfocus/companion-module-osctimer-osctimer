// Config fields for the OSC Timer module
function getConfigFields() {
	return [
		{
			type: 'static-text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module controls an OSC-based timer application. Each timer uses a dedicated port.'
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'Timer Host IP',
			width: 6,
			default: '127.0.0.1',
			regex: '^(?:\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})|(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*(?:[A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$'
		},
		{
			type: 'checkbox',
			id: 'enableTimer1',
			label: 'Enable Timer 1 (Port 53001)',
			width: 6,
			default: true
		},
		{
			type: 'checkbox',
			id: 'enableTimer2',
			label: 'Enable Timer 2 (Port 53002)',
			width: 6,
			default: false
		},
		{
			type: 'checkbox',
			id: 'enableTimer3',
			label: 'Enable Timer 3 (Port 53003)',
			width: 6,
			default: false
		},
		{
			type: 'checkbox',
			id: 'enableTimer4',
			label: 'Enable Timer 4 (Port 53004)',
			width: 6,
			default: false
		},
		{
			type: 'static-text',
			id: 'portInfo',
			width: 12,
			label: 'Port Information',
			value: 'Ports are fixed to the following values:\nTimer 1: 53001\nTimer 2: 53002\nTimer 3: 53003\nTimer 4: 53004'
		}
	]
}

module.exports = { getConfigFields }
