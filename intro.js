const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Request")
    res.end("Response")
})

server.listen(5000,()=>{
    console.log("Server Listening")
})

console.log("Done")