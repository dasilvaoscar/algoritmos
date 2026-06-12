class Stack {
  constructor(initial) {
    if (!initial.length) throw new Error("Not an acceptable data type")
    this.data = initial
  }

  push(data) {
    if (data.length) this.data = [...data, ...this.data]
    else this.data = [data, ...this.data]
  }

  pop() {
    if (this.data.length > 0) this.data = this.data.slice(1)
  }
}

const myStack = new Stack([1])

console.log(myStack)

myStack.push(2)
console.log(myStack)

myStack.pop()
console.log(myStack)

myStack.push([1, 22, 3])
console.log(myStack)


