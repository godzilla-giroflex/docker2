const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    nome: {
        type: String
    },
    sobrenome: {
        type: String
    },
    telefone: {
        type: String
    },
    email: {
        type: String
    }

});

module.exports = mongoose.model('User', schema);
