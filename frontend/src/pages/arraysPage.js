import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/sukritipunj/Downloads/comp/AlgoVisualiser/frontend/src/index.css';

const arraysPage = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="content-wrapper">
        <div className="content-box">
          <div className="container">
            <div className="header">
              <span className="name"><b>SORTING ALGORITHMS</b></span>
            </div>
            <div className="choose"><h2>Choose Sorting Algorithm</h2></div>
            <div className="buttons_container">
              <button id="randomize_arr_btn">GENERATE RANDOM ARRAY</button>
              <div className="algo-buttons">
                <button id="bubble_button">BUBBLE SORT</button>
                <button id="select_button">SELECTION SORT</button>
                <button id="merge_button">MERGE SORT</button>
                <button id="quick_button">QUICK SORT</button>
              </div>
              <div className="speed-buttons">
                <div className="text">SLOWER</div>
                <input type="range" id="speed-slider" min="1" max="1000" defaultValue="100" />
                <div className="text">FASTER</div>
              </div>
            </div>
            <div className="bars_container" id="bars_container"></div>
            <div>
              <Link to="/">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default arraysPage;
