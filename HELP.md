# O:S:C Timer Module

This module allows control of all O:S:C Timer’s parameters.

## Configuration

* **Timer Host IP** — The IP address of the device running the O:S:C Timer application.
* **Timer 1–4 Ports** — Set the OSC port for each timer. Leave blank to disable a timer. Valid ports are 1–65535.

## Features

* Start, stop, and reset timers.
* Set timer duration in seconds, minutes, hours, or full HH:MM:SS format.
* Adjust timers by adding or subtracting time.
* Set timer direction (count up or count down).
* Configure display layout (single, dual, quad).
* Set alerts and warning zones.
* Full color customization of timer display elements.
* Broadcast OSC subscriptions for external integration.

## Default Timer Ports

* Timer 1: 53001
* Timer 2: 53002
* Timer 3: 53003
* Timer 4: 53004

## OSC Commands

This module implements OSC commands defined by the timer application's API, including:

* Basic control (start, stop, reset)
* Set time (absolute or relative)
* Adjust time (add/subtract)
* Set count direction (up/down)
* Configure alerts and end behavior
* Display formatting and layout control
* Color customization
* Broadcast subscriptions for external OSC devices

> For a full list of available functions, see the actions and presets provided within Companion.