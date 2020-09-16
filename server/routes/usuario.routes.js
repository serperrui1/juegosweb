const express = require('express')
const routes = express.Router()
const { usuarioController } = require('../controllers/usuario.controller')

routes.post('/registro', usuarioController.newUsuario)

module.exports = routes