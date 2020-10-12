// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.

//o(v + e) time
//o(v) space
//v is the number of vertices and e is the number of edges

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name); //add name to array;
    // call depthfirstsearch on every child of that element;
    this.children.forEach((child) => child.depthFirstSearch(array));
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
