const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, CI/CD!'));
app.get('/health', (req, res) => res.send('O'));

module.exports = app;
