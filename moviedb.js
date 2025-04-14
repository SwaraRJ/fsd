const mysql= require('mysql2');

const connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
});
connection.connect(err=>{
    if(err){
        console.error('Error: connecting to mySQL:',err.message);
        return;
    }
     console.log("Connected to MYSQL Server");
});
connection.query('CREATE DATABASE IF NOT EXISTS movie',(err,result)=>{
   if(err){
    console.error("Error: Creating Database ",err.message);
    return;
   }
   console.log('Database movie is ready' );
});
connection.changeUser({ database :'movie'},(err)=>{
    if(err){
        console.error("Error Switching to movie database",err.message);
        return;
    }
});
/*CREATE TABLE teacher (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary INT NOT NULL,
    department VARCHAR(50) NOT NULL
);*/
const createTableQuery = `
        CREATE TABLE IF NOT EXISTS movies (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          year INT NOT NULL,
        )
      `;

      

connection.query(createTableQuery,(err,result)=>{
    if(err){
        console.log('Error creating Table',err.message);
        return;
    }
    console.log('table "movies" is ready ');
});

const insertQuery=`
INSERT INTO movies (name, year)
VALUES
('DDLJ',1991),
('Vivah',2006),
('Chhava',2025)
`;

connection.query(insertQuery,(err,results)=>{
    if(err){
        console.log('Error inserting values',err.message);
        return;
    }
    console.log("record inserted successfully...");
});

const sql= 'SELECT * FROM  movies';
connection.query(sql,(err,results)=>{
    if(err){
        return console.error("Query Error:",err.message);
    }
    console.log('movies: ',results);
});
connection.end();
