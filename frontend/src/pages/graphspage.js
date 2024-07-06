import React from 'react';
import './ds.css';
import { Link } from "react-router-dom";

const GraphsPage = () => {
  return (
    <div>
      <div className="navbar1">
        <Link to="/">HOME</Link>
        <Link to="/arrays">Arrays</Link>
        <Link to="/trees">Trees</Link>
        <Link to="./">Graphs</Link>
        <Link to="/backtracking">Backtracking</Link>
      </div>
      <div className="container">
      <div className="name">
          <h1>Graph Traversals</h1>
        </div>
      <div className="choose">
        <h2>Choose a traversal to visualize</h2>
      </div>
      </div>
    </div>
  );
}

export default GraphsPage;

