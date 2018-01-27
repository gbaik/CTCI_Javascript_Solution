/*
  I: Linked List, K (Integer)
  O: Linked List Value (unspecified)
  C: N/A
  E: N/A

  Space Complexity: O(1)
  Time Complexity: O(n)
*/

var KthToLast0 = (linkedList, k) => {
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

/*
  Space Complexity: O(1)
  Time Complexity: O(n)
*/

var KthToLast1 = (linkedList, k) => {
  // Set two pointers at the start
  var pointer1 = linkedList.head;
  var pointer2 = linkedList.head;
  
  // Move the first pointer k nodes into the linkedList
  for (var i = 0; i < k; i++) {
    // If null out of bounds
    if (!p1) {
      // Return null
      return null;
    }

    p1 = p1.next;
  }

  // Move second pointer along with first pointer
  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }

  //Return second pointer value
  return p2.value;
}