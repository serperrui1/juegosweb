const { Schema, model } = require('mongoose')

const comentarioSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    critica: {
        type: Schema.Types.ObjectId,
        ref: 'Critica'
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