const express = require('express')
const routes = express.Router()
const { comentarioController } = require('../controllers/comentario.controller')

routes.get('/critica/:criticaId/comentarios', comentarioController.getComentariosByCriticaId)
    .get('/comentario/:id', comentarioController.getComentario)
    .post('/comentarios/new', comentarioController.newComentario)
    .delete('/comentario/:id', comentarioController.deleteComentario)

module.exports = routes