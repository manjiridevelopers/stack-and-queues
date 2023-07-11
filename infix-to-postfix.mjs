import { Stack } from "./implement-stacks-using-arr.mjs";

function precedenceCalc(char) {
  if (char == "^") {
    return 3;
  } else if (char == "*" || char == "/") {
    return 2;
  } else if (char == "+" || char == "-") {
    return 1;
  }
}

function infixToPostfix(str) {
  let stack = new Stack();
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      result.push(char);
    } else if (char == "(") {
      stack.push(char);
    } else if (char == ")") {
      while (stack.top() != "(") {
        result.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        !stack.isEmpty() &&
        precedenceCalc(char) <= precedenceCalc(stack.top())
      ) {
        result.push(stack.pop());
      }
      stack.push(char);
    }
  }

  while (!stack.isEmpty()) {
    result.push(stack.pop());
  }

  return result.join("");
}

const result = infixToPostfix("(p+q)*(m-n)");
console.log(result);
