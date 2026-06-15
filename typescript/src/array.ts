class MyStupidArray<T> {
  private counter: number = 0;
  private items: Array<T> = new Array()

  constructor(items: Array<T>) {
    this.items = items
    this.counter = items.length
  }

  get length() {
    return this.counter;
  }

  push(item: T) {
    this.items.push(item);
    this.counter = this.counter + 1;
  }

  pop() {
    this.items.pop();
    this.counter = this.counter - 1;
  }
}

const myArray = new MyStupidArray<number>([1, 2, 3]);
console.log(myArray)

myArray.push(4)
console.log(myArray)

myArray.pop()
console.log(myArray)
console.log(myArray.length)

