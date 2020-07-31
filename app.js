const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hoge')
})

const server = http.createServer(app);

server.listen('3000');