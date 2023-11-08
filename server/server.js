const express = require('express');
const cors = require('cors')
const PORT = 4000;
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

app.use(cors({origin:"http://localhost:5173"}));

app.use(bodyParser.json());

// Created a database connection finally
const db = mysql.createConnection({
  host: 'localhost', // Change this to the MySQL server's host
  user: 'root',       // Change this to the MySQL username
  password: 'password3',   // Change this to the MySQL password
  database: 'medline_db'    // Change this to the MySQL database name, yess!
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



//request to get scorecard definition table from db but not using
app.get('/scorecard_definition', (req, res) => {
  const sql = "SELECT * FROM scorecard_definition"
  db.query(sql, (err, data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})



//create get/create route for criteria
app.get('/criteria', (req, res) => {
  const sql = "SELECT * FROM criteria"
  db.query(sql, (err, data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})

// I created post route for criteria
app.post("/criteria", (req, res) => {
  console.log('Received POST request for criteria:', req.body);
  try {
    const sql = "INSERT INTO criteria (`main_criteria`, `scoring_range`, `requirements`, `level1`, `level2`, `level3`, `FLname`, `date`, `justifications`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      req.body.main_criteria,
      req.body.scoring_range,
      req.body.requirements,
      req.body.level1,
      req.body.level2,
      req.body.level3,
      req.body.FLname,
      req.body.date,
      req.body.justifications
    ];

    db.query(sql, values, (err, data) => {
      if (err) {
        console.error("Error in the database query:", err);
        return res.status(500).json({ error: "Internal server error", details: err.message });
      }

      return res.status(200).json({ message: "Template has been created" });
    });
  } catch (error) {
    console.error("Error in POST operation:", error);
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
});

// attempting delete request to criteria
app.delete('/criteria/:id', (req, res) => {
  const criteriaId = req.params.id;

  const sql = "DELETE FROM criteria WHERE criteria_id = ?";
  
  db.query(sql, [criteriaId], (err, result) => {
    if (err) {
      console.error('Error deleting criteria:', err);
      return res.status(500).json({ error: 'Failed to delete criteria' });
    } else {
      console.log('Criteria deleted successfully');
      return res.status(200).json({ message: 'Criteria deleted successfully' });
    }
  });
});



app.get('/scorecard', (req, res) => {
  const sql = "SELECT * FROM criteria"
  db.query(sql, (err, data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})


//long ass get request that I ended up not needed smh
// app.post("/scorecard", (req, res) => {
//   console.log('Received POST request for criteria:', req.body);
//   try {
//     const sql = "INSERT INTO scorecard (`scorecard_id`, `user_name`, `subject_name`, `date_created`, `criteria1`, `score1`, `justification1`, `criteria2`, `score2`, `justification2`, `criteria3`, `score3`, `justification3`,`criteria4`, `score4`, `justification4`, `criteria5`, `score5`, `justification5`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     const values = [req.body.scorecard_id, req.body.user_name, req.body.subject_name, req.body.date_created, req.body.criteria1, req.body.score1, req.body.justification1, req.body.criteria2, req.body.score2, req.body.justification2, req.body.criteria3, req.body.score3, req.body.justification3, req.body.criteria4, req.body.score4, req.body.justification4, req.body.criteria5, req.body.score5, req.body.justification5];

//     db.query(sql, values, (err, data) => {
//       if (err) {
//         console.error("Error in the database query:", err);
//         return res.status(500).json({ error: "Internal server error", details: err.message });
//       }

//       return res.status(200).json({ message: "Template has been created" });
//     });
//   } catch (error) {
//     console.error("Error in POST operation:", error);
//     return res.status(500).json({ error: "Internal server error", details: error.message });
//   }
// });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});