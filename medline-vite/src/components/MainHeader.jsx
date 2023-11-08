import React from "react";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
  <div className="navbar">
    <ul className="active">
      <Link className="home-text" to='/'>Home</Link>
      <Link to='/ScorecardHistory'>Template History</Link>
      <Link className="criteria-text" to='/criteria'>Criteria Page</Link>
    </ul>
  </div>
)};

export default MainHeader;
