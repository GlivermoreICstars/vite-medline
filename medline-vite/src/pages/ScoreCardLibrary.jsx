import React from "react";
import { useNavigate } from "react-router-dom";


function ScoreCardLibrary() {

  const navigate = useNavigate()



  return (
    <>
    <div className="option-container">
      <button className="option-box">Scorecard History
      <i className="fa-solid fa-clock-rotate-left fa-5x fa-fade"></i>
      </button>
      <button className="option-box">Company Templates
        <i className="fa-regular fa-window-restore fa-5x fa-fade"></i>
      </button>
      <button onClick={() => navigate('/criteria') } className="option-box">Create new scorecard
        <i className="fa-solid fa-gavel fa-5x fa-fade"></i>
      </button>
    </div>
  </>
)};

export default ScoreCardLibrary;
