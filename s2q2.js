/*const fs= require('fs');

if(!fs.existsSync('file1.txt')){
    fs.writeFileSync('file1.txt','hello world!');
}
console.log("\n file contents of file BEFORE Append : ",fs.readFileSync('file1.txt','utf8'));
fs.appendFile('file1.txt','Welcome to my first program', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File contents AFTER Append",fs.readFileSync('file1.txt','utf8'));
    }
});*/
const fs = require('fs');

//if (!fs.existsSync('file1.txt')) 
fs.writeFileSync('file1.txt', 'hello world!');
console.log("\nFile contents BEFORE Append:", fs.readFileSync('file1.txt', 'utf8'));

// Append synchronously
fs.appendFileSync('file1.txt', ' Welcome to my first program');
console.log("File contents AFTER Append:", fs.readFileSync('file1.txt', 'utf8'));
