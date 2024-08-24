import React from 'react';
import {useState } from "react";
import { Link } from "react-router-dom";
import './ds.css';

const ArraysPage = () => {
  const [unsortedArray, setUnsortedArray] = useState([]);
  const [speed, setSpeed] = useState(900);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  const generateRandomArray = () => {
    const array = Array.from({ length: 30 }, () => Math.floor(Math.random() * 40) + 1);
    setUnsortedArray(array);
    renderBars(array);
  };

  const renderBars = (array) => {
    const barsContainer = document.getElementById('bars_container');
    if (barsContainer) {
      barsContainer.innerHTML = '';
      array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 10}px`;
        barsContainer.appendChild(bar);
      });
    }
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const bubbleSort = async (array) => {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        bars[j].style.backgroundColor = '#494EE5';
        bars[j + 1].style.backgroundColor = '#494EE5';
        if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
          await sleep(speed);
          let tempHeight = bars[j].style.height;
          bars[j].style.height = bars[j + 1].style.height;
          bars[j + 1].style.height = tempHeight;
        }
        bars[j].style.backgroundColor = '#4AA8F2';
        bars[j + 1].style.backgroundColor = '#4AA8F2';
      }
      bars[bars.length - 1 - i].style.backgroundColor = 'green';
    }
    bars[0].style.backgroundColor = 'black';
    return array;
  };

  const selectionSort = async (array) => {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length - 1; i++) {
      let minIdx = i;
      bars[i].style.backgroundColor = '#494EE5';
      for (let j = i + 1; j < array.length; j++) {
        bars[j].style.backgroundColor = '#141444';
        if (parseInt(bars[j].style.height) < parseInt(bars[minIdx].style.height)) {
          if (minIdx !== i) {
            bars[minIdx].style.backgroundColor = "#4AA8F2";
          }
          minIdx = j;
          bars[minIdx].style.backgroundColor = "#494EE5";
        } else {
          bars[j].style.backgroundColor = "#4AA8F2";
        }
        await sleep(speed);
      }
      if (minIdx !== i) {
        let temp = array[minIdx];
        array[minIdx] = array[i];
        array[i] = temp;
        bars[minIdx].style.height = array[minIdx] * 10 + "px";
        bars[i].style.height = array[i] * 10 + "px";
      }

      bars[i].style.backgroundColor = "black";
      if (minIdx !== i) {
        bars[minIdx].style.backgroundColor = "#4AA8F2";
      }
      await sleep(speed);
    }
    return array;
  };

  const mergeSort= async(array, l = 0, r = array.length - 1) => {
    if (l >= r) return;
    let m = l + Math.floor((r - l) / 2);
    await mergeSort(array, l, m);
    await mergeSort(array, m + 1, r);
    await merge(array, l, m, r);
  }
  const merge= async(array, l, m, r) =>{
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);
    let bars = document.getElementsByClassName("bar");
 
    for (let i = 0; i < n1; i++) L[i] = array[l + i];
    for (let j = 0; j < n2; j++) R[j] = array[m + 1 + j];
 
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        bars[l + i].style.backgroundColor = "#494EE5"; // Left sub-array element
        bars[m + 1 + j].style.backgroundColor = "#494EE5"; // Right sub-array element
        await sleep(speed);
 
        if (L[i] <= R[j]) {
            array[k] = L[i];
            bars[k].style.height = array[k] * 10 + "px";
            bars[k].style.backgroundColor = "#4AA8F2"; // Merged color
            await sleep(speed);
            i++;
        } else {
            array[k] = R[j];
            bars[k].style.height = array[k] * 10 + "px";
            bars[k].style.backgroundColor = "#4AA8F2"; // Merged color
            await sleep(speed);
            j++;
        }
 
        if (i < n1) bars[l + i].style.backgroundColor = "black"; 
        if (j < n2) bars[m + 1 + j].style.backgroundColor = "black"; 
        k++;
    }
    while (i < n1) {
        array[k] = L[i];
        bars[k].style.height = array[k] * 10 + "px";
        bars[k].style.backgroundColor = "#4AA8F2"; // Merged color
        await sleep(speed);
        i++;
        k++;
    }
    while (j < n2) {
        array[k] = R[j];
        bars[k].style.height = array[k] * 10 + "px";
        bars[k].style.backgroundColor = "#4AA8F2"; // Merged color
        await sleep(speed);
        j++;
        k++;
    }
  }

  const quickSort = async (array, low = 0, high = array.length - 1) => {
    if (low < high) {
      let pi = await partition(array, low, high);
      await quickSort(array, low, pi - 1);
      await quickSort(array, pi + 1, high);
  }
}
  const partition = async (array, low, high)=> {
    let pivot = array[high];
    let i = low - 1;
    let bars = document.getElementsByClassName("bar");

    // Highlight the pivot element
    bars[high].style.backgroundColor = "#1381f2";
    await sleep(speed);

    for (let j = low; j < high; j++) {
        // Highlight the current element being compared
        bars[j].style.backgroundColor = "black";
        await sleep(speed);

        if (array[j] < pivot) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            bars[i].style.height = array[i] * 10 + "px";
            bars[j].style.height = array[j] * 10 + "px";

            bars[i].style.backgroundColor = "black"; // First swapped element
            bars[j].style.backgroundColor = "#494EE5"; // Second swapped element
            await sleep(speed);

            // Reset the color of the swapped elements
            bars[i].style.backgroundColor = "#4AA8F2";
            bars[j].style.backgroundColor = "#4AA8F2";
        }

        // Reset the color of the compared element
        bars[j].style.backgroundColor = "#4AA8F2";
    }

    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    bars[i + 1].style.height = array[i + 1] * 10 + "px";
    bars[high].style.height = array[high] * 10 + "px";

    await sleep(speed);

    bars[i + 1].style.backgroundColor = "#4AA8F2"; // Reset the color of the pivot in its new position
    bars[high].style.backgroundColor = "#4AA8F2"; // Reset the color of the original pivot position

    return i + 1;
  }
  const getCodeSnippet = (algorithm) => {
    switch (algorithm) {
      case 'bubble':
        return `
void BubbleSort(vector<int>array){
      for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j]) > array[j + 1])) {
            swap(array[j], array[j+1]);
          }
      }
    }
  }
  `;
  
      case 'selection':
        return `
