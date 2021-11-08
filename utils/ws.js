const { WebSocketServer } = require('ws');

const WEBSOCKET_PORT = +process.env.WEBSOCKET_PORT || 8080

const socket = new WebSocketServer({ port: WEBSOCKET_PORT }, () => {
    console.log('Web socket started on port', WEBSOCKET_PORT);
});

module.exports = socket;