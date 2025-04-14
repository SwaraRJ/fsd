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
connection.query('CREATE DATABASE IF NOT EXISTS college',(err,result)=>{
   if(err){
    console.error("Error: Creating Database ",err.message);
    return;
   }
   console.log('Database college is ready' );
});
connection.changeUser({ database :'college'},(err)=>{
    if(err){
        console.error("Error Switching to college database",err.message);
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
        CREATE TABLE IF NOT EXISTS teacher (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          salary INT NOT NULL,
          department VARCHAR(50) NOT NULL
        )
      `;

connection.query(createTableQuery,(err,result)=>{
    if(err){
        console.log('Error creating Table',err.message);
        return;
    }
    console.log('table "teacher" is ready ');
});

const insertQuery=`
INSERT INTO teacher (name, salary, department)
VALUES
('MR.Khan',55000, 'cs'),
('MR.Sharma',70000,'Maths'),
('MR.Modi',85000,'chemistry')
`;

connection.query(insertQuery,(err,results)=>{
    if(err){
        console.log('Error inserting values',err.message);
        return;
    }
    console.log("record inserted successfully...");
});

const sql= 'SELECT * FROM  teacher WHERE salary > 20000';
connection.query(sql,(err,results)=>{
    if(err){
        return console.error("Query Error:",err.message);
    }
    console.log('teacher with salary >20000',results);
});
connection.end();
