const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, CI/CD!'));
app.get('/health', (req, res) => res.send('OK'));

const port = 3000;
app.listen(port, () => console.log(`App running on port ${port}`));
