const express = require('express')
const routes = express.Router()
const { usuarioController } = require('../controllers/usuario.controller')

routes.post('/registro', usuarioController.newUsuario)
routes.get('/registro/checkUsuario/:usuario', usuarioController.checkUsuario)
routes.get('/registro/checkNickname/:nickname', usuarioController.checkNickname)
routes.get('/registro/checkEmail/:email', usuarioController.checkEmail)
routes.post('/login', usuarioController.login)


module.exports = routes