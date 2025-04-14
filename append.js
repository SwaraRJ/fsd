const http= require('http');
const url= require('url');
const fs= require('fs');
const {constants}=require('crypto');

http.createServer((req,res)=>{
    const q=url.parse(req.url,true);
    const  file= "test.txt"+q.pathname;

    fs.readFile(file,(err,data)=>{
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200, {"content-type": "text/html"});
        res.write(data);
        return res.end();
    });

}).listen(2000,()=>{
    console.log("server is running on http://localhost:2000");

    // console.log("server is running on https://localhost2000");
});