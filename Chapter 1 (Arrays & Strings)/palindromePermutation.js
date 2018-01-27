/*
  I: String
  O: Boolean Value
  E: N/A
  C: N/A

  Space Complexity: O(n)
  Time Complexity: O(n)
*/

var palindromePermutation = (string) => {
  // Set string to lowercase
  string = string.toLowerCase();
  // Declare object
  var hash = {};  
  // Declare count
  var count = 0;  

  // Iterate through string
  for (var i = 0; i < string.length; i++) {  
    // If the letter is not empty  
    if (string[i] !== ' ') {
      // Check if hash has the letter if not set to 0
      hash[string[i]] = hash[string[i]] || 0;    
      // Increment count of letter
      hash[string[i]]++;
      }
  }    
  
  // Iterate through the hash
  for (var letter in hash) {    
    // If object value module 2 equals 1
    if (hash[letter] % 2) {      
      // Increment count
      count++;
    }
  }

  // Return if count is greater than or equal to 1
  return count <= 1;
}

    
