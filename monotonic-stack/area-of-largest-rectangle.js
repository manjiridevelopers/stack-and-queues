/* Brute Force Approach */

function areaOfLargestRectangle(arr) {
  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = Infinity;
    for (let j = i; j < arr.length; j++) {
      min = Math.min(arr[j], min);
      maxArea = Math.max(maxArea, min * (j - i + 1));
    }
  }

  return maxArea;
}

const result = areaOfLargestRectangle([2, 1, 5, 6, 2, 3]);
console.log(result);
