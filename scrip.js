const http = require('http')
const path = require('path')
const fs = require('fs')
const mime = require(mime-types)
const server = http.createServer((req,res) => {
const reqUrl = req.url
const sendfile = reqUrl = reqUrl == '/' ? 'index.html' : reqUrl;
const sendfiepath = path.join(__dirname,sendfile);
 const contentType = mime.lookup(sendfile) || 'text/htm'

fs.readFile(sendfiepath,(err,data) => {
    if(err){
        console.log(err)
        res.end()
        return
    }
})
res.writeHead(200,{'content-type':'text/html'})
res.end('data')
}) 