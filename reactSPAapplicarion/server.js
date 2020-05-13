var express = require("express")
var cors =require("cors")
var bodyParser=require("body-parser")
var app=express()


var port=process.env.port || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))


var Users= require('./routes/Users')
var Media= require('./routes/Media')
app.use('/users',Users)
app.use('/posts',Media)

app.listen(port,()=>{
    console.log("Server is runner on port Number:"+port)
})