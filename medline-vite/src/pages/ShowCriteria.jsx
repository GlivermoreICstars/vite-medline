import React, { useContext } from "react";
import { DataBaseContext } from '../App';

const ShowCriteria = () => {
  const data = useContext(DataBaseContext);


  return(
  <div>
  <h1>ShowCriteria</h1>
  <ul>
    {data.map((item) => (
      <li key={item.criteria_id}>
        <h2 className="main-criteria">Main Criteria: {item.main_criteria}</h2>
        <p className="second-criteria">Secondary Criteria: {item.secondary_criteria}</p>
        <p className="range">Scoring Range: {item.scoring_range}</p>
        <p className="level1">Level One: {item.level1}</p>
        <p className="level2">Level Two: {item.level2}</p>
        <p className="level3">Levl Three: {item.levl3}</p>
        <p className="criteria-id">Scorecard Criteria ID: {item.criteria_id}</p>
      </li>
    ))}
  </ul>
</div>
);
    }
export default ShowCriteria;