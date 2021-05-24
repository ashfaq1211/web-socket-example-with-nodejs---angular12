const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3001; // change port to whatever port you want to use

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API to send Notification or Data to Frontend
app.post('/send-notification', (req, res) => {
    console.log(req.body);
    const data = req.body;
    socket.emit('status', data); // Updates Live Notification
    res.send(data);
});

const server = app.listen(port, () => {
  console.log(`Server connection on  http://localhost:${port}`);  // Server Connnected
});
// Socket Layer over Http Server
// const socket = require('socket.io')(server);
const socket = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:4200", //  change url and port to whatever was used for the frontend
      credentials: true,
      methods: ["GET", "POST"]
    }
  });
// On every Client Connection
socket.on('connection', socket => {
    console.log('Socket: client connected');
});