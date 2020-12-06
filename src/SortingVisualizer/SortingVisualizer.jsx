import React, { useEffect } from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from "./MergeSort.js";
import getBubbleSortAnimations from "./BubbleSort";
const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOR = "whitesmoke";
const SECONDARY_COLOR = "black";

function SortingVisualizer() {
  function disable() {
    let btnCollection = document.querySelectorAll("button");
    for (let k = 0; k < btnCollection.length; k++) {
      btnCollection[k].setAttribute("disabled", "true");
    }
  }
  function enable() {
    let btnCollection = document.querySelectorAll("button");
    for (let k = 0; k < btnCollection.length; k++) {
      btnCollection[k].removeAttribute("disabled");
    }
  }
  function resetArray() {
    const array = [];
    for (let k = 0; k < NUMBER_OF_ARRAY_BARS; k++) {
      array.push(getRandomNumberBetween(5, 500));
    }

    setmainArray(array);
  }
  useEffect(() => {
    resetArray();
  }, []);
  const [mainArray, setmainArray] = React.useState([]);

  function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function MergeSort() {
    const animations = getMergeSortAnimations(mainArray);
    const arrayBars = document.getElementsByClassName("array-bar");
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
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  function BubbleSort() {
    getBubbleSortAnimations(mainArray);
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
            -
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
                setTimeout(() => {
                  enable();
                }, 8000);
              }}
            >
              Merge Sort
            </button>
            <button
              onClick={() => {
                disable();
                BubbleSort(mainArray);
                setTimeout(() => {
                  enable();
                }, 2500);
              }}
            >
              Bubble Sort
            </button>
            -
          </div>
          <div className="visualizer__authur">
            Created By-<span className="name">Adesh Pandey</span>
          </div>
        </nav>

        <div className="graphBars">
          {mainArray.map((value, id) => (
            <div
              style={{ height: `${value}px` }}
              className="array-bar"
              key={id}
            ></div>
          ))}
        </div>
      </div>
      <div className="warning">
        Please Use a device With display of 700px or higher
      </div>
    </div>
  );
}

export default SortingVisualizer;
