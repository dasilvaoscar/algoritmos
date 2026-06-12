package main

import (
	"algoritmos/search"
	"algoritmos/structures"
	"algoritmos/utils"
	"fmt"
	"time"
)

func main() {
	// ExecBinarySearch()
	// ExecLinearSearch()
	ExecFifo()
}

func ExecFifo() {
	queue := structures.Queue[int]{}

	queue.Enqueue(1).Enqueue(2)

	fmt.Println(queue.Queues())
}

func ExecBinarySearch() {
	counter := 0

	number := 500
	array1 := utils.GenerateSortedArray(511)

	start := time.Now()
	data := search.BoubleSearch(array1, number, &counter)
	elapsed := time.Since(start)

	fmt.Printf("Binary Search: Execution time: %s - Counter: %d\n", elapsed, counter)
	fmt.Printf("Number found: %d", data)
	fmt.Printf("\n\n")
}

func ExecLinearSearch() {
	counter := 0

	number := 500
	array1 := utils.GenerateSortedArray(511)

	start := time.Now()
	data := search.LinearSearch(array1, number, &counter)
	elapsed := time.Since(start)

	fmt.Printf("Linear Search: Execution time: %s - Counter: %d\n", elapsed, counter)
	fmt.Printf("Number found: %d", data)
	fmt.Printf("\n\n")
}
