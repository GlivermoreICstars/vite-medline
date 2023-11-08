import React, { useContext, useState, useEffect } from "react";
import { DataBaseContext } from '../App';
import CriteriaFinder from "../components/CriteriaFinder";


const ScorecardHistory = () => {
  const data = useContext(DataBaseContext);
  const [deletedId, setDeletedId] = useState(null);
  const [rowData, setRowData] = useState(data);

  
  
  useEffect(() => {
    if (deletedId) {
      setRowData(rowData.filter(item => item.criteria_id !== deletedId));
    }
  }, [deletedId, rowData]);

  // this should delete rows
  const handleDelete = async (id) => {
    try {
      const response = await CriteriaFinder.delete(`/${id}`);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };


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
              <td>
              <button onClick={() => handleDelete(item.criteria_id)}>
  Delete
</button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScorecardHistory;