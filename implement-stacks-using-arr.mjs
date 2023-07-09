export class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(element) {
    this.items.push(element);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return "Underflow!";

    let item = this.items.pop();
    this.size--;

    return item;
  }

  top() {
    if (this.isEmpty()) return "Stack is empty!";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

let stack = new Stack();

/*
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack);
*/
