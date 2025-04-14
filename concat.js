const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'text/html'});
    const str1='hello';
    const str2='everyone';
    const result= str1+ ' ' +str2;
    res.end(`
    <form>
        <label for="concat">${result}</label><br></br>
        <input type="text" name="concat" value="${result}" disabled/>
    </form>
`);
}).listen(4000,()=>{
    console.log("server is running on http://localhost:4000");
});
