const { Schema, model, Collection } = require('mongoose')
const bcryptjs = require('bcryptjs')

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

usuarioSchema.methods.cifrar = async(password) => {
    const salt = await bcryptjs.genSalt()
    return await bcryptjs.hash(password, salt)
}

usuarioSchema.methods.comparar = async(password1, password2) => {
    return await bcryptjs.compare(password1, password2)
}

module.exports = model('Usuario', usuarioSchema)