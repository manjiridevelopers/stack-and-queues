import { Queue } from "./implement-queue-using-arr.mjs";

let queue1 = new Queue();
let queue2 = new Queue();

class Stack extends Queue {
  constructor(queue1, queue2) {
    super();
    this.queue1 = queue1;
    this.queue2 = queue2;
  }

  push(element) {
    let queue1 = this.queue1;
    let queue2 = this.queue2;

    let i = 0;

    while (!queue1.isEmpty()) {
      queue2.items.push(queue1.dequeue());
      i++;
    }

    queue1.items.push(element);

    i = 0;

    while (!queue2.isEmpty()) {
      queue1.items.push(queue2.dequeue());
      i++;
    }

    return queue1;
  }

  pop() {
    if (this.isEmpty()) return "Overflow!";
    this.queue1.dequeue();
  }

  isEmpty() {
    return this.queue1.isEmpty();
  }

  top() {
    return this.queue1.front();
  }

  sizeOfStack() {
    return this.queue1.items.length;
  }

  print() {
    let arr = [];
    this.queue1.items.forEach((element) => {
      arr.push(element);
    });
    console.log(arr.join(" <- "));
  }
}

let stack = new Stack(queue1, queue2);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();

console.log(stack.sizeOfStack());
