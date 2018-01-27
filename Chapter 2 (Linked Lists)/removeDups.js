/*
  I: Linked List (unsorted)
  O: Linked List (w/o duplicates)
  C: N/A
  E: N/A

  Space Complexity: O(n)
  Time Complexity: O(n)
*/

var removeDups = (linkedList) => {
  // Declare hash object
  var hash = {};
  var current = linkedList.head;
  var next = current.next;

  // Iterate through linked list
  while(next) {
    if(!hash.length) {
      // Insert first number into hash (to check for duplicates)
      hash[current.value] = true;
    }
    var value = next.value;
    // Check if the value is inside the hash object
    if(hash[value]) {
      // Remove value (skip over the node)
      current.next = next.next;
    } else {
      // Insert into hash object      
      hash[value] = true;
      // Move onto the next node
      current = next;
    }
    // Move onto next node
    next = current.next;
  }

  // Return linked list
  return linkedList;
}