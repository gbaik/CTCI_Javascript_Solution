var linkedList = function() {
  var list = {}

  list.head = null;
  list.tail = null;  

  list.addToTail = function(value) {
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }

    if(list.tail) {
      list.tail.next = newTail;
    }

    list.tail = newTail;
  };

  list.removeHead = function() {
    if (!list.head) {
      return null;
    }

    var currentHeadValue = list.head.value;
    list.head = list.head.next;
    return currentHeadValue;
  };

  list.contains = function(target) {
    var node = list.head;

    while(node) {
      if (node.value === target) {
        return true;
      }

      node = node.next;
    }

    return false;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
}
