# OSC Timer – Companion Module

This Companion module allows remote control of a customizable multi-timer application via OSC (Open Sound Control).  
It supports up to four independent timers over dedicated ports, ideal for live events, broadcast, or stage management workflows.

## Features

- Control up to 4 independent timers
- Default port assignments: 53001–53004
- Start, stop, reset, set duration, adjust time
- Count up/down direction
- Display layout control (single, dual, quad)
- Ready-made presets for common tasks

## Requirements

- Companion version: 3.x or later
- Node.js: v18
- OSC timer app running on the network

## Configuration Options

- **Timer Host IP** – IP of the OSC timer app
- **Enable Timer 1–4** – Toggle timers on/off

## Usage

Use presets for:
- Start/Stop/Reset
- Set durations (30s, 1m, 5m, 10m)
- Time adjustment (+/- 1m)
- Direction (up/down)
- Layout (single, dual, quad)

## About the Timer Application

The timer app must support the OSC commands defined by this module and listen by default on ports:

- Timer 1: 53001
- Timer 2: 53002
- Timer 3: 53003
- Timer 4: 53004

## Support

For questions or feedback:

- Rasmus Kreiner – osctimer@rasmuskreiner.dk
- GitHub: [rasmuskreiner](https://github.com/rasmuskreiner)