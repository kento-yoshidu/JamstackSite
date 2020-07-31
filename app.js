const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  fs.readFile('./views/index.html', 'utf-8', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  })
})

const server = http.createServer(app);

server.listen('3000');