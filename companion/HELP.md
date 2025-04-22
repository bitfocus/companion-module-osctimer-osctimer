# OSC Timer Module

This module allows control of an OSC-based timer application with support for up to 4 timers.

## Configuration

* **Timer Host IP** - The IP address of the device running the timer application
* **Enable Timer 1-4** - Enable or disable each timer (fixed ports are used for each timer)

## Features

* Start, stop, and reset timers
* Set timer duration in seconds, minutes, hours or HH:MM:SS
* Adjust timer by adding or subtracting time
* Set timer direction (count up or down)
* Configure display layout (single, dual, quad)

## Timer Ports

* Timer 1: 53001
* Timer 2: 53002
* Timer 3: 53003
* Timer 4: 53004

## OSC Commands

This module implements OSC commands defined in the timer application's API, including:

* Basic control (start, stop, reset)
* Time setting (seconds, minutes, hours)
* Time adjustment (add/subtract time)
* Direction control (up/down)
* Display formatting
* And more

For a complete list of available commands, see the buttons provided in the presets.