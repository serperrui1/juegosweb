const { Schema, model, Collection } = require('mongoose')

const usuarioSchema = new Schema({
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    seguidores: [{
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    }],
    siguiendo: [{
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    }],
    porJugar: [{
        type: Schema.Types.ObjectId,
        ref: "Juego"
    }],
    jugando: [{
        type: Schema.Types.ObjectId,
        ref: "Juego"
    }],
    jugados: [{
        type: Schema.Types.ObjectId,
        ref: "Juego"
    }],
    favoritos: [{
        type: Schema.Types.ObjectId,
        ref: "Juego"
    }],
})

module.exports = model('Usuario', usuarioSchema)