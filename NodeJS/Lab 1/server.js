const http = require('http');
const file = require("fs");

const server = http.createServer((_,res)=>{
    const data = file.readFileSync('data.json',"utf8")
    res.writeHead(200,{
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin' : '*'
    })
    res.end(data)
})


server.listen(5050,'127.0.0.1',0,()=>{
    console.log("server is running")
})