import { Stack } from "./implement-stacks-using-arr.mjs";

function balancedParanthesis(stack) {
  let openingBrackets = ["(", "{", "["];
  let closingBrackets = [")", "}", "]"];
  let stackArr = [];

  for (let i = 0; i < stack.size; i++) {
    let bracket = stack.items[i];

    if (openingBrackets.includes(bracket)) {
      stackArr.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      let lastOpeningBracket = stackArr.pop();

      if (
        openingBrackets.indexOf(lastOpeningBracket) !==
        closingBrackets.indexOf(bracket)
      ) {
        return "unbalanced";
      }
    }
  }

  return stackArr.length === 0 ? "balanced" : "unbalanced";
}

let stack = new Stack();

stack.push("[");
stack.push("]");
stack.push("(");
stack.push("(");
stack.push(")");
stack.push(")");
stack.push("{");
stack.push("}");
// stack.push("}");

const result = balancedParanthesis(stack);
console.log(result);