void SelectionSort(vector<int>array){
      for (let i = 0; i < array.length - 1; i++) {
          int minIdx = i;
          for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
              minIdx = j;
            } 
        }
        if (minIdx !== i) {
            swap(array[minIdx], array[i]);
        }
}
`;
  
      case 'merge':
        return `
      void MergeSort(vector<int>array, int l, int r){
            if (l >= r) return;
            int m = l +((r - l) / 2);
            mergeSort(array, l, m);
            mergeSort(array, m + 1, r);
            merge(array, l, m, r);
      };
        
      void merge(vector<int>array, int left, int right, int mid){
          int n1 = mid - left + 1;
          int n2 = right - mid;
          vector<int> L(n1);
          vector<int> R(n2);
          for (let i = 0; i < n1; i++) L[i] = array[left + i];
          for (let j = 0; j < n2; j++) R[j] = array[mid + 1 + j];
          int i = 0, j = 0, k = left;
          while (i < n1 && j < n2) {;
            if (L[i] <= R[j]) {
                array[k] = L[i];
                i++;
            }
            else {
                array[k] = R[j];
                j++;
            }
            k++;
          }
          while (i < n1) {
              array[k] = L[i];
              i++;
              k++;
          }
          while (j < n2) {
              array[k] = R[j];
              j++;
              k++;
          }
      }
      `;
  
      case 'quick':
        return `
      void QuickSort(vector <int> array, int low, int high){
          if (low < high) {
            int pi = partition(array, low, high);
            quickSort(array, low, pi - 1);
            quickSort(array, pi + 1, high);
         }
       };
        
      int partition (vector <int> array, int low, int high) => {
          int pivot = array[high];
          int i = low - 1;
          for (int j = low; j < high; j++) {
            if (array[j] < pivot) {
              i++;
              swap(array[i], array[j]);
            }
            j++;
          }
          swap(array[i + 1],array[high]);
          return i + 1;
      }
      `;
  
        default:
          return '';
    }
  };
  

  const handleSort = async (sortType) => {
    setSelectedAlgorithm(sortType);
    let sortedArray;
    switch (sortType) {
      case 'bubble':
        sortedArray = await bubbleSort([...unsortedArray]);
        break;
      case 'selection':
        sortedArray = await selectionSort([...unsortedArray]);
        break;
      case 'merge':
        sortedArray = await mergeSort([...unsortedArray]);
        break;
      case 'quick':
        sortedArray = await quickSort([...unsortedArray]);
        break;
      default:
        break;
    }
    console.log(sortedArray);
  };

  return (
    <div>
      <div className="navbar1">
        <Link to="/">HOME</Link>
        <Link to="./">Arrays</Link>
        <Link to="/trees">Trees</Link>
        <Link to="/graphs">Graphs</Link>
        <Link to="/backtracking">Backtracking</Link>
      </div>
    <div className="container">
        <div className="name">
          <h1>Array Sorting Algorithms</h1>
        </div>
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
