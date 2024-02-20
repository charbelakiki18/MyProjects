const {readFile,writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
/*const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,"utf8",(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}*/

//getText("./content/test.txt").then((result)=>console.log(result)).catch((err)=>console.log(err))

const start = async()=>{
    try{
        const first = await readFilePromise("./content/test.txt","utf8")
        await writeFilePromise("./content/new.txt","NEWWWW", {flag: "a"})
        console.log(first)
    }catch(error){
        console.log(error)
    }
}

start()
