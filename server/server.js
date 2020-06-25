const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.get('/api/claim', (req, res) => res.sendFile(path.join(__dirname + '/claim.json')));
app.get('/api/success', (req, res) => res.sendFile(path.join(__dirname + '/success.json')));

app.listen(port, () => console.log(`rad2 server listening at http://localhost:${port}`))