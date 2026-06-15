class LNode<T> {
  public data: T;
  public next: LNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class LinkedList<T> {
  private head: LNode<T> | null = null;
  private count = 0;

  push(item: T) {
    const newNode = new LNode<T>(item);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) current = current.next;
      current.next = newNode;
    }

    this.count++;
  }

  remove(item: T) {
    if (this.count === 0) return;

    if (this.head?.data === item) {
      this.head = this.head.next;
      this.count--;
      return;
    }

    let current = this.head;
    while (current?.next !== null && current?.next.data !== item) {
      current = current?.next;
    }

    current.next = current?.next?.next;
    this.count--;
  }
}

const myLL = new LinkedList<string>()

myLL.append("Oscar")
myLL.append("da")
myLL.append("Silva")
console.log(myLL)

myLL.remove("da")
console.log(myLL)