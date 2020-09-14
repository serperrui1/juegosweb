const express = require('express')
const routes = express.Router()
const { notaController } = require('../controllers/nota.controller')

routes.get('/juego/:juegoId/notas', notaController.getNotasByJuegoId)
    .post('/notas/new', notaController.newNota)

module.exports = routes