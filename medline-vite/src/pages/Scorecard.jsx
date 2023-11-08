import React from "react"
import { useState, useContext } from "react"
import {DataBaseContext} from '../App'

function Scorecard() {

  const scorecardData = useContext(DataBaseContext)
  

  
  

  const [main, setMain] = useState('');
  const [range, setRange] = useState('');
  const [requirement1, setRequirement1] = useState('');
  const [requirement2, setRequirement2] = useState('');
  const [requirement3, setRequirement3] = useState('');
  const [level1, setLevel1] = useState('')
  const [level2, setLevel2] = useState('')
  const [level3, setLevel3] = useState('')
  const [criteria_id, setCriteria_id] = useState('')
  const [FLname, setFLname] = useState('')
  const [date, setDate] = useState('')
  const [justifications, setJustifications] = useState('')


const handleCancel = () => {
  setMain('');
  setRange('');
  setRequirement('');
  setRequirement1('')
  setLevel1('')
  setLevel2('')
  setLevel3('')
  setCriteria_id('')
  setFLname('')
  setDate('')
  setJustifications('')
};



  const handleSave = (e) => {
    e.preventDefault();
    console.log('main:', main);
    console.log('range:', range);
    console.log('requirement1:', requirement1); 
    console.log('requirement2:', requirement2);
    console.log('requirement3:', requirement3); 
    console.log('level1:', level1);
    console.log('level2:', level2);
    console.log('level3:', level3);
    console.log('criteria_id', criteria_id);
    console.log('FLname:', FLname);
    console.log('date:', date);
    console.log('justifications:', justifications);
  
    // {} to server
    const data = {
      main_criteria: main,
      scoring_range: range,
      requirements: [requirement1, requirement2, requirement3], 
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
        console.log('Scorecard data posted to database:', responseData);
      })
      .catch((error) => {
        console.error('Error posting scorecard data to database:', error);
      });
  };
//this one gets data succesfully, but doesn't display for some reason
const displayData = (e) => {
  fetch('http://localhost:4000/criteria', {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log('Scorecard data retrieved:', responseData);
      //successful retrieval
    })
    .catch((error) => {
      console.error('Error retrieving scorecard data:', error);
      //takes care of any errors from db
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
         value={main}
         onChange={(e) => setMain(e.target.value)}
         />
    </label>
   
    <label>
    Scoring Candidate
      <input
          type="text"
          name="FLname"
          placeholder="Enter full name"
          value={FLname}
          onChange={(e) => setFLname(e.target.value)}
         
  
      />
    </label>
    <label>
      Date
      <input
         type="text"
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
      <h3>Justification</h3>
    </header>
  </div>
  <div className="first-row-heading">
    <h2></h2>
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
                <input type="text" name="requirement" value={requirement1} onChange={(e) => setRequirement1(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-2">2</th>
              <th>
              <input type="text" name="requirement" value={requirement2} onChange={(e) => setRequirement2(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th className="table-heading-3">3</th>
              <th>
              <input type="text" name="requirement" value={requirement3} onChange={(e) => setRequirement3(e.target.value)}/>
              </th>
            </tr>
            
            
          </tbody>
        </table>
      </section>
    </div>
    <div>
      <input onChange={(e) => setRange(e.target.value)} value={range}  className="score-box"/>
    </div>
    <div className="create">
    </div>
    <div>
      <textarea
        className="justifications"
        placeholder="Justifications go here"
        
        value={justifications}
        onChange={(e) => setJustifications(e.target.value)} 
      />
    </div>
  </div>
  <div className="first-row-heading">
    <h2></h2>
  </div>
  <div className="buttons">
    
    <button onClick={ handleSave } className="save-results-button" id="save-btn">
      Save Scorecard
    </button>
    <button onClick={ handleCancel } className="edit-button">Cancel</button>
    <button className="save-results-button" onClick={ displayData }>Import scorecard data</button>
  </div>
</>
  )};


  export default Scorecard
