import React from "react";
// import '/index.css'
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
      <div>
      <div className="background"></div>
      <div className="navbar">
        <Link to="./arrays">Arrays</Link>
        <Link to="./treesPage">Trees</Link>
        <Link to="./graphs">Graphs</Link>
        <Link to="/">HOME</Link>
      </div>
      <div className="content-wrapper">
        <div className="content-box">
          <h1>ALGOVISUALISER</h1>
          <p align="left">Arrays, sorting, and trees are fundamental concepts that play a crucial role in organizing and 
          manipulating data efficiently. Arrays provide a simple way to store and access multiple elements in a contiguous 
          memory block. Sorting algorithms help us order data in a meaningful way, while trees allow for efficient searching and hierarchical organization.</p>
        </div>
      </div>
      </div>
    );
  }
  export default LandingPage;
