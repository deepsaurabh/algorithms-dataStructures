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
  BFS() {
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9);
