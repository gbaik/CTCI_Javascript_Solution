/*
  Implement an algorithm to find the kth to last element of a singly linked list.

  I: Linked List, K (Integer)
  O: Linked List Value (unspecified)
  C: N/A
  E: N/A

  Space Complexity: O(1)
  Time Complexity: O(n)
*/
var linkedList = require('./basicImplementation');

var KthToLast = (linkedList, k) => {
  // Declare count variable
  var count = 0;
  // Declare length variable
  var length = 0;
  // Declare node equal to head
  var node = linkedList.head;      

  // Iterate through node
  while(node) {
    // Increment length
    length++;
    // Set node equal to the next value
    node = node.next
  }

  // Declare stop variable equal to length - k
  var stop = length - k;

  // Reset node
  node = linkedList.head;

  // Iterate through node
  while(node) {

    // If count is equal to stop
    if (count === stop) {
      // Return value of node
      return node.value;
    }
    // Increment count
    count++;
    // Set node equal to the next value
    node = node.next
  }
  // Return null
  return null;
}

var test = (list) => {
  var node = list.head;

  while(node) {
    console.log(node.value);
    node = node.next;
  }
}

