# Companion Module: OSC Timer

This Companion module allows remote control of a customizable multi-timer application via OSC (Open Sound Control).  
It supports up to four independent timers over dedicated ports, ideal for live events, broadcast, or stage management workflows.

## Features

- Control up to 4 independent timers
- Default port assignments: 53001–53004
- Start, stop, reset, set duration, adjust time
- Count up/down direction
- Display layout control (single, dual, quad)
- Presets with automatic color feedback based on timer zones (normal, warning, end)
- Feedback support with dynamic button coloring
- OSC subscriptions for real-time timer status updates

## Requirements

- Companion version 3.x or later
- Node.js v18+
- OSC Timer application running on the network, supporting the expected OSC commands

## Configuration

- **Timer Host IP** – IP address of the OSC timer app
- **Enable Timer 1–4** – Configure ports for individual timers (default 53001–53004)

## Presets Included

- Start, Stop, Reset, Reset & Stop
- Start/Stop Toggle
- Count direction (Up/Down)
- Add or Subtract seconds
- Set fixed times (e.g. 08:00)
- Full feedback presets showing live timer name and remaining time

## OSC API Expectations

The timer app must support the following OSC structure:

- `/timer/{x}/time` — Current timer time
- `/timer/{x}/zone` — Timer zone (normal, warning, end)
- Subscriptions handled via `/bc/subscribeToVariables` and `/bc/unsubscribeToVariables`
- Timers 1–4 default to ports:
  - Timer 1: 53001
  - Timer 2: 53002
  - Timer 3: 53003
  - Timer 4: 53004

## Support

For questions, issues or feature requests:

- Developer: **Rasmus Kreiner**
- Email: osctimer@rasmuskreiner.dk
- GitHub: [rasmuskreiner](https://github.com/rasmuskreiner)
