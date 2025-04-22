// OSC communication for the Timer module
const { Client } = require('osc')

// Store OSC clients
const clients = {}

function initOSC(instance, timerNum, host, port) {
	if (clients[timerNum]) {
		// Clean up existing client if we're reinitializing
		clients[timerNum] = null
	}

	try {
		// Create new OSC client
		clients[timerNum] = new Client(host, port)
		instance.log('debug', `OSC client created for Timer ${timerNum} at ${host}:${port}`)
		
		// Update the status variable to reflect connection
		instance.setVariableValues({
			[`timer${timerNum}_status`]: 'Connected'
		})
		
		return true
	} catch (error) {
		instance.log('error', `Failed to create OSC client for Timer ${timerNum}: ${error.toString()}`)
		
		// Update the status variable to reflect connection failure
		instance.setVariableValues({
			[`timer${timerNum}_status`]: 'Error'
		})
		
		return false
	}
}

function sendOSCMessage(instance, timerNum, path, args) {
	if (!clients[timerNum]) {
		instance.log('warn', `Cannot send OSC message to Timer ${timerNum} - not connected`)
		return false
	}

	try {
		// For debugging purposes, log the message being sent
		let argsStr = JSON.stringify(args)
		instance.log('debug', `Sending to Timer ${timerNum}: ${path} ${argsStr}`)
		
		// Replace numeric path with actual timer ID for certain commands
		// If the path already contains timerX in it, don't modify it
		let finalPath = path
		if (!path.includes('/timer')) {
			finalPath = `/timer${timerNum}${path}`
		}
		
		// Send the OSC message
		clients[timerNum].send(finalPath, ...args)
		return true
	} catch (error) {
		instance.log('error', `Failed to send OSC message to Timer ${timerNum}: ${error.toString()}`)
		return false
	}
}

module.exports = {
	initOSC,
	sendOSCMessage
}
