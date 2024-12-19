const express = require("express");

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {

    const message = 'Hello from an Express.js server!';

    console.log(message);

    res.send(message);

});

app.listen(PORT, 'localhost', () => {

    console.log(`Server listening on port: ${PORT}!`);

});