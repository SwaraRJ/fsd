var http = require('http'); 
var dt = require('./modules'); 
    http.createServer(function (req, res) { 
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write("The date and time is currently: " + 
             dt.mydatetime()); 
             res.end(); 
        }).listen(7000,()=>{
            console.log('server is running at http://localhost:7000');
        });
        