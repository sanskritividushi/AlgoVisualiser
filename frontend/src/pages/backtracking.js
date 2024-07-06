import React from 'react';
import './ds.css';
import { Link } from "react-router-dom";

const BacktrackingPage = () => {
  return (
    <div>
      <div className="navbar1">
        <Link to="/">HOME</Link>
        <Link to="/arrays">Arrays</Link>
        <Link to="/trees">Trees</Link>
        <Link to="/graphs">Graphs</Link>
        <Link to="./">Backtracking</Link>
      </div>
      <div className="container">
      <div className="name">
          <h1>Backtracking Based Real Life Applications</h1>
        </div>
      <div className="choose">
        <h2>Choose an application to visualize</h2>
      </div>
      </div>
    </div>
  );
}

export default BacktrackingPage;

