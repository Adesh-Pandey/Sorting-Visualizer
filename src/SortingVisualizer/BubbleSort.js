function getBubbleSortAnimations(array) {
  const elements = document.getElementsByClassName("array-bar");

  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let constElem = elements[j];
      let secElem = elements[j + 1];
      setTimeout(() => {
        if (array[j] > array[j + 1]) {
          let tmp = array[j];

          array[j] = array[j + 1];
          array[j + 1] = tmp;
          constElem.style.height = `${array[j]}px`;
          secElem.style.height = `${array[j + 1]}px`;
        }
      });
    }
  }
}

export default getBubbleSortAnimations;
