class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var nodeToInsert = new Node(val);
    if (this.root == null) {
      this.root = nodeToInsert;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val == current.value) {
          return undefined;
        }
        if (val < current.value) {
          if (current.left == null) {
            current.left = nodeToInsert;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (val > current.value) {
            if (current.right == null) {
              current.right = nodeToInsert;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }
  find(val) {
    if (this.root == null) {
      return false;
    }
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (val == current.value) {
        found = true;
      } else if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      }
    }
    return found;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9);
