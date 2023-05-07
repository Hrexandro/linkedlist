//Build the following functions in your linked list class:
// append(value) adds a new node containing value to the end of the list - DONE
// prepend(value) adds a new node containing value to the start of the list  - DONE
// size returns the total number of nodes in the list - DONE
// head returns the first node in the list - DONE
// tail returns the last node in the list - DONE
// at(index) returns the node at the given index
// pop removes the last element from the list
// contains(value) returns true if the passed in value is in the list and otherwise returns false.
// find(value) returns the index of the node containing value, or null if not found.
// toString represents your LinkedList objects as strings,
//so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
// Extra Credit
// insertAt(value, index) that inserts a new node with the provided value at the given index.
// removeAt(index) that removes the node at the given index.
// Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

function linkedListFactory() {
  return {
    nextNode: null,
    append: function (value, node = this) {
      if (node.nextNode === null) {
        node.nextNode = nodeFactory(value);
      } else {
        this.append(value, node.nextNode);
      }
    },
    prepend: function (value) {
      let copiedHead = this.nextNode
      this.nextNode = nodeFactory(value, copiedHead)
    },
    size: function (currentNode = this) {
      if (currentNode.nextNode === null) {
        return 0
      } else {
        return 1 + this.size(currentNode.nextNode)
      }
    },
    head: function() {
      return this.nextNode
    },
    tail: function(node = this) {
      if (node.nextNode === null) {
        return node
      } else {
        return this.tail(node.nextNode)
      }
    }
  };
}

function nodeFactory(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

let exampleLinkedList = linkedListFactory();
exampleLinkedList.append("first");
exampleLinkedList.prepend("the new first");
exampleLinkedList.append("3");
exampleLinkedList.append("4");
let tail = exampleLinkedList.tail()
console.log(tail)
