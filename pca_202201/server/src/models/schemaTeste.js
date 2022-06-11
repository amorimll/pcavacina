const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let schemaTeste = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    cpf: {
        type: String
    },
    tel: {
        type: String
    },
    data: {
        type: String
    },
    horario: {
        type: String
    },
    vacina: {
        type: String
    },
});

module.exports = mongoose.model("schemaTeste", schemaTeste);