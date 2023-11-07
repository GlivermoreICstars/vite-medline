import React, { useState } from 'react';

function Scorecard2() {
  
  const [name, setName] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [criteria1, setCriteria1] = useState('');
  const [justification1, setJustification1] = useState('');
  const [criteria2, setCriteria2] = useState('')
  const [score2, setScore2] = useState('');
  const [justification2, setJustification2] = useState('');
  const [criteria3, setCriteria3] = useState('');
  const [score3, setScore3] = useState('');
  const [justification3, setJustification3] = useState('');
  const [criteria4, setCriteria4] = useState('');
  const [score4, setScore4] = useState('');
  const [justification4, setJustification4] = useState('');
  const [criteria5, setCriteria5] = useState('');
  const [score5, setScore5] = useState('');
  const [justification5, setJustification5] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the data to be sent to the server
    const data = {
      user_name: name,
      subject_name: subjectName,
      date_created: dateCreated,
      criteria1,
      score1: score2,
      justification1,
      criteria2,
      score2,
      justification2,
      criteria3,
      score3,
      justification3,
      criteria4,
      score4,
      justification4,
      criteria5,
      score5,
      justification5,
    };

    // POST request to your server
    fetch('http://localhost:4000/scorecard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Data posted:', responseData);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="subjectName">Subject Name:</label>
        <input
          type="text"
          id="subjectName"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateCreated">Date Created:</label>
        <input
          type="text"
          id="dateCreated"
          value={dateCreated}
          onChange={(e) => setDateCreated(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="criteria1">Criteria 1:</label>
        <input
          type="text"
          id="criteria1"
          value={criteria1}
          onChange={(e) => setCriteria1(e.target.value)}
        />
        <label htmlFor="justification1">Justification 1:</label>
        <input
          type="text"
          id="justification1"
          value={justification1}
          onChange={(e) => setJustification1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="criteria2">Criteria 2:</label>
        <input
          type="text"
          id="criteria2"
          value={criteria2}
          onChange={(e) => setCriteria2(e.target.value)}
        />
        <label htmlFor="score2">Score 2:</label>
        <input
          type="text"
          id="score2"
          value={score2}
          onChange={(e) => setScore2(e.target.value)}
        />
        <label htmlFor="justification2">Justification 2:</label>
        <input
          type="text"
          id="justification2"
          value={justification2}
          onChange={(e) => setJustification2(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="criteria3">Criteria 3:</label>
        <input
          type="text"
          id="criteria3"
          value={criteria3}
          onChange={(e) => setCriteria3(e.target.value)}
        />
        <label htmlFor="score3">Score 3:</label>
        <input
          type="text"
          id="score3"
          value={score3}
          onChange={(e) => setScore3(e.target.value)}
        />
        <label htmlFor="justification3">Justification 3:</label>
        <input
          type="text"
          id="justification3"
          value={justification3}
          onChange={(e) => setJustification3(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="criteria4">Criteria 4:</label>
        <input
          type="text"
          id="criteria4"
          value={criteria4}
          onChange={(e) => setCriteria4(e.target.value)}
        />
        <label htmlFor="score4">Score 4:</label>
        <input
          type="text"
          id="score4"
          value={score4}
          onChange={(e) => setScore4(e.target.value)}
        />
        <label htmlFor="justification4">Justification 4:</label>
        <input
          type="text"
          id="justification4"
          value={justification4}
          onChange={(e) => setJustification4(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="criteria5">Criteria 5:</label>
        <input
          type="text"
          id="criteria5"
          value={criteria5}
          onChange={(e) => setCriteria5(e.target.value)}
        />
        <label htmlFor="score5">Score 5:</label>
        <input
          type="text"
          id="score5"
          value={score5}
          onChange={(e) => setScore5(e.target.value)}
        />
        <label htmlFor="justification5">Justification 5:</label>
        <input
          type="text"
          id="justification5"
          value={justification5}
          onChange={(e) => setJustification5(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
  );
}

export default Scorecard2;