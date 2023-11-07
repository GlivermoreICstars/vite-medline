import React, { useContext } from "react";
import { DataBaseContext } from '../App';

const ScorecardHistory = () => {
  const data = useContext(DataBaseContext);


  return(
  <div>
  <h1>Scorecard History</h1>
  <ul>
    {data.map((item) => (
      <div className="container" key={item.criteria_id}>
        <h2 className="main-criteria">Main Criteria: {item.main_criteria}</h2>
        <p>Name: {item.FLname}</p>
        <p>Date: {item.date}</p>
        <p className="range">Scoring Range: {item.scoring_range}</p>
        <p className="level1">Requirement One: {item.level1}</p>
        <p className="level2">Requirement Two: {item.level2}</p>
        <p className="level3">Requirement Three: {item.level3}</p>
        <p>{item.justifications}</p>
        <p className="criteria-id">Scorecard Criteria ID: {item.criteria_id}</p>
        
      </div>
    ))}
  </ul>
</div>
);
    }
export default ScorecardHistory;