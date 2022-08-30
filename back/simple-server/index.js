/**
 * Mock Data
 */
const mockData = {
    data: [{
        prop1: 'teste',
        prop2: 'outro teste'
    }, {
        prop1: 'segundo item do array',
        prop2: 'segundo item do array mas prop2'
    }],
    pagination: {
        pages: 1,
        count: 2,
        total: 2
    }
};

const express = require("express");
const cors = require('cors');
const http = require("http");


const app = express();

const port = 3001;

app.use(cors());

app.get("/get-data", (req, res) => {
  console.log('request =>', req);
  res.status(200).send(mockData);
});

app.get('/crash', (req, resp) => {
    resp.status(500).send('fudeo geral');
});

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));
