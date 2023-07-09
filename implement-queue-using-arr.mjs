export class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow!";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "No Items!";

    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

let queue = new Queue();

/*
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();

console.log(queue);
*/
