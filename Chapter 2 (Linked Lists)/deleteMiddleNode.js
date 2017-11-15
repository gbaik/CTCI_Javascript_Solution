/*
  Implement an algorithm to delete a node in the middle 
  (i.e., any node but the first and last node, not necessarily the exact middle) 
  of a singly linked list, given only access to that node.

  I: Middle node of linked list
  O: Nothing (but linked list is transformed)
  C: N/A
  E: N/A

  Space Complexity: O(1)
  Time Complexity: O(1)
*/

var linkedList = require('./basicImplementation');

var deleteMiddleNode = (node) => {
  // Check if node exists or if it is tail
  if (!node || !node.next) {
    return;
  }

  // Delete the middle node
  node.value = node.next.value;
  node.next = node.next.next;
  
  return;
}

/*
  Same problem but when middle node is not provided (NOT CTCI)

  I: Linked List
  O: Linked List (w/o middle node)
  C: N/A
  E: N/A

  Space Complexity: O(1)
  Time Complexity: O(n)
*/

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