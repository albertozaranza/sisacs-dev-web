const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    email: String,
    senha: String
});

module.exports = mongoose.model('Admin' , AdminSchema)