const { Schema, model } = require('mongoose')

const notaSchema = new Schema({
    usuario: {
        type: String,
        required: true
    },
    juego: {
        type: Schema.Types.ObjectId,
        ref: 'Juego'
    },
    valor: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    }
})

module.exports = model('Nota', notaSchema)