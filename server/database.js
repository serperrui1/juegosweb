const mongoose = require('mongoose')

async function startDatabaseConnection() {
    await mongoose.connect('mongodb://localhost:27017/juegosweb', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Conectado a MongoDB');
}

module.exports = {
    startDatabaseConnection
}