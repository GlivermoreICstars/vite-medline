import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate()



  return (
    <>
    <div className="option-container">
      <button onClick={() => navigate('/ScorecardHistory')}className="option-box">Scorecard History
      <i className="fa-solid fa-clock-rotate-left fa-5x"></i>
      </button>
      <button onClick={() => navigate('/criteria') } className="option-box">Create new scorecard
        <i className="fa-solid fa-gavel fa-5x"></i>
      </button>
    </div>
  </>
)};

export default Home;