import React, { useContext } from "react";
import { DataBaseContext } from '../App';

const ShowCriteria = () => {
  const data = useContext(DataBaseContext);


  return(
  <div>
  <h1>ShowCriteria</h1>
  <ul>
    {data.map((item) => (
      <h1 key={item.criteria_id}>
        <h2>Main Criteria: {item.main_criteria}</h2>
        <p>Secondary Criteria: {item.secondary_criteria}</p>
        <p>Scoring Range: {item.scoring_range}</p>
        <p>Level One: {item.level1}</p>
        <p>Level Two: {item.level2}</p>
        <p>Levl Three: {item.levl3}</p>
        <p>Scorecard Criteria ID: {item.criteria_id}</p>
      </h1>
    ))}
  </ul>
</div>
);
    }
export default ShowCriteria;