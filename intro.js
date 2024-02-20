const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('hi')
    }
    if(req.url==='/about'){
        res.end('bye')
    }
})

server.listen(5000)