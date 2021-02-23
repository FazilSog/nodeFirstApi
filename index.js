const express = require ('express')
const app= express()
//import routes
const routes = require('./app/routes')
//import body-parser
const bodyParser = require('body-parser')
// tel express to user bodyParser
app.use(bodyParser.json())
// tel express to use routes
app.use(routes)


app.listen(8080, ()=>{
    console.log("server is running on: 8080")
})
