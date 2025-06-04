# O:S:C Timer Control – Companion Module

This Companion module provides advanced remote control of the O:S:C Timer application via OSC.  
It supports up to four independent timers with full time management, layout control, color customization, notes handling, broadcast subscriptions, and real-time feedback.

## Features

- Control up to 4 independent timers
- Full timer control: start, stop, reset, reset & stop
- Set absolute time or count down to a time of day (with timezone support)
- Adjust timers live: add/subtract time (hours, minutes, seconds)
- Set count direction (up or down)
- Set end behavior: stop at zero or continue
- Define display formats (SS.D, MM:SS, HH:MM:SS, etc.)
- Configure alert thresholds
- Full display color customization for multiple states
- Manage notes with alignment and auto-remove options
- Dynamic layout control (single, dual, quad slots)
- Broadcast OSC subscription for text, warning, end, and time triggers
- Companion feedbacks and variables for real-time monitoring

## Requirements

- **O:S:C Timer** application (OSC API version 2.2.1+ recommended)
- **Companion** version 4.0 or later
- **Node.js** v18+

## Setup

1. Start your O:S:C Timer application
2. Verify or configure the OSC ports for each timer:
    - Timer 1: default 53001
    - Timer 2: default 53002
    - Timer 3: default 53003
    - Timer 4: default 53004
3. In Companion, add the module and enter the IP address of the device running O:S:C Timer
4. Specify the OSC port for each timer as needed

---

## Actions

### Timer Controls

- **Start / Stop / Reset / Reset & Stop**  
  Control each timer's basic state.

- **Set Time**  
  Set countdown time in hours, minutes, and seconds.

- **Set Time of Day (with Time Zone Offset)**  
  Define countdown target based on real time with timezone selection.

- **Count Direction**  
  Switch between counting up or down.

- **Set End Behavior**  
  Control whether timers stop at zero or continue running.

### Timer Adjustment

- Add or subtract time from active timers in:
  - Seconds
  - Minutes
  - Hours
- Supports both **static** and **live adjustments** while timers are running.

### Alert & Warning Configuration

- **Set Alert Time**  
  Define when a timer enters alert mode (hours, minutes, seconds).

### Layout Management

- **Set Display Layout**  
  Choose between Single, Dual, or Quad timer layouts.
- **Assign Widget to Display Slot**  
  Assign timers, clock, monitor, or broadcast widgets to display slots.

### Notes Management

- **Set Notes Text**  
  Display custom notes with optional auto-remove timer.
- **Set Notes Alignment**  
  Align notes text (center, top, bottom, leading/trailing).

### Color Controls

- **Set Display Colors**  
  Customize colors for:
  - Timer (normal, warning, end)
  - Background
  - App background
  - Clock
  - Broadcast text
  - Notes (foreground and background)

- Colors are set using full RGBA values (including transparency).

### Broadcast Subscriptions (OSC)

- Subscribe/unsubscribe external OSC devices to receive:
  - Timer text updates
  - Warning state updates
  - End state triggers
  - Specific time triggers

---

## Feedbacks

- **Timer Zone**  
  Feedback based on timer state (normal, warning, end).

- **Timer Running**  
  Feedback showing whether a timer is currently running.

- **Timer Time Display**  
  Display current timer value directly on button text.

---

## Variables

The module exposes the following variables:

| Variable ID      | Description  |
|-------------------|--------------|
| `timer1_time` – `timer4_time` | Current timer time |
| `timer1_name` – `timer4_name` | Timer names |

---

## Troubleshooting

- Ensure O:S:C Timer is running and listening on the expected OSC ports.
- Verify IP address and network configuration.
- Review Companion logs for module errors.
- For variable updates and feedbacks, ensure you are using O:S:C Timer v2.2.1 or newer.

---

## Compatibility

- **O:S:C Timer:** version 2.2.1+ recommended
- **Companion:** version 4.0+
- **Node.js:** version 18+

## Support

- GitHub: [https://github.com/bitfocus/companion-module-osctimer-osctimer](https://github.com/bitfocus/companion-module-osctimer-osctimer)
- Email: osctimer@rasmuskreiner.dk

## Changelog

### v1.0.0

- Initial public release
- Full Companion 4 support
- All timer control actions implemented
- Full layout management
- Broadcast subscription support
- Notes system and alignment options
- Full color customization with RGBA support
- Real-time feedback and variables

---