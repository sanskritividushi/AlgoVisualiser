import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [unsortedArray, setUnsortedArray] = useState([]);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    generateRandomArray();
  }, []);

  const generateRandomArray = () => {
    const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 30) + 1);
    setUnsortedArray(array);
    renderBars(array);
  };

  const renderBars = (array) => {
    const barsContainer = document.getElementById('bars_container');
    barsContainer.innerHTML = '';
    array.forEach(value => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${value * 10}px`;
      barsContainer.appendChild(bar);
    });
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const bubbleSort = async (array) => {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          bars[j].style.height = `${array[j] * 10}px`;
          bars[j + 1].style.height = `${array[j + 1] * 10}px`;
          await sleep(speed);
        }
      }
    }
    return array;
  };

  const handleSort = async (sortType) => {
    let sortedArray;
    switch (sortType) {
      case 'bubble':
        sortedArray = await bubbleSort([...unsortedArray]);
        break;
      // Add cases for other sorting algorithms
      default:
        break;
    }
    console.log(sortedArray);
  };

  return (
    <div className="container">
      <div className="header">
        <span className="name"><b>AlgoVisualiser</b></span>
      </div>
      <div className="choose">
        <h2> Choose Sorting Algorithm</h2>
      </div>
      <div className="buttons_container">
        <button id="randomize_arr_btn" onClick={generateRandomArray}>GENERATE RANDOM ARRAY</button>
        <div className="algo-buttons">
          <button id="bubble_button" onClick={() => handleSort('bubble')}>BUBBLE SORT</button>
          <button id="select_button">SELECTION SORT</button>
          <button id="merge_button">MERGE SORT</button>
          <button id="quick_button">QUICK SORT</button>
        </div>
        <div className="speed-buttons">
          <div className="text">SLOWER</div>
          <input 
            type="range" 
            id="speed-slider" 
            min="1" 
            max="1000" 
            value={speed} 
            onChange={(e) => setSpeed(400 - e.target.value)} 
          />
          <div className="text">FASTER</div>
        </div>
      </div>
      <div className="bars_container" id="bars_container"></div>
    </div>
  );
}

export default App;
