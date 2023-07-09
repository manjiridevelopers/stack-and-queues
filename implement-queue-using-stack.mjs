import { Stack } from "./implement-stacks-using-arr.mjs";

const stack1 = new Stack();
const stack2 = new Stack();

class Queue extends Stack {
  constructor(stack1, stack2) {
    super();
    this.stack1 = stack1;
    this.stack2 = stack2;
  }

  enqueue(element) {
    let stack1 = this.stack1;
    let stack2 = this.stack2;
    let i = 0;

    while (!stack1.isEmpty()) {
      stack2.items.push(stack1.pop());
    }

    stack1.items.push(element);
    i = 0;

    while (!stack2.isEmpty()) {
      stack1.items.push(stack2.pop());
    }
  }

  dequeue() {
    return stack1.pop();
  }

  isEmpty() {
    return stack1.isEmpty();
  }

  front() {
    return stack1.top();
  }

  sizeOfQueue() {
    return this.stack1.items.length;
  }

  print() {
    let arr = [];
    this.stack1.items.forEach((element) => {
      arr.push(element);
    });
    console.log(arr.join(" -> "));
  }
}

const queue = new Queue(stack1, stack2);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();

console.log(queue.front());
console.log(queue.sizeOfQueue());
