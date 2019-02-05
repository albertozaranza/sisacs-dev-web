const mongoose = require('mongoose')

const DigitadorSchema = new mongoose.Schema({
    email: String,
    senha: String,
    nome: String
});

module.exports = mongoose.model('Digitador' , DigitadorSchema)