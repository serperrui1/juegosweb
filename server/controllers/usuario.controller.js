const Usuario = require('../models/usuario.model')

const usuarioController = {}


usuarioController.newUsuario = async(req, res) => {
    const usuario = new Usuario(req.body)
    const existeUsuario = await Usuario.find({ usuario: usuario.usuario })
    const existeNickname = await Usuario.find({ nickname: usuario.nickname })
    const existeEmail = await Usuario.find({ email: usuario.email })
    if (existeUsuario.length > 0 || existeNickname.length > 0 || existeEmail.length > 0) {
        return res.json({
            success: false,
            usuario: {}
        })
    } else {
        usuario.password = await usuario.cifrar(req.body.password)
        await usuario.save()
        return res.json({
            success: true,
            usuario
        })
    }
}

usuarioController.login = async(req, res) => {
    const { usuario, password } = req.body
    const encontrados = await Usuario.find({ usuario })
    const coincide = await encontrados[0].comparar(password, encontrados[0].password)
    if (coincide) {
        return res.json({
            success: true,
            encontrado: encontrados[0]
        })
    } else {
        return res.json({
            success: false,
            encontrado: {}
        })
    }
}

usuarioController.checkUsuario = async(req, res) => {
    const { usuario } = req.params
    const encontrado = await Usuario.find({ usuario })
    return res.json({
        success: true,
        num: encontrado.length
    })
}

usuarioController.checkNickname = async(req, res) => {
    const { nickname } = req.params
    const encontrado = await Usuario.find({ nickname })
    return res.json({
        success: true,
        num: encontrado.length
    })
}

usuarioController.checkEmail = async(req, res) => {
    const { email } = req.params
    const encontrado = await Usuario.find({ email })
    return res.json({
        success: true,
        num: encontrado.length
    })
}

module.exports = { usuarioController }