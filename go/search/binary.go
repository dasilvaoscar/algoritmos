package search

func BoubleSearch(array []int, searchNumber int, counter *int) int {
	*counter++

	if len(array) == 1 {
		return array[0]
	}

	left := array[:len(array) / 2]
	right := array[len(array) / 2:]

	if left[len(left)-1] >= searchNumber {
		return BoubleSearch(left, searchNumber, counter)
	}
	
	return BoubleSearch(right, searchNumber, counter)
}
