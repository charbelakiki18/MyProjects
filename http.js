const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./content/index.html')
const style = readFileSync('./content/styles.css')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.writeHead(200,{'content-type': 'text/html'})
    res.write(homePage)
    res.end()
}else if(req.url === '/styles.css'){
    res.writeHead(200,{'content-type': 'text/css'})
    res.write(style)
    res.end()
}else{
    res.writeHead(404)
    res.end()
}
})

server.listen(5000,()=>{
    console.log("Server Listening")
})
