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


module.exports = { usuarioController }