import './App.css';
import React, { useEffect, useState } from "react";
import ArraysPage from './pages/arraysPage';

function App() {
  const [unsortedArray, setUnsortedArray] = useState([]);
  const [speed, setSpeed] = useState(900);

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
    bars[0].style.backgroundColor = 'green';
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
        }
        else {
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

  
// Merge Sort
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
    const handleSort = async (sortType) => {
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
      <div className="App">
        <ArraysPage
          handleSort={handleSort}
          generateRandomArray={generateRandomArray}
          setSpeed={setSpeed}
          speed={speed}
        />
        <div id="bars_container"></div>
      </div>
    );
  }


export default App;
