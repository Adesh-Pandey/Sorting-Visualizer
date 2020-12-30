import React, { useEffect, useState } from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from "./MergeSort.js";
import getBubbleSortAnimations from "./BubbleSort";
import getInsertionSortAnimation from "./InsertionSort";
import getShellSortAnimations from "./ShellSort.js";
import getSelectionSortAnimations from "./SelectionSort.js";
const PRIMARY_COLOR = "whitesmoke";
const SECONDARY_COLOR = "red";
const arrayBars = document.getElementsByClassName("array-bar");

function SortingVisualizer() {
  const [Bars, setBars] = React.useState(80);
  const [ANIMATION_SPEED_MS, setANIMATION_SPEED_MS] = useState(0);
  const [mainArray, setmainArray] = React.useState([]);
  useEffect(() => {
    resetArray();
  }, [Bars]);

  function colorOrChange(animations, ANIMATION_SPEED_MS) {
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, f(i) * ANIMATION_SPEED_MS);
      } else {
        const [index, newHeight] = animations[i];
        setTimeout(() => {
          arrayBars[index].style.height = `${newHeight}px`;
          if (Bars < 10) {
            arrayBars[index].innerHTML = `${newHeight}`;
          }
        }, f(i) * ANIMATION_SPEED_MS);
      }
    }
  }
  function f(i) {
    return i * 487 * ((1 / 40) ** (1 / 75)) ** (Bars - 1);
  }

  // function ff() {
  //   if (Bars < 10) {
  //     return 400;
  //   } else if (Bars < 20) {

  //   } else if (Bars < 30) {
  //     return 200;
  //   } else if (Bars < 40) {
  //     return 98;
  //   } else if (Bars < 50) {
  //     return 31;
  //   } else if (Bars < 60) {
  //     return 20;
  //   } else if (Bars < 70) {
  //     return 15;
  //   }

  //   return 10;
  // }
  function Resize() {
    for (let k = 0; k < arrayBars.length; k++) {
      arrayBars[k].style.width = `${Math.floor(700 / Bars)}px`;
    }
  }
  function disable() {
    let btnCollection = document.querySelectorAll("button");
    for (let k = 0; k < btnCollection.length; k++) {
      btnCollection[k].setAttribute("disabled", "true");
    }
    document.getElementById("myrange").setAttribute("disabled", "true");
  }
  function enable() {
    let btnCollection = document.querySelectorAll("button");
    for (let k = 0; k < btnCollection.length; k++) {
      btnCollection[k].removeAttribute("disabled");
    }
    document.getElementById("myrange").removeAttribute("disabled");
  }
  function resetArray() {
    setANIMATION_SPEED_MS(2);
    const array = [];
    for (let k = 0; k < Bars; k++) {
      array.push(getRandomNumberBetween(5, 500));
    }
    setmainArray(array);
    Resize();
  }
  function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function MergeSort() {
    const animations = getMergeSortAnimations(mainArray);
    colorOrChange(animations, ANIMATION_SPEED_MS);
  }
  function BubbleSort() {
    const animations = getBubbleSortAnimations(mainArray);

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, f(i));
      } else {
        if (animations[i].length === 4) {
          const [index, newHeight, Sindx, SnewHeight] = animations[i];
          setTimeout(() => {
            arrayBars[index].style.height = `${newHeight}px`;
            arrayBars[Sindx].style.height = `${SnewHeight}px`;
            if (Bars < 10) {
              arrayBars[Sindx].innerHTML = `${SnewHeight}`;
              arrayBars[index].innerHTML = `${newHeight}`;
            }
          }, f(i));
        }
      }
    }
  }

  function InsertionSort() {
    const animations = getInsertionSortAnimation(mainArray);
    colorOrChange(animations, ANIMATION_SPEED_MS * 0.5);
  }

  function ShellSort() {
    const animations = getShellSortAnimations(mainArray);
    colorOrChange(animations, ANIMATION_SPEED_MS);
  }
  function SelectionSort() {
    const animations = getSelectionSortAnimations(mainArray);
    // colorOrChange(animations,ANIMATION_SPEED_MS*0.5)
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, f(i) * 0.5);
      } else {
        const [index, newHeight] = animations[i];
        setTimeout(() => {
          arrayBars[index].style.height = `${newHeight}px`;
          if (Bars < 10) {
            arrayBars[index].innerHTML = `${newHeight}`;
          }
        }, f(i) * 0.5);
      }
    }
  }
  return (
    <div>
      <div className="visualizer">
        <nav className="visualizer__nav">
          <div className="visualizer__nav__title">
            <span>SORTING </span>
            <span>Algorithm</span>
          </div>
          <div className="visualizer__buttonCollection">
            <button
              onClick={() => {
                resetArray();
              }}
            >
              Generate New Graph
            </button>
            <button
              onClick={() => {
                disable();
                MergeSort();

                // setInterval(() => {
                enable();
                //   clearInterval();
                // },ff()*7000/(81-Bars));
              }}
            >
              Merge Sort
            </button>
            <button
              onClick={() => {
                BubbleSort(mainArray);
                // disable();
                // setTimeout(() => {
                //   enable();
                // }, 20000);
              }}
            >
              Bubble Sort
            </button>

            <button
              onClick={() => {
                InsertionSort();
                // disable();
                // setTimeout(() => {
                //   enable();
                // }, 37300*(Bars/80));
              }}
            >
              Insertion Sort
            </button>
            <button
              onClick={() => {
                ShellSort();
                // disable();
                // setTimeout(() => {
                //   enable();
                // }, 55600*f(1/100)*(Bars/80));
              }}
            >
              Shell Sort
            </button>
            <button
              onClick={() => {
                SelectionSort();
                // disable();
                // setTimeout(() => {
                //   enable();
                // }, 60000*(Bars/80));
              }}
            >
              Selection Sort
            </button>
          </div>
          <div className="visualizer__authur">
            Created By-<span className="name">Adesh Pandey</span>
          </div>
          <div className="slidecontainer">
            <input
              type="range"
              min="5"
              value={Bars}
              max="80"
              onChange={(e) => {
                setBars(e.target.value);
              }}
              id="myrange"
            />
            {Bars}
          </div>
        </nav>

        <div className="graphBars">
          {mainArray.map((Bar, id) => (
            <div
              style={{ height: `${Bar}px`, width: `${700 / Bars}px` }}
              className="array-bar"
              key={id}
            >
              {Bars < 10 ? Bar : ""}
            </div>
          ))}
        </div>
      </div>
      <div className="warning">
        Please Use a device With display of 350px or higher
      </div>
    </div>
  );
}

export default SortingVisualizer;
