//import express
const express = require('express')
const {getAppartments,getAppartmentsById, postAppartements} = require('./controller/appartementController')

const router = express.Router()
//routes
router.get('/', (req, res) => {
    console.log("in the route")
    res.send("hello world")
})
router.get('/appartments', getAppartments)

router.get('/appartments/:id', getAppartmentsById)

router.post('/appartments', postAppartements)
router.put('/appartments/:id', (req, res) => {
    console.log("in put appartment")
    res.send("Your appartment is updated")
})
router.delete('/appartments/:id', (req, res) => {
    console.log("in delete appartment")
    res.send("Your appartment is deleted")
})

module.exports = router