function getBubbleSortAnimations(array) {
  let len = array.length;
  let animations = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j, array[j + 1], j + 1, array[j]]);
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      } else {
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j, array[j]]);
      }
    }
  }
  return animations;
}

export default getBubbleSortAnimations;
