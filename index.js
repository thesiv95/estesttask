require('dotenv').config(); // .env variables have to be loaded first!
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./routes/routes');
const initializeDatabase = require('./utils/db');
const get10Last = require('./utils/get10last');
const socket = require('socket.io');

const startApp = async () => {
    await initializeDatabase();

    app.use(cors());
    app.use(express.static(path.resolve(__dirname, 'public')));
    app.use(express.json());
    app.use(router);

    const APP_PORT = +process.env.APP_PORT || 3000;
    const server = app.listen(APP_PORT, () => console.log('App started on port', APP_PORT));
    const io = socket(server);

    io.on('connection', (socket) => {
        console.log('Socket server attached');

        socket.on('get-users', async () => {
            // Initialize socket loop
            setInterval(async () => {
                const last10Users = await get10Last();
                console.log(JSON.stringify(last10Users));
                socket.send(JSON.stringify(last10Users));
            }, 1000);
        });
    })


}
// Start express server & create database connection
startApp();

