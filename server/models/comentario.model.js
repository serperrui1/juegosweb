const { Schema, model } = require('mongoose')

const comentarioSchema = new Schema({
    usuarioId: {
        type: String,
        required: true
    },
    criticaId: {
        type: Number,
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

module.exports = model('Comentario', comentarioSchema)