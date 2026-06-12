package structures

type Queue[T any] struct {
	data []T
}

func (queue *Queue[T]) Enqueue(value T) *Queue[T] {
	queue.data = append(queue.data, value)
	return queue
}

func (queue *Queue[T]) Queues() *[]T {
	return &queue.data
}
