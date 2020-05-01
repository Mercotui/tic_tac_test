# Scripts Directory for Tic Tac Test

There are some files here, they do things

## network_client.js

This is my thing, I make (-Menno). It implements a JavaScript class called
NetworkClient. Which can be used to send and receive game data over a MQTT server.
The current interface is:

### `constructor()`
This creates an instance of the class. It automatically connects to the MQTT server,
creates a new game ID, and subscribes to the MQTT topics for that game.

