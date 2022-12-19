class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      const prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    const node = new Node(value);
    if (index < 0 || index > this.size) {
      return -1;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("The List Is Empty");
    } else {
      let prev = this.head;
      let listedValue = "";
      while (prev) {
        listedValue += ` ${prev.value}`;
        prev = prev.next;
      }
      console.log(listedValue);
    }
  }
}
const newLinkedList = new LinkedList();
console.log(newLinkedList.size);
newLinkedList.prepend("1");
newLinkedList.prepend("2");
newLinkedList.prepend("3");
newLinkedList.prepend("4");
newLinkedList.insert("2", 0);

console.log(newLinkedList.size);
console.log(newLinkedList);
newLinkedList.print();
console.log(newLinkedList);
