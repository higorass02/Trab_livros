const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path')
const cors = require('cors')

const server = require('http').Server(app)
const io = require('socket.io')(server);

// Altere o código abaixo para conectar no banco de dado
// do mongodb na nuvem
mongoose.connect(`mongodb://localhost:27017/bdsi`, { useNewUrlParser: true })

app.use((req, res, next) => {
  req.io = io;
  next();
})

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resizes')))

app.use(require('./routes'))

server.listen(3333, () => {
  console.log('Servidor rodando')
})

