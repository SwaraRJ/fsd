/*const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer((req, res) => {
  // If the request is to upload the file
  if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();

    // Parse the incoming form data
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.write('Error uploading file');
        return res.end();
      }

      // After successful upload, show a success message
      res.write('File uploaded successfully!');
      res.end();
    });

  } else {
    // Show the form if the URL is not '/fileupload'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <form action="fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"><br>
        <input type="submit" value="Upload">
      </form>
    `);
    res.end();
  }
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});*/
const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer((req, res) => {
  // If the request is to upload the file
  if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();

    // Parse the incoming form data
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.write('Error uploading file');
        return res.end();
      }

      // After successful upload, show a success message
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>File uploaded successfully!</h1>');
      res.end();
    });

  } else {
    // Show the form if the URL is not '/fileupload'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <h2>Upload a file</h2>
      <form action="fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"><br>
        <input type="submit" value="Upload">
      </form>
    `);
    res.end();
  }
}).listen(3000, () => { 
  console.log('Server running at http://localhost:3000');
});

