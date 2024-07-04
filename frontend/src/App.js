import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <h1>ALGO VISUALIZER</h1>
    </div>
  );
}
/*   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   GIT TOKEN */
export default App;
