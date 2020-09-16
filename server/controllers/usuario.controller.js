const Usuario = require('../models/usuario.model')

const usuarioController = {}


usuarioController.newUsuario = async function(req, res) {
    const usuario = new Usuario(req.body)
    await usuario.save()
    return res.json({
        success: true,
        usuario
    })
}

usuarioController.login = async function(req, res) {
    const { usuario, password } = req.body
    const encontrado = await Usuario.find({ usuario, password })
    return res.json({
        success: true,
        usuario: encontrado[0]
    })
}

module.exports = { usuarioController }