const express = require('express');

const app = express();

app.use(express.json()); 
// retorna um middleware p/ interpretar body no formato json

module.exports = app;