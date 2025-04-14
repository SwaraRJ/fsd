console.log("hello");
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <form action="fileupload" method="post" enctype="multipart/form-data">
      <input type="file" name="filetoupload"><br>
      <input type="submit" value="Upload">
    </form>
  `);
  res.end();
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
