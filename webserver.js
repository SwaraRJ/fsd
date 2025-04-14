const http= require('http');
const mysql=require('mysql');


const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h2>welcome to simple web server</h2>");
    res.end();
}); 
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});