/*
  There are three types of edits that can be performed on strings: 
  insert a character, remove a character, or replace a character. 
  Given two strings, write a function to check if they are one edit (or zero edits) away.

  I: 2 Strings
  O: Boolean value
  C: N/A
  E: N/A

  Space Complexity: O(n)
  Time Compleixty: O(n)
*/

var oneAway = (string1, string2) => {
  // Declare object
  var hash = {};
  // Declare count
  var count = 0;

  // Iterate through string1
  for (var i = 0; i < string1.length; i++) {
    // Check if hash has letter if not set to 0
    hash[string1[i]] = hash[string1[i]] || 0;
    // Increment letter count
    hash[string1[i]]++;
  }

  // Iterate through string2
  for (var i = 0; i < string2.length; i++) {    
    // If hash has letter
    if(hash[string2[i]]) {
      // Decrement letter count
      hash[string2[i]]--;
    } else { // Else 
      // Increment global count
      count++;
    }
  }

  // If count is greater than 1
  if (count > 1) {
    // Return false
    return false;
  }
  
  // Iterate through hash
  for (var letter in hash) {
    // If letter count is not between -1 ~ 1
    if (hash[letter] < -1 && hash[letter] > 1) {
      // Return false
      return false;
    }
  }

  // Return true
  return true;
};

