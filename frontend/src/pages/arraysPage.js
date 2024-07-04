import React from "react";
// import '/index.css'
// import { Link } from "react-router-dom";

const ArraysPage = ({ handleSort, generateRandomArray, setSpeed, speed }) => {
    return (
      <div>
        <div className="background"></div>
           <div class="container">
        <div class="header"> 
            <span class="name"><h1><b>ARRAY SORTING ALGORITHMS</b></h1></span>
        </div>
        <div class="choose"><h2>Choose an algorithm to visualise its sorting</h2></div>
        <div class="buttons_container">
            <button id="randomize_arr_btn" onClick={generateRandomArray}>GENERATE RANDOM ARRAY</button>
            <div class="algo-buttons">
                <button id="bubble_button" onClick={() => handleSort('bubble')}>BUBBLE SORT</button>
                <button id="select_button" onClick={() => handleSort('selection')}>SELECTION SORT</button>
                <button id="merge_button"  onClick={() => handleSort('merge')}>MERGE SORT</button>
                <button id="quick_button"  onClick={() => handleSort('quick')}>QUICK SORT</button>
                </div>
                </div>
            <div class="speed-buttons">
                <div class="text">SLOWER</div>
                <input
                type="range"
                id="speed-slider"
                min="10"
                max="1000"
                value={1050-speed}
                onChange={(e) => setSpeed(1050-Number(e.target.value))}
              />
                {/* <input type="range" id="speed-slider" min="1" max="1000" defaultValue="100" /> */}
                <div class="text">FASTER</div>
            </div>
        <div class="bars_container" id="bars_container">
        </div>
       </div>
          </div>
    );
  }
  export default ArraysPage;