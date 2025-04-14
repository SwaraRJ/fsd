var http = require('http'); 
var uc = require('upper-case'); 
http.createServer(function (req, res) { 
res.writeHead(200, {'Content-Type': 'text/html'}); 
/*Use our upper-case module to upper case a string:*/ 
res.write(uc.upperCase("Hello World!")); 
res.end(); 
}).listen(1000,()=>
console.log("server is listening at http://localhost:1000" ));