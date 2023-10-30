import React from "react"



function Test() {
  
  return (

<>
  
  <header className="header">
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
        placeholder="Enter Date"
        onclick="
    
    
    "
      />
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
    <div className="dropdown">
      <div className="select">
        <span className="selected">Score</span>
        <div className="caret" />
      </div>
      <ul className="menu">
        <li value={1}>1</li>
        <li value={2}>2</li>
        <li value={3}>3</li>
        <li value={4} className="active">
          4
        </li>
        <li value={5}>5</li>
      </ul>
    </div>
    <div>
      <textarea
        className="justifications"
        placeholder="Justifications goes here"
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
    <div className="dropdown">
      <div className="select">
        <span className="selected">Score</span>
        <div className="caret" />
      </div>
      <ul className="menu">
        <li value={1}>1</li>
        <li value={2}>2</li>
        <li value={3}>3</li>
        <li value={4} className="active">
          4
        </li>
        <li value={5}>5</li>
      </ul>
    </div>
    <div>
      <textarea
        className="justifications"
        placeholder="Justifications goes here"
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
    <div className="dropdown">
      <div className="select">
        <span className="selected">Score</span>
        <div className="caret" />
      </div>
      <ul className="menu">
        <li value={1}>1</li>
        <li value={2}>2</li>
        <li value={3}>3</li>
        <li value={4} className="active">
          4
        </li>
        <li value={5}>5</li>
      </ul>
    </div>
    <div>
      <textarea
        className="justifications"
        placeholder="Justifications goes here"
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
    <div className="dropdown">
      <div className="select">
        <span className="selected">Score</span>
        <div className="caret" />
      </div>
      <ul className="menu menu2">
        <li value={1}>1</li>
        <li value={2}>2</li>
        <li value={3}>3</li>
        <li value={4} className="active">
          4
        </li>
        <li value={5}>5</li>
      </ul>
    </div>
    <div>
      <textarea
        className="justifications"
        placeholder="Justifications goes here"
        defaultValue={""}
      />
    </div>
  </div>
  <div className="buttons">
    <button className="edit-button" id="edit-btn">
      EDIT
    </button>
    <button className="save-results-button" id="save-btn">
      SAVE RESULTS
    </button>
  </div>
</>
  )}


  export default Test
