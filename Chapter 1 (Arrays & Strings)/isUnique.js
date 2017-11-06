/*
  Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

  I: String
  O: Boolean value
  C: N/A
  E: N/A

  Space Complexity: O(n)
  Time Complexity: O(n)
*/

var isUnique = (string) => {
  // Declare object
  var hash = {};

  // Iterate through string
  for (var i = 0; i < string.length; i++) {
    // If letter exists in object
    if (hash[string[i]]) {
      // Return false      
      return false;
    }
    // Insert letter into object equal to true
    hash[string[i]] = true;
  }
  
  // return true 
  return true;
}
