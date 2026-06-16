class BNode {
  value: number | null = null;
  left: BNode | null = null;
  right: BNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class BinarySearchTree {
  private root: BNode | null = null;

  insert(value: number) {
    this.root = this.recursiveInsert(this.root!, value)!;
  }

  search(value: number): boolean {
    return this.recursiveSearch(this.root!, value)!;
  }

  private recursiveSearch(node: BNode, value: number): boolean {
    if (node?.value === value) return true;
    if (value > node?.value!) return this.recursiveSearch(node.right!, value);
    if (value < node?.value!) return this.recursiveSearch(node.left!, value);
    return false;
  }

  private recursiveInsert(node: BNode, value: number) {
    if (node === null) return new BNode(value);
    if (value < node.value!)
      node.left = this.recursiveInsert(node.left!, value)!;
    if (value > node.value!)
      node.right = this.recursiveInsert(node.right!, value)!;
    return node;
  }
}

const tree = new BinarySearchTree();

tree.insert(100);
tree.insert(200);
tree.insert(20);

tree.insert(300);
tree.insert(10);

console.log(`Elemento ${tree.search(10) ? "foi" : "não foi"} encontrado`);
