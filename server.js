const express = require('express');
const server = express();
const CarRouter = require('./cars/carRouter.js')

server.use(express.json());
server.use('/api/cars', CarRouter)

server.get('/', (req, res) => {
     res.send('Hello you are at the root')
})

module.exports = server;