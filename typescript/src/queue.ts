class Queue<T> {
  private items = new Array()
  private counter = 0

  constructor(items: Array<T>) {
    this.items = items
    this.counter = items.length
  }

  get length() {
    return this.counter
  }

  push(item: T) {
    if (this.counter === 0) this.items = [item]
    else this.items = [...this.items, item]
    this.counter++
  }

  pop() {
    if (this.counter > 0) {
      this.items = this.items.slice(1)
      this.counter--
    }
  }
}

const myQueue = new Queue<number>([1, 2, 3]);
console.log(myQueue)

myQueue.push(4)
console.log(myQueue)

myQueue.pop()
console.log(myQueue)

myQueue.pop()
console.log(myQueue)

myQueue.pop()
console.log(myQueue)

myQueue.pop()
console.log(myQueue)

console.log(myQueue.length)