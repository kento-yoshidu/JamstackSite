const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static('common_src'));
app.use(express.static('src'));
app.use(express.static('views'));

app.get('/', (req, res) => {
  fs.readFile('index.html', 'UTF-8', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  })
})

app.get('/sample-page/sample1', (req, res) => {
  fs.readFile('sample-page/sample1/index.html', 'UTF-8', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  })
})

const server = http.createServer(app);

server.listen('80');