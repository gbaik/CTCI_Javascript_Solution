/*
  Implement an algorithm to delete a node in the middle 
  (i.e., any node but the first and last node, not necessarily the exact middle) 
  of a singly linked list, given only access to that node.

  I: Linked List
  O: Linked List (w/o middle node)
  C: N/A
  E: N/A

  Space Complexity:
  Time Complexity:
*/
var linkedList = require('./basicImplementation');

var deleteMiddleNode = (linkedList) => {
  // Declare two pointers at the start
  var pointer1 = linkedList.head;
  var pointer2 = linkedList.head;
  // Declare count
  var count = 0;

  // Send one pointer all the way to the end
  while(pointer1) {
    // Increment the count
    count++;
    pointer1 = pointer1.next;  
  }

  // Send second pointer half way 
  while (count > 1) {
    // Check if pointer2 is null
    if(!pointer2) {
      return null;
    }
    // Decrement the count
    count-=2;
    pointer2 = pointer2.next;
  }

  // Return second pointer value
  return pointer2.value;
}

linkedList.addToTail(3);
linkedList.addToTail(5);
linkedList.addToTail(5);
// linkedList.addToTail(7);
linkedList.addToTail(10);
linkedList.addToTail(5);
linkedList.addToTail(3);

console.log(deleteMiddleNode(linkedList));