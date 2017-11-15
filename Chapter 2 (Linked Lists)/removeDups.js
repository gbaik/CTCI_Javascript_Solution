/*
  Write code to remove duplicates from an unsorted li nked list.

  I: Linked List (unsorted)
  O: Linked List (w/o duplicates)
  C: N/A
  E: N/A

  Space Complexity: 
  Time Complexity:
*/

var linkedList = require('./basicImplementation');

var removeDups = (linkedList) => {
  // Declare hash object
  var hash = {};
  var node1 = linkedList.head;
  var node2 = node1.next;

  // Iterate through linked list
  while(node2) {
    if(!hash.length) {
      // Insert first number into hash (to check for duplicates)
      hash[node1.value] = true;
    }
    var value = node2.value;
    // Check if the value is inside the hash object
    if(hash[value]) {
      // Remove value (skip over the node)
      node1.next = node2.next;
    } else {
      // Insert into hash object      
      hash[value] = true;
      // Move onto the next node
      node1 = node2;
    }
    // Move onto next node
    node2 = node1.next;
  }

  // Return linked list
  return linkedList;
}


var test = (list) => {
  var node = list.head;

  while(node) {
    console.log(node.value);
    node = node.next;
  }
}

linkedList.addToTail(1);
linkedList.addToTail(5);
linkedList.addToTail(5);
linkedList.addToTail(5);
linkedList.addToTail(2);
linkedList.addToTail(7);
linkedList.addToTail(2);
linkedList.addToTail(1);

console.log('BEFORE');
test(linkedList);

removeDups(linkedList);

console.log('AFTER');
test(linkedList);