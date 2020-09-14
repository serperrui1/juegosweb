const Comentario = require('../models/comentario.model')

const comentarioController = {}

comentarioController.getComentariosByCriticaId = async function(req, res) {
    const { criticaId } = req.params
    const comentarios = await Comentario.find({ criticaId })
    return res.json({
        success: true,
        total: comentarios.length,
        comentarios
    })
}

comentarioController.getComentario = async function(req, res) {
    const { id } = req.params
    const comentario = await Comentario.findById(id)
    return res.json({
        success: true,
        comentario
    })
}

comentarioController.newComentario = async function(req, res) {
    const comentario = new Comentario(req.body)
    await comentario.save()
    return res.json({
        success: true,
        comentario
    })
}

comentarioController.deleteComentario = async function(req, res) {
    const { id } = req.params
    await Comentario.findByIdAndRemove(id)
    return res.json({
        success: true
    })
}

module.exports = { comentarioController }