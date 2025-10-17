class ListNode {
  value: any = null;
  nextNode: ListNode | null;
  constructor(value: any) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  head: ListNode | null;
  current: ListNode | null;
  constructor() {
    this.head = null;
    this.current = this.head;
  }

  /**
   * represents your LinkedList objects as strings
   * @returns string: ( value ) -> ( value ) -> ( value ) -> null
   */
  toString(): string {
    let nodes: any[] = [];
    let result: string;
    this.current = this.head;
    while (this.current != null) {
      nodes.push(this.current!.value);
      this.current = this.current!.nextNode;
    }

    return (result = nodes.map((item) => `(${item})`).join(" -> "));
  }

  /**
   * adds a new node containing value to the end of the list
   */
  append(value: any) {
    const node = new ListNode(value);

    // first node apped, head pointing on it
    if (this.head === null) {
      this.head = node;
      this.current = node;
      // second and any else new apped node will be adde on the end
    } else {
      this.current = this.head;
      while (this.current?.nextNode != null) {
        this.current = this.current.nextNode;
      }
      this.current!.nextNode = node;
    }
  }

  /**
   * adds a new node containing value to the start of the list
   */
  prepend(value: any) {
    const node = new ListNode(value);
    node.nextNode = this.head;
    this.head = node;
  }

  /**
   * @returns {number} Number of elements in the list starting wiht 0
   */
  size(): number {
    this.current = this.head;
    let count = 0;
    while (this.current != null) {
      count++;
      this.current = this.current.nextNode;
    }
    return count - 1;
  }

  getHead() {
    return this.head;
  }

  tail() {
    this.current = this.head;
    while (this.current?.nextNode != null) this.current = this.current.nextNode;
    return this.current;
  }

  /**
   *
   * @returns returns the node at the given index
   */
  at(index: number): ListNode | null {
    // Check for invalid index
    if (index < 0) {
      throw new Error(`Index ${index} is negative. Index must be >= 0.`);
    }

    const size = this.size();
    if (index > size) {
      throw new Error(`Index ${index} is out of bounds. List size is ${size}.`);
    }

    // Traverse to the index
    this.current = this.head;
    for (let i = 0; i < index; i++) {
      this.current = this.current!.nextNode;
    }

    return this.current;
  }

  /**Pop the last element in linkedList
   * @returns void
   */
  pop() {
    this.current = this.head;
    let beforeLast;
    if (this.head!.nextNode === null) {
      let delItem = this.head!.value;
      this.head = null;
      return `${delItem} deleted`;
    } else {
      while (this.current?.nextNode != null) {
        if (this.current.nextNode.nextNode === null) {
          beforeLast = this.current;
        }
        this.current = this.current.nextNode;
      }
      beforeLast!.nextNode = null;
      let delItem = this.current?.value;
      this.current = null;
      return `${delItem} deleted`;
    }
  }

  /**
   * @return true or false inf value is in linked list
   */
  contains(value: any): boolean {
    this.current = this.head;
    while (this.current != null) {
      if (this.current.value === value) return true;
      this.current = this.current!.nextNode;
    }
    return false;
  }

  /**
   * @return index of node or null
   */
  find(value: any): number | null {
    this.current = this.head;
    let index = 0;
    while (this.current != null) {
      if (this.current.value === value) return index;
      this.current = this.current!.nextNode;
      index++;
    }
    return null;
  }

  /**
   * Insert value to certain index
   */
  insertAt(value: any, index: number) {
    const size = this.size();
    const node = new ListNode(value);
    this.current = this.head;
    let count = 0;
    let previous = this.head;
    if (index > size + 1) {
      return false;
    }
    if (index === 0) {
      node.nextNode = this.current;
      this.head = node;
      return true;
    } else {
      while (count <= index) {
        if (count === index) {
          previous!.nextNode = node;
          node.nextNode = this.current;
          return true;
        } else {
          count++;
          previous = this.current;
          this.current = this.current!.nextNode;
        }
      }
    }
  }
}

export { LinkedList };
