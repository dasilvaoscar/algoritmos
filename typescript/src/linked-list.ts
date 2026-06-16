class LNode<T> {
  public data: T;
  public next: LNode<T> | null = null;
  public index: number = 0

  constructor(data: T, index: number) {
    this.data = data;
    this.index = index
  }
}

export class LinkedList<T> {
  private head: LNode<T> | null = null;
  private count = 0;

  get length() {
    return this.count
  }

  push(item: T) {
    this.recursivePush(this.head!, item)
  } 

  recursivePush(node: LNode<T>, item: T) {
    const newNode = new LNode<T>(item, this.count);

    if (this.head === null) {
      this.count++;
      this.head = newNode;
      return
    } 

    if (node?.next === null) {
      this.count++;
      node.next = newNode
      return
    }

    this.recursivePush(node?.next, item)
  }

  remove(item: T) {
    this.recursiveRemove(this.head!, item)
  }

  private recursiveRemove(node: LNode<T>, item: T) {
    if (this.count === 0) return;

    if (node?.data === item) {
      this.head = node?.next;
      this.count--;
      return;
    }

    if (node.data !== item) {
      this.recursiveRemove(node.next!, item)
    }
  }

  indexOf(data: T): number {
    return this.recursiveIndexOf(this.head!, data)!
  }

  private recursiveIndexOf(node: LNode<T>, value: T): number | undefined {
    if (this.count === 0) return
    if (node?.data === value) return node?.index!
    if (node.next !== null) return this.recursiveIndexOf(node?.next!, value)!
    return
  }
}
