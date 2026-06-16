import { LinkedList } from "./linked-list"

const myLL = new LinkedList<string>()

myLL.push("Oscar")
myLL.push("da")
myLL.push("Silva")
console.log(myLL)

myLL.remove("da")
console.log(myLL)
