const express = require('express')
const routes = express.Router()
const { criticaController } = require('../controllers/critica.controller')

routes.get('/juego/:juegoId/criticas', criticaController.getCriticasByJuegoId)
    .get('/usuario/:usuarioId/criticas', criticaController.getCriticasByUsuarioId)
    .get('/critica/:id', criticaController.getCritica)
    .post('/criticas/new', criticaController.newCritica)
    .delete('/critica/:id', criticaController.deleteCritica)

module.exports = routes