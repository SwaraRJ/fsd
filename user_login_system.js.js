const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',   // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'mydb'  // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err);
        return;
    }
    console.log("Connected to MySQL database");
});

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check credentials in the database
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.send("Login Successful! Welcome, " + username);
        } else {
            res.send("Invalid Username or Password");
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

