require('dotenv').config(); // .env variables have to be loaded first!
const express = require('express');
const app = express();

const router = require('./routes/routes');
const initializeDatabase = require('./utils/db');
const socket = require('./utils/ws');

socket.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        // TODO: DB - get 10 records
        console.log('received: %s', data);
    });

    ws.send('test');
});

const startApp = async () => {
    await initializeDatabase();

    app.use(express.json());
    app.use(router);

    const APP_PORT = +process.env.APP_PORT || 3000;
    app.listen(APP_PORT, () => console.log('App started on port', APP_PORT));

}

startApp();