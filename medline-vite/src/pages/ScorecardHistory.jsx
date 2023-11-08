import React, { useContext } from "react";
import { DataBaseContext } from '../App';

const ScorecardHistory = () => {
  const data = useContext(DataBaseContext);

  return (
    <div className="container">
      <h1 className="history-heading">Scorecard History</h1>
      <table>
        <thead>
          <tr>
            <th className="main-criteria">Main Criteria</th>
            <th>Name</th>
            <th>Date</th>
            <th className="range">Scoring Range</th>
            <th className="level1">Requirement One</th>
            <th className="level2">Requirement Two</th>
            <th className="level3">Requirement Three</th>
            <th>Justifications</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.criteria_id}>
              <td>{item.main_criteria}</td>
              <td>{item.FLname}</td>
              <td>{item.date}</td>
              <td>{item.scoring_range}</td>
              <td>{item.level1}</td>
              <td>{item.level2}</td>
              <td>{item.level3}</td>
              <td>{item.justifications}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScorecardHistory;