const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log("User hit the resource")
    res.send("Home")
})

app.get('/about',(req,res)=>{
    res.send("About")
})
app.listen(5000, ()=>{
    console.log('Server ON')
})