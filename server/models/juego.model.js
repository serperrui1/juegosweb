const { Schema, model } = require('mongoose')

const juegoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

module.exports = model('Juego', juegoSchema)