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

  search(target, newData = [...this.data]) {
    newData.sort((a, b) => a - b)
    const currentIndex = Math.ceil(newData.length / 2) - 1
    const middleItem = newData[currentIndex]
    if (middleItem === target) return middleItem
    if (target > middleItem) return this.search(target, newData.slice(currentIndex + 1))
    return this.search(target, newData.slice(0, currentIndex))
  }
}

// TESTE 1

// const myStack = new Stack([1])

// console.log(myStack)

// myStack.push(2)
// console.log(myStack)

// myStack.pop()
// console.log(myStack)

// myStack.push([1, 22, 3])
// console.log(myStack)

// console.log(myStack.indexOf(22))

// TESTE 2

const myStack = new Stack([1])
console.log(myStack)

myStack.push(2)
myStack.push(3)
console.log(myStack)

console.log(myStack.search(3))