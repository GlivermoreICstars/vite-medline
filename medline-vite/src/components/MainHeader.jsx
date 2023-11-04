import React from "react";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
  <div className="navbar">
    <ul className="active">
      <Link to='/'>Home</Link>
      <Link to='/ScorecardLibrary'>Template Library</Link>
      <Link to='/criteria'>Criteria Page</Link>
    </ul>
  </div>
)};

export default MainHeader;
