const Digitador = require('../models/Digitador')

module.exports = {
    async index(req, res) {
        const digitadores = await Digitador.find({}).sort('nome')
        return res.json(digitadores)
    },
    async create(req, res) {
        const digitador = await Digitador.create(req.body)
        return res.json(digitador)
    }
}