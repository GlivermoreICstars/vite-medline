import React from "react"
import { useState } from "react"


function Scorecard() {

const [state, setState] = useState(false)
const [state1, setState1] = useState(false)

const toggle2 = () => {
  setState1(!state1)
}
const toggle = () => {
  setState(!state)
}

  return (

<>
  
  <header className="header-1">
    <label>
      Criteria
      <input
        size={16}
        name="enter-criteria"
        placeholder="Enter Criteria
  
  
  "
      />
    </label>
    Name/Auditor
    <label>
      <input
        className="name-input"
        placeholder="Enter name
  
  
  "
      />
    </label>
    <label>
      Employee Id
      <input
        placeholder="Enter employee ID
  
  
  "
      />
    </label>
    <label>
      Date
      <input
        placeholder="Enter Date"/>
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
                <input />
              </th>
            </tr>
            <tr>
              <th className="table-heading-2">2</th>
              <th>
                <input />
              </th>
            </tr>
            <tr>
              <th className="table-heading-3">3</th>
              <th>
                <input />
              </th>
            </tr>
            <tr>
              <th className="table-heading-4">4</th>
              <th>
                <input />
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
      <p className="score-box">5</p>
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
        defaultValue={""}
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
                <input />
              </th>
            </tr>
            <tr>
              <th className="table-heading-2">2</th>
              <th>
                <input />
              </th>
            </tr>
            <tr>
              <th className="table-heading-3">3</th>
              <th>
                <input />
              </th>
            </tr>
            <tr>
              <th className="table-heading-4">4</th>
              <th>
                <input />
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
      <p className="score-box-2">3</p>
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
        defaultValue={""}
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
              <input />
            </th>
          </tr>
          <tr>
            <th className="table-heading-2">2</th>
            <th>
              <input />
            </th>
          </tr>
          <tr>
            <th className="table-heading-3">3</th>
            <th>
              <input />
            </th>
          </tr>
          <tr>
            <th className="table-heading-4">4</th>
            <th>
              <input />
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
    <div>
      <p className="score-box-3">1</p>
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
        defaultValue={""}
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
                <input />
              </th>
            </tr>
            <tr>
              <th className="table-heading-2">2</th>
              <th>
                <input />
              </th>
            </tr>
            <tr>
              <th className="table-heading-3">3</th>
              <th>
                <input />
              </th>
            </tr>
            <tr>
              <th className="table-heading-4">4</th>
              <th>
                <input />
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
      <p className="score-box-4">2</p>
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
        defaultValue={""}
      />
    </div>
  </div>
  <div className="buttons">
    <button onClick={ toggle2 } className="edit-button" id="edit-btn">
      { state1 ? 'You may edit document' : 'Edit'}
    </button>
    <button onClick={ toggle } className="save-results-button" id="save-btn">
      { state ? 'Results Saved' : 'Save'}
    </button>
  </div>
</>
  )}


  export default Scorecard
