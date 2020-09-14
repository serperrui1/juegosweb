const Critica = require('../models/critica.model')

const criticaController = {}

criticaController.getCriticasByJuegoId = async function(req, res) {
    const { juegoId } = req.params
    const criticas = await Critica.find({ juegoId })
    return res.json({
        success: true,
        total: criticas.length,
        criticas
    })
}

criticaController.getCriticasByUsuarioId = async function(req, res) {
    const { usuarioId } = req.params
    const criticas = await Critica.find({ usuarioId })
    return res.json({
        success: true,
        total: criticas.length,
        criticas
    })
}

criticaController.getCritica = async function(req, res) {
    const { id } = req.params
    const critica = await Critica.findById(id)
    return res.json({
        success: true,
        critica
    })
}

criticaController.newCritica = async function(req, res) {
    const critica = new Critica(req.body)
    await critica.save()
    return res.json({
        success: true,
        critica
    })
}

criticaController.deleteCritica = async function(req, res) {
    const { id } = req.params
    await Critica.findByIdAndRemove(id)
    return res.json({
        success: true
    })
}

module.exports = { criticaController }