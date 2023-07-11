import { Stack } from "./implement-stacks-using-arr.mjs";

let stack1 = new Stack();
let minStack = new Stack();

class MinStack {
  constructor(stack1, minStack) {
    this.stack = stack1;
    this.minStack = minStack;
  }

  push(element) {
    let min = this.minStack.top();
    if (element < min || min == "Stack is empty!") this.minStack.push(element);
    this.stack.push(element);
  }

  pop() {
    let element = this.stack.pop();
    if (element == this.minStack.top()) this.minStack.pop();
  }

  top() {
    let stackEl = this.stack.top();
    let minStackEl = this.minStack.top();

    return {
      stackEl,
      minStackEl,
    };
  }

  isEmpty() {
    return this.stack.isEmpty();
  }
}

let stack = new MinStack(stack1, minStack);

stack.push(18);
stack.push(19);
stack.push(29);
stack.push(15);
stack.push(16);

stack.pop();
stack.pop();

console.log(stack.top());
