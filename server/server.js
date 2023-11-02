const express = require('express');
const cors = require('cors')
const PORT = 4000;
const app = express();
const mysql = require('mysql2');

app.use(cors({origin:"http://localhost:3000"}));



// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL server's host
  user: 'root',       // Change this to your MySQL username
  password: 'password3',   // Change this to your MySQL password
  database: 'medline_db'    // Change this to your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

app.get('/', (req, res) => {
  return res.json('Connected to the database finally')
})

// Define a sample route that queries the database
app.get('/scorecard', (req, res) => {
  const sql = "SELECT * FROM scorecard"
  db.query(sql, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});