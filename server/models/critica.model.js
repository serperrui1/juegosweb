const { Schema, model } = require('mongoose')

const criticaSchema = new Schema({
    usuarioId: {
        type: Number,
        required: true
    },
    juegoId: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    cuerpo: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    dislikes: {
        type: Number,
        required: true
    }
})

module.exports = model('Critica', criticaSchema)