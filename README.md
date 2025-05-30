# O:S:C Timer – Companion Module

This Companion module allows remote control of the OSC Timer application via OSC (Open Sound Control).
The OSC Timer app is a standalone multi-timer software available on macOS and iOS, designed primarily for live events, conferences, broadcasts, and stage management.

This module was developed to fully integrate the OSC Timer app into Bitfocus Companion.
- App Store Link: [OSC Timer App](https://apps.apple.com/dk/app/osc-timer/id1487250917?l=da)
- Developer of OSC Timer App & this Companion module: Rasmus Kreiner

## Features

- Control up to 4 independent timers over network
- Per timer:
  - Start, stop, reset, reset & stop
  - Set timer duration (absolute or relative)
  - Add or subtract time (live or static)
  - Count up / count down direction
  - Set target time of day with time zone
  - Alert threshold configuration
  - End behavior configuration (stop or continue)
  - Display format control (SS.D, MM:SS, HH:MM:SS, etc.)
  - Custom text notes with positioning and auto-remove
  - Full display color customization
- Global:
  - Control display layout (single, dual, quad slots)
  - Broadcast OSC subscriptions for external devices (text, warning, end, at-time triggers)
- Preset library for fast button setup inside Companion
- Extensive feedback options for visual state control

## Requirements

- Companion version: 3.x or later
- Node.js: v18
- OSC Timer App (OSC API compatible) running on the network

## Configuration

- **Timer Host IP** — The IP address of the device running the OSC Timer app
- **Timer Ports** — Enter the OSC port for each timer (default ports below). Leave a port blank to disable that timer.

### Default Timer Ports

- Timer 1: 53001
- Timer 2: 53002
- Timer 3: 53003
- Timer 4: 53004

## Usage

Inside Companion you can:

- Use ready-made presets to control all basic functions
- Set durations and count directions
- Adjust live times and alert thresholds
- Assign timers to display layouts (single / dual / quad)
- Configure OSC broadcast subscriptions
- Customize display appearance via color pickers

For a full list of available actions, presets and feedbacks — explore the Companion interface after module install.

## Support

For questions, feedback or contributions:

- **Author:** Rasmus Kreiner – osctimer@rasmuskreiner.dk
- **GitHub:** [rasmuskreiner](https://github.com/rasmuskreiner)