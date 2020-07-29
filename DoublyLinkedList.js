class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head ? false : true;
  }

  firstNode(value) {
    const newNode = new Node(value, this.head, null);
    this.head = newNode;
  }

  findNode(index) {
    let indexNode = this.head;
    for (let i = 0; i < index; i++) {
      if (indexNode === null) {
        return false;
      }
      indexNode = indexNode.next;
    }
    return indexNode;
  }

  prepend(value) {
    if (this.head === null) {
      this.firstNode(value);
      return;
    }
    const curNode = this.head;
    const newNode = new Node(value, null, null);
    curNode.prev = newNode;
    this.head = newNode;
    newNode.prev = this.head;
    newNode.next = curNode;
  }

  append(value) {
    if (this.head === null) {
      this.firstNode(value);
      return;
    }
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    const newNode = new Node(value, lastNode, null);
    lastNode.next = newNode;

  }

  setHead(index) {
    let indexNode = this.findNode(index);
    if (indexNode === false) return false;
    this.head = indexNode;
    indexNode.prev = this.head;
  }

  access(index) {
    let indexNode = this.findNode(index);
    if (indexNode === false) return false;
    console.log(indexNode.value);
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let indexNode = this.findNode(index);
    const newNode = new Node(value, indexNode, indexNode.next);
    indexNode.next.prev = newNode;
    indexNode.next = newNode;
  }

  remove(index) {
    let indexNode = this.findNode(index);
    if (indexNode === false) return false;
    indexNode.prev.next = indexNode.next;
    indexNode.next.prev = indexNode.prev;
  }

  print() {
    let node = this.head;

    while (node.next !== null) {
      console.log(node.value);
      node = node.next;
    }
    console.log(node.value);
  }
}