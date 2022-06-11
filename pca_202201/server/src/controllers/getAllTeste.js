const schemaTeste = require('../models/schemaTeste');

module.exports = async function (req, res) {
    try{
        allTeste = await schemaTeste.find().lean()
        res.status(200).send(allTeste)
    }catch(err){
        res.status(500).send({Error: err.message})
    }
}