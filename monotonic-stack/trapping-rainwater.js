/* Brute Force Approach */

function maxLeftCalc(arr, i) {
  let left = i;
  let max = 0;

  while (left >= 0) {
    max = arr[left] >= max ? arr[left] : max;
    left--;
  }

  return max;
}

function maxRightCalc(arr, i) {
  let right = i;
  let max = 0;

  while (right < arr.length) {
    max = arr[right] >= max ? arr[right] : max;
    right++;
  }

  return max;
}

function trappingRainwater(arr) {
  let waterTrapped = 0;

  for (let i = 0; i < arr.length; i++) {
    let maxLeft = maxLeftCalc(arr, i);
    let maxRight = maxRightCalc(arr, i);

    let min = Math.min(maxLeft, maxRight);
    waterTrapped += min - arr[i] < 0 ? 0 : min - arr[i];
  }

  return waterTrapped;
}

const result = trappingRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(result);

/* 
 Prefix adnd Suffix Sum Technique:
 Time Complexity: O(3N);
 Space Complexity: O(N + N)
*/

function prefixMax(arr) {
  let prefixArr = new Array(arr.length).fill(0);
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    prefixArr[i] = max;
  }

  return prefixArr;
}

function suffixMax(arr) {
  let suffixArr = new Array(arr.length).fill(0);
  let max = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    max = Math.max(max, arr[i]);
    suffixArr[i] = max;
  }

  return suffixArr;
}

function trappingRainwaterBetter(arr) {
  let suffixArr = suffixMax(arr);
  let prefixArr = prefixMax(arr);
  let waterTrapped = 0;

  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(suffixArr[i], prefixArr[i]);
    waterTrapped += min - arr[i] < 0 ? 0 : min - arr[i];
  }

  return waterTrapped;
}

const resultBetter = trappingRainwaterBetter([
  0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1,
]);
console.log(resultBetter);

/* Two Pointer Solution */

function trappingRainwaterTwoPointer(arr) {
  let left = 0;
  let right = arr.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left <= right) {
    if (arr[left] <= arr[right]) {
      if (arr[left] < leftMax) {
        waterTrapped += leftMax - arr[left];
      } else {
        leftMax = arr[left];
      }
      left++;
    } else {
      if (arr[right] < rightMax) {
        waterTrapped += rightMax - arr[right];
      } else {
        rightMax = arr[right];
      }
      right--;
    }
  }

  return waterTrapped;
}

const resultTwoPointer = trappingRainwaterTwoPointer([
  0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1,
]);
console.log(resultTwoPointer);
