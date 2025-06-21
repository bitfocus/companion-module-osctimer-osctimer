# O:S:C Timer – Companion Module

This Companion module allows remote control of the OSC Timer application via OSC (Open Sound Control).

The OSC Timer app is a standalone multi-timer software for macOS and iOS, designed for live events, conferences, broadcasts, and stage management.

This module integrates OSC Timer tightly into Bitfocus Companion.

- App Store: [OSC Timer App](https://apps.apple.com/dk/app/osc-timer/id1487250917?l=da)

---

## Features

- **Control up to 4 independent timers**
- **Per timer:**
  - Start, stop, reset, and reset & stop
  - Set absolute durations (HH:MM:SS)
  - Set target time of day with optional UTC offset
  - Adjust time live or statically with add/subtract in one unified action
  - Direction: Count up / Count down
  - Alert threshold configuration
  - End behavior (stop or continue)
  - Display format control (SS.D, MM:SS, HH:MM:SS)
  - Custom notes with text input, alignment and auto-remove
  - Full display color customization (with RGBA float values)
- **Global settings:**
  - Choose between single / dual / quad display layouts
  - Assign timers or widgets to slots
  - Broadcast OSC messages on text updates, warnings, end, or at specific times
- **Presets and feedback:**
  - Full preset library with updated logic
  - Color zone feedback (normal, warning, end)
  - Dynamic button labels and states

---

## Requirements

- Companion version: 3.x or later
- Node.js: v18
- OSC Timer App (OSC API compatible) running on the network

---

## Configuration

- **Timer Host IP** — IP address of the machine running the OSC Timer app
- **Timer Ports** — Enter port numbers (default values below). Leave blank to disable a timer.

### Default Timer Ports

| Timer | Port   |
|-------|--------|
| 1     | 53001  |
| 2     | 53002  |
| 3     | 53003  |
| 4     | 53004  |

---

## Usage in Companion

### Actions

- All core functions are available as Companion actions.
- New **time adjustment** action replaces older add/subtract variants:
  - Accepts **hours**, **minutes**, and **seconds**
  - Choose `Add` or `Subtract`
  - Select between `Live (temporary)` or `Static (permanent)` mode
- Display colors are now set using a **color picker**, with RGBA values normalized to float range (0.0–1.0) as expected by the OSC Timer API.

### Presets

- Presets now rely on the updated actions
- Support live/static time adjustment and color zone feedback
- Use dynamic text fields like `$(OSC_Timer:timer1_time)` for real-time display

---

## Support

- **Author:** Rasmus Kreiner – osctimer@rasmuskreiner.dk  
- **GitHub:** [rasmuskreiner](https://github.com/rasmuskreiner)