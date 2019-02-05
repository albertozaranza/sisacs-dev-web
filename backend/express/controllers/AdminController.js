const Admin = require('../models/Admin')

module.exports = {
    async index(req, res) {
        const admins = await Admin.find({}).sort('email')
        return res.json(admins)
    },
    async create(req, res) {
        const admin = await Admin.create(req.body)
        return res.json(admin)
    }
}