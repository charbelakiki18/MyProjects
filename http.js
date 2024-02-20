const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === "/"){
        res.end("Home")
    }
    else{
        res.end("ERROR")
    }
})

server.listen(5000)