import React from "react"
import { useState, useContext } from "react"
import {DataBaseContext} from '../App'

function Scorecard() {

  const scorecardData = useContext(DataBaseContext)

const [criteria, setCriteria] = useState('');
const [FLname, setFLname] = useState('');
const [employid, setEmployid] = useState('');
const [date, setDate] = useState('');
const [requirements, setRequirements] = useState('');
const [score, setScore] = useState('');
const [justification, setJustifications] = useState('');


const handleCancel = () => {
  setCriteria('');
  setFLname('');
  setEmployid('');
  setDate('');
  setRequirements('');
  setScore('');
  setJustifications('');
};


const handleSave =(e) => {
  e.preventDefault();

  const data = {
    criteria: criteria,
    FLname: FLname,
    employID: employid,
    date: date,
    requirements: requirements,
    score: score,
    FLname: FLname,
    date: date,
    justifications: justifications,
  };


fetch('http://localhost:4000/criteria', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Scorecard data posted:', responseData);
        
      })
      .catch((error) => {
        console.error('Error posting scorecard data:', error);
        
      });
  };

const displayData = (e) => {
  fetch('http://localhost:4000/criteria', {
    method: 'GET', // Use the GET method
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log('Scorecard data retrieved:', responseData);
      // Handle the retrieved data as needed
    })
    .catch((error) => {
      console.error('Error retrieving scorecard data:', error);
      // Handle errors as needed
    });
}

  return (

<>
  
  <header className="header-1">
    <label>
      Criteria
      <input
         type="text"
         name="criteria"
         placeholder="Enter main criteria"
         value={scorecardData.criteria || criteria}
         onChange={(e) => setCriteria(e.target.value)}
  
  
  
      />
    </label>
    Name/Auditor
    <label>
      <input
          type="text"
          name="FLname"
          placeholder="Enter full name"
          value={scorecardData.FLname || FLname} // Use scorecardData if available, or fallback to FLname state
          onChange={(e) => setFLname(e.target.value)}
  
      />
    </label>
    <label>
      Employee Id
      <input
         type="text"
         name="employeeID"
         placeholder="Enter credentials"
         value={employid}
         onChange={(e) => setEmployid(e.target.value)}
  
  
  
      />
    </label>
    <label>
      Date
      <input
         type="date"
         name="date"
         placeholder="Enter date"
         value={date}
         onChange={(e) => setDate(e.target.value)}/>
    </label>
  </header>
  <div>
    <header className="secondary-header">
      <h3>Competency</h3>
      <h3>Level of Process Maturity</h3>
      <h3>Score</h3>
      <h3>Choose Score</h3>
      <h3>Justification</h3>
    </header>
  </div>
  <div className="first-row-heading">
    <h2>Time Management</h2>
  </div>
  <div className="first-row">
    <div className="first-row-text">
      <p className="score-question">
        What score best describes your situation?
      </p>
    </div>
    <div>
      <section>
        <table>
          <tbody>
            <tr>
              <th className="table-heading-1">1</th>
              <th>
                <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-2">2</th>
              <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-3">3</th>
              <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-4">4</th>
              <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-5">5</th>
              <th>
                <input />
              </th>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <div>
      <input onChange={(e) => setScore(e.target.value)} value={score}  className="score-box"/>
    </div>
    <div className="create">
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div>
      <textarea
        className="justifications"
        placeholder="Justifications go here"
        
        value={justification}
        onChange={(e) => setJustifications(e.target.value)} 
      />
    </div>
  </div>
  <div className="first-row-heading">
    <h2>Cost Management</h2>
  </div>
  <div className="first-row">
    <div className="first-row-text">
      <p className="score-question">
        What score best describes your situation?
      </p>
    </div>
    <div>
      <section>
        <table>
          <tbody>
            <tr>
              <th className="table-heading-1">1</th>
              <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-2">2</th>
              <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-3">3</th>
              <th>
                <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-4">4</th>
              <th>
                <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-5">5</th>
              <th>
                <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <div>
    <input onChange={(e) => setScore(e.target.value)} value={score}  className="score-box"/>
    </div>
    <div className="create">
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div>
      <textarea
        className="justifications"
        placeholder="Justifications go here"
        
        value={justification}
        onChange={(e) => setJustifications(e.target.value)}
      />
    </div>
  </div>
  <div className="first-row-heading">
    <h2>Team Collaboration</h2>
  </div>
  <div className="first-row">
    <div className="first-row-text">
      <p className="score-question">
        What score best describes your situation?
      </p>
    </div>
    <section>
      <table>
        <tbody>
          <tr>
            <th className="table-heading-1">1</th>
            <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
            </th>
          </tr>
          <tr>
            <th className="table-heading-2">2</th>
            <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
            </th>
          </tr>
          <tr>
            <th className="table-heading-3">3</th>
            <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
            </th>
          </tr>
          <tr>
            <th className="table-heading-4">4</th>
            <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
            </th>
          </tr>
          <tr>
            <th className="table-heading-5">5</th>
            <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
    <div>
      <p onChange={(e) => setScore(e.target.value)} value={score}  className="score-box-3">1</p>
    </div>
    <div className="create">
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div>
      <textarea
       className="justifications"
        placeholder="Justifications go here"
        value={justification}
        onChange={(e) => setJustifications(e.target.value)}
      />
    </div>
  </div>
  <div className="first-row-heading">
    <h2>Leadership</h2>
  </div>
  <div className="first-row">
    <div className="first-row-text">
      <p className="score-question">
        What score best describes your situation?
      </p>
    </div>
    <div>
      <section>
        <table>
          <tbody>
            <tr>
              <th className="table-heading-1">1</th>
              <th>
                <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-2">2</th>
              <th>
                <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-3">3</th>
              <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-4">4</th>
              <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-5">5</th>
              <th>
              <input type="text" name="requirement" value={requirements} onChange={(e) => setRequirements(e.target.value)}/>
              </th>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <div>
      <p onChange={(e) => setScore(e.target.value)} value={score}  className="score-box-4">2</p>
    </div>
    <div className="create">
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div>
      <textarea
        className="justifications"
        placeholder="Justifications go here"
        
        value={justification}
        onChange={(e) => setJustifications(e.target.value)}
      />
    </div>
  </div>
  <div className="buttons">
    
    <button onClick={ handleSave } className="save-results-button" id="save-btn">
      Save Scorecard
    </button>
    <button onClick={ handleCancel } className="edit-button">Cancel</button>
    <button onClick={ displayData }>Import scorecard data</button>
  </div>
</>
  )};


  export default Scorecard
