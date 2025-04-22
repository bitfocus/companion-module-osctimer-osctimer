# OSC Timer Module for Bitfocus Companion

This module allows you to control an OSC-based timer application with support for up to 4 timers on dedicated ports.

## Features

- Control up to 4 independent timers
- Fixed port assignments: 53001, 53002, 53003, 53004
- Start, stop, and reset timer functions
- Set timer duration in various formats (seconds, minutes, hours)
- Adjust timer by adding or subtracting time
- Control timer direction (count up or down)
- Configure display layout (single, dual, quad)
- Preset buttons for common timer operations

## Installation

1. Add the module to your Companion installation
2. Configure the host IP address of the device running the timer application
3. Enable the timer(s) you want to control
4. Use the provided presets or create custom buttons

## Configuration

- **Timer Host IP** - The IP address of the device running the timer application
- **Enable Timer 1-4** - Enable or disable each timer

## Usage

The module provides a set of preset buttons for common timer operations:

- Start/Stop/Reset for each timer
- Common time durations (30s, 1m, 5m, 10m)
- Time adjustment controls (+/- 1m)
- Direction controls (count up/down)
- Display layout controls (single/dual/quad)

You can also create custom buttons using the full range of actions provided by the module.

## About the Timer Application

This module is designed to work with OSC-based timer applications that implement the specific OSC commands used by this module. The timer application must be configured to listen on the following ports:

- Timer 1: 53001
- Timer 2: 53002
- Timer 3: 53003
- Timer 4: 53004

## Support

For support with this module, please contact the module developer.