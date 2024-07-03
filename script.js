let randomizearr = document.getElementById("randomize_arr_btn");
let sortb = document.getElementById("bubble_button");
let bars_container = document.getElementById("bars_container");
let minrange = 1;
let maxrange = 30;
let barcount = 20;
let unsortedarr = new Array(barcount);

function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createrandomarr() {
    for (let i = 0; i < barcount; i++) {
        unsortedarr[i] = randomnum(minrange, maxrange);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createrandomarr();
    renderbars(unsortedarr);
});

function renderbars(array) {
    bars_container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * 10 + "px";
        bars_container.appendChild(bar);
    }
}

randomizearr.addEventListener("click", function () {
    createrandomarr();
    renderbars(unsortedarr);
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
let speed = 100;
document.getElementById('speed-slider').addEventListener('input', function() {
    speed = 400 - this.value; 
});

document.querySelectorAll(".speed-btn").forEach((button, index) => {
    button.addEventListener("click", function () {
        setSpeed(index + 1);
        document.querySelectorAll(".speed-btn").forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

// Bubble Sort
// async function bubblesort(array) {
//     let bars = document.getElementsByClassName("bar");
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 for (let k = 0; k < bars.length; k++) {
//                     if (k !== j && k !== j + 1) {
//                         bars[k].style.backgroundColor = "#141444";
//                     }
//                 }
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//                 bars[j].style.height = array[j] * 10 + "px";
//                 bars[j].style.backgroundColor = "#F1F2F7";
//                // bars[j].innerText = array[j];
//                 bars[j + 1].style.height = array[j + 1] * 10 + "px";
//                 bars[j + 1].style.backgroundColor = "#D5E8E8";
//                 //bars[j + 1].innerText = array[j + 1];
//                 await sleep(10);
//             }   
//         }
//         await sleep(speed);
//     }
//     return array;
// }

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubblesort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Set the color for the current pair of bars being compared
            bars[j].style.backgroundColor = "#4AA8F2";
            bars[j + 1].style.backgroundColor = "#4AA8F2";
            
            if (array[j] > array[j + 1]) {
                // Swap the bars
                swap(array[j], array[j + 1]);
                // Update the heights and colors to denote the swap
                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundColor = "#494EE5";
                bars[j + 1].style.height = array[j + 1] * 10 + "px";
                bars[j + 1].style.backgroundColor = "#494EE5";
                
                await sleep(speed);
            }
            
            // Reset the colors of the bars back to the default after comparison
            for (let k = 0; k < bars.length; k++) {
                if (k !== j && k !== j + 1) {
                    bars[k].style.backgroundColor = "#141444";
                }
            }
        }
    }
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "#141444";
    }
    
    return array;
}


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(array, speed) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Color the current pair of bars being compared
            bars[j].style.backgroundColor = "#E8BCB9";
            bars[j + 1].style.backgroundColor = "#E8BCB9";
            
            if (array[j] > array[j + 1]) {
                // Swap the bars
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                
                // Update the heights and colors to denote the swap
                bars[j].style.height = array[j] * 10 + "px";
                bars[j + 1].style.height = array[j + 1] * 10 + "px";
                bars[j].style.backgroundColor = "#FFA586";
                bars[j + 1].style.backgroundColor = "#FFA586";
                
                await sleep(speed);
            }
            
            // Revert the colors back to the original for all bars that are not the current pair
            for (let k = 0; k < bars.length; k++) {
                if (k !== j && k !== j + 1) {
                    bars[k].style.backgroundColor = "#662549";
                }
            }
        }
        // Ensure the last sorted bar is set to the final color
        bars[array.length - i - 1].style.backgroundColor = "#662549";
        await sleep(speed);
    }
    
    // Ensure all bars are set to the final color after sorting is complete
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "#662549";
    }

    return array;
}


// Quick Sort
async function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let pi = await partition(array, low, high);
        await quickSort(array, low, pi - 1);
        await quickSort(array, pi + 1, high);
    }
}

