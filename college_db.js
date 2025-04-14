const mysql=require('mysql2');

const connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
});
connection.connect(err=>{
  if(err){
    console.error('connecting to mySQL',err.message);
    return;
  }
    console.log('connected to database');
});
connection.query('CREATE DATABASE IF NOT EXISTS college_db',(err,result)=>{
    if(err){
        console.error('Error: creating database');
        return;
    }
    console.log('database "college_db" is ready');
});
connection.changeUser({database :'college_db'},(err)=>{
    if(err){
        console.error('Error : changing database',err.message);
        return;
    }

});
const createTableQuery= `
CREATE TABLE teach(
id INT NOT NULL PRIMARY KEY,
name VARCHAR(15) NOT NULL,
salary INT NOT NULL,
department VARCHAR(50) NOT NULL
)
`;

connection.query(createTableQuery,(err,result)=>{
    if(err){
        console.error('Error: creating Table "teach"',err.message);
        return;
    }
    console.log('teach table is ready');
});
const insertQuery= `
INSERT INTO teach (name,salary,department)
VALUES
('Miss Jaiswal',45000,'cs'),
('Miss rani',45120,'chemistry'),
('Miss Akshada',12000,'physics')
`;

connection.query(insertQuery,(err,result)=>{
    if(err){
        console.error('Error: Inserting Records',err.message);
        return;
    }
    console.log("Record Inserted Successfully");
});

const sql= 'SELECT * FROM  teach WHERE salary > 20000';
connection.query(sql,(err,results)=>{
    if(err){
        return console.error("Query Error:",err.message);
    }
    console.log('teacher with salary >20000',results);
});