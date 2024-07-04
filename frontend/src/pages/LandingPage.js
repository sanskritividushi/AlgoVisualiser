import React from "react";
// import '/index.css'
// import { Link } from "react-router-dom";

const LandingPage = ({ handleSort }) => {
    return (
      <div>
        <div className="background"></div>
        <div className="content-wrapper">
          <div className="content-box">
          <div class="container">
        <div class="header"> 
            <span class="name"><b>ARRAYS</b></span>
        </div>
        <div class="choose"><h2>Choose Sorting Algorithm</h2></div>
        <div class="buttons_container">
            <button id="randomize_arr_btn">GENERATE RANDOM ARRAY</button>
            <div class="algo-buttons">
                  {/* <button id="bubble_button" onClick={() => handleSort('bubble')}>BUBBLE SORT</button> */}
                <button id="bubble_button" onClick={() => handleSort('bubble')}>Bubble Sort</button>
                <button id="select_button" >SELECTION SORT</button>
                <button id="merge_button" >MERGE SORT</button>
                <button id="quick_button" >QUICK SORT</button>
            </div>
            <div class="speed-buttons">
                <div class="text">SLOWER</div>
                <input type="range" id="speed-slider" min="1" max="1000" defaultValue="100" />

                <div class="text">FASTER</div>
            </div>
        </div>
        <div class="bars_container" id="bars_container">
        </div>
    </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LandingPage;