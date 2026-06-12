package utils

func GenerateSortedArray(size int) []int {
	array := make([]int, size)

	for i := 0; i < size; i++ {
		array[i] = i + 1
	}

	return array
}
