const Nota = require('../models/nota.model')

const notaController = {}

notaController.getNotasByJuegoId = async function(req, res) {
    const { juegoId } = req.params
    const notas = await Nota.find({ juegoId })
    return res.json({
        success: true,
        total: notas.length,
        notas
    })
}


notaController.newNota = async function(req, res) {
    console.log(req.body);
    const nota = new Nota(req.body)
    await nota.save()
    return res.json({
        success: true,
        nota
    })
}

module.exports = { notaController }