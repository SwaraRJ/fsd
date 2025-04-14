var http = require('http'); 
var fs = require('fs'); 
http.createServer(function (req, res) { 
fs.readFile('s23.html', function(err, data) { 
res.writeHead(200, {'Content-Type': 'text/html'}); 
res.write(data); 
return res.end(); 
}); 
}).listen(10000,()=>{
    console.log('server is running at http://localhost:10000')
});