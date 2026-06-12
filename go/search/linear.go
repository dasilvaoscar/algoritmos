package search

func LinearSearch(input []int, searchNumber int, counter *int) int {
	for _, value := range input {
		*counter++
		if value == searchNumber {
			return value
		}
	}

	return 0
}
