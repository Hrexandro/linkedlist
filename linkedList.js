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
    },
    at: function(index, currentNode = this.nextNode, currentIndex = 0) {
      if (currentNode === null){
        return null
      } else if (index === currentIndex){
        return currentNode
      } else {
        return this.at(index, currentNode.nextNode, currentIndex + 1)
      }
    },
    pop: function(node = this.nextNode){
        if (node.nextNode.nextNode === null) {
          node.nextNode = null
        } else {
          this.pop(node.nextNode)
        }
    },
    contains: function (value, node = this){
      if (node === null) {
        return false
      } else if (node.value === value){
        return true
      } else {
        return this.contains(value, node.nextNode)
      }
    },
    find: function (searchedValue, currentNode = this.nextNode, index = 0){
        if (currentNode === null) {
          return null
        } else if (currentNode.value === searchedValue){
          return index
        } else {
          return this.find(searchedValue, currentNode.nextNode, index + 1)
        }
    },
    toString: function (currentNode = this.nextNode){
      if (currentNode === null){
        return currentNode
      } else {
        return `( ${currentNode.value} )` + " -> " + this.toString(currentNode.nextNode)
      }
    },
    insertAt: function (value, index, currentNode = this, processedIndex = -1){//the processed index is the one preceeding the one where inserting is performed
      if (index -1 === processedIndex){
        currentNode.nextNode = nodeFactory(value, currentNode.nextNode)
      } else {
        this.insertAt(value, index, currentNode.nextNode, processedIndex + 1)
      }
    },
    removeAt: function(index, currentNode = this, processedIndex = -1){
      if (currentNode.nextNode === null){
        return
      } else if (index -1 === processedIndex){
        currentNode.nextNode = currentNode.nextNode.nextNode
      } else {
        this.removeAt(index, currentNode.nextNode, processedIndex + 1)
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
