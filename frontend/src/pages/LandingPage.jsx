import React from "react";
// import '/index.css'
import './ds.css';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
      <div>
        <div className="background"></div>
        <div className="navbar1">
        <Link to="/">HOME</Link>
        <Link to="/arrays">Arrays</Link>
        <Link to="/trees">Trees</Link>
        <Link to="/graphs">Graphs</Link>
        <Link to="/backtracking">Backtracking</Link>
      </div>
      <div className="content-wrapper">
        <div className="content-box">
          <h1 padding="20px">ALGOVISUALISER</h1>
            <p class="intro" align="center">Data structures are the building blocks of techonology with respect to software development.
              The utilisation of any data structure carries a common goal, simplifying the mechanics of our project and making our work more effortless.
              Data structures like Arrays, Trees, Graphs are fundamental concepts that play a crucial role in accomplishing these goals.
              To understand the working of these, no tool can be more helpful than visualisation. </p>
        </div>
      </div>
      </div>
    );
  }
  export default LandingPage;
