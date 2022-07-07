const express = require("express")
const app = express()
const cors = require("cors")

const homeRoute = require("./routes/homeRoute")


// Using middlewares in the apllication 
app.use(cors())
app.use(express.json())
app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use('/home', homeRoute)


app.listen(9000, ()=> {
    console.log("connected to localhost : 9000 successfully")
})