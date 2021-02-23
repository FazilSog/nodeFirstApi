const Appartments = require('../model/appartment')
const getAppartments = (req, res) => {
    res.json(Appartments.list())
}

const getAppartmentsById = (req, res) => {
    console.log("this the appartment :"+req.params.id)
    res.json(Appartments.get(req.params.id - 1))
    console.log(Appartments.get(req.params.id - 1))
}

const postAppartements = (req,res) => {
    console.log(req.body)
    res.json(Appartments.insert(req.body))
}

module.exports = { getAppartments, getAppartmentsById ,postAppartements}