async function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;
    let bars = document.getElementsByClassName("bar");

    // Highlight the pivot element
    bars[high].style.backgroundColor = "#FF6347";
    await sleep(speed);

    for (let j = low; j < high; j++) {
        // Highlight the current element being compared
        // bars[j].style.backgroundColor = "#FFD700";
        await sleep(speed);

        if (array[j] < pivot) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            bars[i].style.height = array[i] * 10 + "px";
            bars[j].style.height = array[j] * 10 + "px";

            bars[i].style.backgroundColor = "#FFD700"; // First swapped element
            bars[j].style.backgroundColor = "#1E90FF"; // Second swapped element
            await sleep(speed);

            // Reset the color of the swapped elements
            bars[i].style.backgroundColor = "#E8BCB9";
            bars[j].style.backgroundColor = "#E8BCB9";
        }

        // Reset the color of the compared element
        bars[j].style.backgroundColor = "#E8BCB9";
    }

    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    bars[i + 1].style.height = array[i + 1] * 10 + "px";
    bars[high].style.height = array[high] * 10 + "px";

    await sleep(speed);

    bars[i + 1].style.backgroundColor = "#E8BCB9"; // Reset the color of the pivot in its new position
    bars[high].style.backgroundColor = "#E8BCB9"; // Reset the color of the original pivot position

    return i + 1;
}




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



// Merge Sort
async function mergeSort(array, l = 0, r = array.length - 1) {
    if (l >= r) return;
    let m = l + Math.floor((r - l) / 2);
    await mergeSort(array, l, m);
    await mergeSort(array, m + 1, r);
    await merge(array, l, m, r);
}
async function merge(array, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);
    let bars = document.getElementsByClassName("bar");

    for (let i = 0; i < n1; i++) L[i] = array[l + i];
    for (let j = 0; j < n2; j++) R[j] = array[m + 1 + j];

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        bars[l + i].style.backgroundColor = "#E8BCB9"; // Left sub-array element
        bars[m + 1 + j].style.backgroundColor = "#E8BCB9"; // Right sub-array element
        await sleep(speed);

        if (L[i] <= R[j]) {
            array[k] = L[i];
            bars[k].style.height = array[k] * 10 + "px";
            bars[k].style.backgroundColor = "#662549"; // Merged color
            await sleep(speed);
            i++;
        } else {
            array[k] = R[j];
            bars[k].style.height = array[k] * 10 + "px";
            bars[k].style.backgroundColor = "#662549"; // Merged color
            await sleep(speed);
            j++;
        }

        if (i < n1) bars[l + i].style.backgroundColor = "#FFA586"; 
        if (j < n2) bars[m + 1 + j].style.backgroundColor = "#FFA586"; 
        k++;
    }
    while (i < n1) {
        array[k] = L[i];
        bars[k].style.height = array[k] * 10 + "px";
        bars[k].style.backgroundColor = "#662549"; // Merged color
        await sleep(speed);
        i++;
        k++;
    }
    while (j < n2) {
        array[k] = R[j];
        bars[k].style.height = array[k] * 10 + "px";
        bars[k].style.backgroundColor = "#662549"; // Merged color
        await sleep(speed);
        j++;
        k++;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Selection Sort
async function selectionSort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        bars[i].style.backgroundColor = "#FFA586";

        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.backgroundColor = "#FFDDC1";

            if (array[j] < array[minIdx]) {
                if (minIdx !== i) {
                    bars[minIdx].style.backgroundColor = "#E8BCB9";
                }
                minIdx = j;
                bars[minIdx].style.backgroundColor = "#662549";
            } else {
                bars[j].style.backgroundColor = "#E8BCB9";
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

        bars[i].style.backgroundColor = "#B78333";
        if (minIdx !== i) {
            bars[minIdx].style.backgroundColor = "#E8BCB9";
        }

        await sleep(speed);
    }
    for (let k = 0; k < array.length; k++) {
        bars[k].style.backgroundColor = "#E8BCB9";
    }
}


sortb.addEventListener("click", async function () {
    let sorted_arr = await bubblesort([...unsortedarr]);
    console.log(sorted_arr);
});

document.getElementById("quick_button").addEventListener("click", async function () {
    let sorted_arr = await quickSort([...unsortedarr]);
    console.log(sorted_arr);
});

document.getElementById("merge_button").addEventListener("click", async function () {
    let sorted_arr = await mergeSort([...unsortedarr]);
    console.log(sorted_arr);
});

document.getElementById("select_button").addEventListener("click", async function () {
    let sorted_arr = await selectionSort([...unsortedarr]);
    console.log(sorted_arr);
});
