const { Schema, model } = require('mongoose')

const criticaSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    juego: {
        type: Schema.Types.ObjectId,
        ref: 'Juego'
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