import React from "react"
import { useState, useContext } from "react"
import {DataBaseContext} from '../App'

function Scorecard() {

  const scorecardData = useContext(DataBaseContext)
  const FLname1 = [scorecardData]

  
  

  const [main, setMain] = useState('');
  const [second, setSecond] = useState('');
  const [range, setRange] = useState('');
  const [requirement, setRequirement] = useState('');
  const [level1, setLevel1] = useState('')
  const [level2, setLevel2] = useState('')
  const [level3, setLevel3] = useState('')
  const [criteria_id, setCriteria_id] = useState('')
  const [FLname, setFLname] = useState('')
  const [date, setDate] = useState('')
  const [justifications, setJustifications] = useState('')


const handleCancel = () => {
  setMain('');
  setSecond('');
  setRange('');
  setRequirement('');
  setLevel1('')
  setLevel2('')
  setLevel3('')
  setCriteria_id('')
  setFLname('')
  setDate('')
  setJustifications('')
};


const handleSave =(e) => {
  e.preventDefault();
    console.log('main:', main);
    console.log('second:', second);
    console.log('range:', range);
    console.log('requirment:', requirement);
    console.log('level1:', level1);
    console.log('level2:', level2);
    console.log('level3:', level3);
    console.log('criteria_id', criteria_id);
    console.log('FLname:', FLname);
    console.log('date:', date);
    console.log('justifications:', justifications)

    // {} to server
    const data = {
      main_criteria: main,
      secondary_criteria: second,
      scoring_range: range,
      requirements: requirement,
      level1: level1,
      level2: level2,
      level3: level3,
      criteria_id: criteria_id,
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
        console.log('Scorecard data posted to data base:', responseData);
        
      })
      .catch((error) => {
        console.error('Error posting scorecard data to database:', error);
        
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
