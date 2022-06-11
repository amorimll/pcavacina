const schemaTeste = require('../models/schemaTeste.js');

module.exports = async function (req, res) { 
    try {
        const { nome, email, cpf, tel, data, horario, vacina } = req.body;

        const objetoTeste = new schemaTeste({
            nome,
            email,
            cpf,
            tel,
            data,
            horario,
            vacina
        });

        await objetoTeste.save();
        res.status(200).send(objetoTeste);
    }catch (err){
        res.status(400).send({Error: err.message})
    }
}