const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://sisacs:Scasis1@ds121415.mlab.com:21415/sisacs-dev-web', {
    useNewUrlParser: true
})

app.use(express.json())
app.use(require('./routes'))

app.listen(3000, () => console.log('Listening on port 3000'))