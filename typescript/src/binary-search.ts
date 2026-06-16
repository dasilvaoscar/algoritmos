function binarySearch(orderedArray: number[], target: number): boolean {
  const middle = Math.round(orderedArray.length / 2)
  const currentNumber = orderedArray[middle]!
  if (currentNumber !== target && orderedArray.length === 1) return false
  if (currentNumber === target) return true
  if (target > currentNumber) 
    return binarySearch(orderedArray.slice(middle), target)
  else 
    return binarySearch(orderedArray.slice(0, middle), target)
}

const data = [20, 30, 76, 23234, 355, 22, 4631]
const target = 3555
const result = binarySearch(data, target)

console.log(`Elemento ${result ? "foi" : 'não foi'} encontrado`)