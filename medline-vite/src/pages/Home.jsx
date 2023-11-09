import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate()



  return (
    <>
    <div className="option-container">
      <button onClick={() => navigate('/ScorecardHistory')}className="option-box">Scorecard History
      
      </button>
      <button onClick={() => navigate('/criteria') } className="option-box">Create new scorecard
        
      </button>
    </div>
  </>
)};

export default Home;