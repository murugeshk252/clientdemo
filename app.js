const express = require('express');

// create express app
const app = express();

// define a simple route
app.get('/', (req, res) => {
    res.send("Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.");
});

// listen for requests
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Server is listening on port 3000");
});