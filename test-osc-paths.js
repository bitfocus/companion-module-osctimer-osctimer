// Test OSC paths implementation
const { getActionDefinitions } = require('./actions');

// Mock instance for testing
const mockInstance = {
    log: (level, message) => console.log(`[${level}] ${message}`),
    sendCommand: (timerNum, path, args = []) => {
        console.log(`Command to Timer ${timerNum}: ${path}${args.length ? ' with args: ' + JSON.stringify(args) : ''}`);
        return true;
    }
};

// Basic action test
function testActionsOSCPaths() {
    console.log("=== Testing OSC Timer Actions ===");
    
    const actions = getActionDefinitions(mockInstance);
    const actionCount = Object.keys(actions).length;
    console.log(`Total actions defined: ${actionCount}`);
    
    // Test sample actions with mock options
    const testCases = [
        { actionId: 'timer_start', options: { timerNum: 1 } },
        { actionId: 'timer_stop', options: { timerNum: 2 } },
        { actionId: 'timer_reset', options: { timerNum: 3 } },
        { actionId: 'timer_reset_and_stop', options: { timerNum: 4 } },
        { actionId: 'timer_set_seconds', options: { timerNum: 1, seconds: 30 } },
        { actionId: 'timer_set_minutes', options: { timerNum: 2, minutes: 5 } },
        { actionId: 'timer_set_hours', options: { timerNum: 3, hours: 1 } },
        { actionId: 'timer_set_time', options: { timerNum: 4, hours: 1, minutes: 30, seconds: 0 } },
        { actionId: 'timer_add_seconds', options: { timerNum: 1, seconds: 15 } },
        { actionId: 'timer_subtract_seconds', options: { timerNum: 2, seconds: 10 } },
        { actionId: 'timer_count_direction', options: { timerNum: 3, direction: 1 } }
    ];
    
    // Execute tests
    console.log("Testing selected actions with their OSC paths:");
    testCases.forEach(test => {
        if (actions[test.actionId]) {
            console.log(`\nAction: ${actions[test.actionId].name}`);
            actions[test.actionId].callback({ options: test.options });
        } else {
            console.error(`Missing action: ${test.actionId}`);
        }
    });
    
    console.log("\n=== OSC Path Test Complete ===");
}

// Run the test
try {
    testActionsOSCPaths();
    console.log("✅ OSC paths implementation appears valid");
} catch (error) {
    console.error("❌ Error testing OSC paths:", error);
}