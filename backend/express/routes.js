const express = require('express')

const routes = express.Router()

const DigitadorController = require('./controllers/DigitadorController')
const AdminController = require('./controllers/AdminController')

routes.get('/digitador', DigitadorController.index)
routes.post('/digitador', DigitadorController.create)

routes.get('/admin', AdminController.index)
routes.post('/admin', AdminController.create)

module.exports = routes