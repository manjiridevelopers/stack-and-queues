/* Note: This solution is normal array solution and not based on stack. */
function nextGreaterEl(stack) {
  let result = [];

  for (let i = 0; i < stack.length; i++) {
    let j = (i + 1) % stack.length;
    let nextGreater = -1;
    while (j < stack.length) {
      if (stack[j] > stack[i]) {
        nextGreater = stack[j];
        break;
      }
      j++;
    }
    result.push(nextGreater);
  }

  return result;
}

result = nextGreaterEl([3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9]);
console.log(result);

/* stack solution */

function nextGreaterElStack(stack) {
  let tempArr = [];
  let result = new Array(stack.length).fill(-1);
  let len = stack.length;

  for (let i = 2 * len - 1; i >= 0; i--) {
    while (
      tempArr.length !== 0 &&
      tempArr[tempArr.length - 1] <= stack[i % len]
    ) {
      tempArr.pop();
    }
    if (tempArr.length !== 0) {
      result[i % len] = tempArr[tempArr.length - 1];
    }
    tempArr.push(stack[i % len]);
  }

  return result;
}

const resultStack = nextGreaterElStack([3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9]);
console.log(resultStack);
