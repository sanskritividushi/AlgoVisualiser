import React, { useState } from 'react';
import '/Users/sukritipunj/Downloads/comp/AlgoVisualiser/frontend/src/index.css';

const ArraysPage = ({ handleSort, generateRandomArray, setSpeed, speed }) => {
  const [unsortedArray, setUnsortedArray] = useState([]);

  

  return (
    <div>
      <div className="navbar">
        <button onClick={generateRandomArray}>Generate Random Array</button>
        <button onClick={() => handleSort(unsortedArray, 'bubble')}>Bubble Sort</button>
        <button onClick={() => handleSort(unsortedArray, 'selection')}>Selection Sort</button>
        <button onClick={() => handleSort(unsortedArray, 'merge')}>Merge Sort</button>
        <button onClick={() => handleSort(unsortedArray, 'quick')}>Quick Sort</button>
        <div className="speed-buttons">
          <div className="text">Slower</div>
          <input
            type="range"
            id="speed-slider"
            min="1"
            max="1000"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <div className="text">Faster</div>
        </div>
      </div>
      <div className="bars_container" id="bars_container">
        {unsortedArray.map((value, index) => (
          <div key={index} className="bar" style={{ height: `${value * 10}px` }}></div>
        ))}
      </div>
    </div>
  );
};

export default ArraysPage;
