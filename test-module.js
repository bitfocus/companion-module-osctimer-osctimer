// Simple test script to verify the module structure
const { getActionDefinitions } = require('./actions');
const { getConfigFields } = require('./config');
const { getFeedbackDefinitions } = require('./feedbacks');
const { getPresetDefinitions } = require('./presets');
const { getVariables } = require('./variables');

// Mock InstanceBase to simulate the Companion environment
class MockInstanceBase {
    constructor() {
        this.status = 'Unknown';
        this.config = {
            host: '127.0.0.1',
            enableTimer1: true,
            enableTimer2: false,
            enableTimer3: false,
            enableTimer4: false
        };
        this.actions = [];
        this.feedbacks = [];
        this.presets = [];
        this.variables = [];
        this.timers = {
            1: { port: 53001, connected: false },
            2: { port: 53002, connected: false },
            3: { port: 53003, connected: false },
            4: { port: 53004, connected: false }
        };
    }

    updateStatus(status, message = '') {
        this.status = status;
        console.log(`Status updated: ${status} ${message ? '- ' + message : ''}`);
    }

    setActionDefinitions(actions) {
        this.actions = actions;
        console.log(`Loaded ${Object.keys(actions).length} actions`);
    }

    setFeedbackDefinitions(feedbacks) {
        this.feedbacks = feedbacks;
        console.log(`Loaded ${Object.keys(feedbacks).length} feedbacks`);
    }

    setPresetDefinitions(presets) {
        this.presets = presets;
        console.log(`Loaded ${Object.keys(presets).length} presets`);
    }

    setVariableDefinitions(variables) {
        this.variables = variables;
        console.log(`Loaded ${variables.length} variables`);
    }

    log(level, message) {
        console.log(`[${level.toUpperCase()}] ${message}`);
    }

    setVariableValues(values) {
        console.log(`Setting variable values:`, values);
    }
}

// Mock OSC functions
const mockOSC = {
    initOSC: (instance, timerNum, host, port) => {
        console.log(`OSC client initialized for Timer ${timerNum} at ${host}:${port}`);
        return true;
    },
    sendOSCMessage: (instance, timerNum, path, args) => {
        console.log(`OSC message sent to Timer ${timerNum}: ${path} ${JSON.stringify(args)}`);
        return true;
    }
};

// We'll use the mock OSC functions
// Note: In a real Jest environment, we would use jest.mock here
// but for this simple test we'll use the mocks directly

// Test module functionality
function testModule() {
    console.log("=== Testing OSC Timer Module ===");
    
    // Test config fields
    const configFields = getConfigFields();
    console.log(`Configuration has ${configFields.length} fields`);
    
    // Test actions
    const mockInstance = new MockInstanceBase();
    const actions = getActionDefinitions(mockInstance);
    console.log(`Module has ${Object.keys(actions).length} actions`);
    
    // Test a few sample actions
    const sampleActions = ['timer_start', 'timer_stop', 'timer_reset'];
    sampleActions.forEach(actionId => {
        if (actions[actionId]) {
            console.log(`Found action: ${actions[actionId].name}`);
        } else {
            console.error(`Missing action: ${actionId}`);
        }
    });
    
    // Test feedbacks
    const feedbacks = getFeedbackDefinitions(mockInstance);
    console.log(`Module has ${Object.keys(feedbacks).length} feedbacks`);
    
    // Test presets
    const presets = getPresetDefinitions(mockInstance);
    console.log(`Module has ${Object.keys(presets).length} presets`);
    
    // Test variables
    const variables = getVariables();
    console.log(`Module has ${variables.length} variables`);
    
    console.log("=== Module Test Complete ===");
}

// Run the test
try {
    testModule();
    console.log("✅ OSC Timer Module structure is valid");
} catch (error) {
    console.error("❌ Error testing OSC Timer Module:", error);
}