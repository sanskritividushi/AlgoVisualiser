import React from 'react';
// import  {useState } from "react";
import { Link } from "react-router-dom";
import './ds.css';

const ArraysPage = ({ handleSort, generateRandomArray, setSpeed, speed, selectedAlgorithm, getCodeSnippet }) => {
  
  return (
    <div>
      <div className="navbar1">
        <Link to="/">Home</Link>
        <Link to="./">Arrays</Link>
        <Link to="/trees">Trees</Link>
        <Link to="/graphs">Graphs</Link>
      </div>
    <div className="container">
      {/* <div className="header"> */}
        <div className="name">
          <h1>Array Sorting Algorithms</h1>
        </div>
      {/* </div> */}
      <div className="choose">
        <h2>Choose an algorithm to visualize</h2>
      </div>
      <div className="buttons_container">
      <button id="randomize_arr_btn" onClick={generateRandomArray}>Generate Random Array</button>
        <div className="algo-buttons">
            <button id="bubble_button" onClick={() => handleSort('bubble')}>Bubble Sort</button>
          <button id="select_button" onClick={() => handleSort('selection')}>Selection Sort</button>
          <button id="merge_button" onClick={() => handleSort('merge')}>Merge Sort</button>
          <button id="quick_button" onClick={() => handleSort('quick')}>Quick Sort</button>
          </div>
        <div className="speed-buttons">
          <div className="text">Slower</div>
          <input
            type="range"
            id="speed-slider"
            min="10"
            max="1000"
            value={1050-speed}
            onChange={(e) => setSpeed(1050-e.target.value)}
          />
          <div className="text">Faster</div>
          </div>
          </div>
          <div className="bars_container" id="bars_container"></div>

        {selectedAlgorithm && (
          <div className="code_snippet">
            <h3>{selectedAlgorithm.charAt(0).toUpperCase() + selectedAlgorithm.slice(1)} Sort:</h3>
            <pre className="code">{getCodeSnippet(selectedAlgorithm)}</pre>
        </div>
        )}
      </div>
      </div>
  );
};

export default ArraysPage;
