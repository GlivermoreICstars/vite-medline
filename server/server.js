const express = require('express');
const cors = require('cors')
const PORT = 4000;
const app = express();
const mysql = require('mysql2');

app.use(cors({origin:"http://localhost:4000"}));



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

// create request for scorecard
app.get('/scorecard', (req, res) => {
  const sql = "SELECT * FROM scorecard"
  db.query(sql, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})
//Post for scorecard
app.post("/scorecard", (req, res) => {
  const sql = "INSERT INTO scorecard (`criteria`, `FLname`, `employID`, `date`, `requirements`, `score`, `justifications`) VALUES (?);"
  const values = ['operations', 'Jaleel Payne', '4', '2023/2/11', 'general requirements', '10', 'went well']

  db.query(sql, [values], (err, data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
 
})

//create route for criteria
app.get('/criteria', (req, res) => {
  const sql = "SELECT * FROM criteria"
  db.query(sql, (err, data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})

//post route for criteria
app.post("/criteria", (req, res) => {
  const sql = "INSERT INTO criteria (`main_criteria`, `secondary_criteria`, `scoring_range`, `requirements`) VALUES (?)"
  const values = ["project management 2", "operations", "5", "requirements general"]

  db.query(sql, [values], (err, data)=> {
    if(err) return res.json(err)
    return res.json("Template has been created")
  })
 
})


//Update route for criteria
// app.put('/criteria', (req, res) => {
//   const id = req.body.id;
//   const main = req.body.main_criteria;

//   db.query("UPDATE SET criteria main_criteria = ? WHERE id = ?", [main, id], (err, result) => {
//     if(err) {
//       console.log(err)
//     } else {
//       res.send(result);
//     }
//   })
// })

//delete route for criteria
// app.delete()

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});