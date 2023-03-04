const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Everybody! This is VTU18002'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
