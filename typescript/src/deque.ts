// Double ended queue (Deque)

export class Deque<T> {
  private items: Array<T> = []
  private count: number = 0
  
  constructor(items: Array<T>) {
    this.items = items
    this.count = items.length
  }

  get length() {
    return this.count
  }

  get data() {
    return this.items
  }

  pushFront(item: T) {
    this.items = [item, ...this.items]
    this.count++
  }

  popFront() {
    this.items = this.items.slice(1)
    this.count--
  }

  pushBack(item: T) {
    this.items = [...this.items, item]
    this.count++
  }

  popBack() {
    this.items = this.items.slice(0, this.items.length - 1)
    this.count--
  }
}

const deque = new Deque<string>(["Oscar", "da"])
console.log('init', deque)

deque.pushBack("Silva")
console.log('pushBack', deque)

deque.popFront()
console.log('popFront', deque)

deque.pushFront("Oscar")
console.log('pushFront', deque)

deque.popBack()
console.log('popBack', deque)