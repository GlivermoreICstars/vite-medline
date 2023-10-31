import React from "react";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
  <div className="navbar">
    <ul className="active">
      <Link to='/'>Home</Link>
      <Link to='/ScorecardLibrary'>Scorecard Template Library</Link>
      <Link to='/criteria'>Scorecard Criteria Page</Link>
      <Link to='/scorecard'>Scorecard</Link>
    </ul>
  </div>
)};

export default MainHeader;
