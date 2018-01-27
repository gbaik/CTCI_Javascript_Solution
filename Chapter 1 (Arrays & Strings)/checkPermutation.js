/*
  I: 2 String
  O: Boolean value
  C: N/A
  E: N/A

  Space Complexity: O(1)
  Time Complexity: O(n log n)
*/

var checkPermutation0 = (string1, string2) => {
  // Sort string1
  var sort1 = string1.split('').sort().join('');
  // Sort string2
  var sort2 = string2.split('').sort().join('');  

  // Return if sort1 is equal to sort2
  return sort1 === sort2;
}

/*
  Space Complexity: O(n)
  Time Complexity: O(n)
*/

var checkPermutation1 = (string1, string2) => {
  // Declare object
  var hash = {};
  
  // Iterate through string1
  for (var i = 0; i < string1.length; i++) {
    // Check if hash has a value, if not set to 0
    hash[string1[i]] = hash[string1[i]] || 0;
    // Increment count
    hash[string1[i]]++;
  }

  // Iterate through string2
  for (var i = 0; i < string2.length; i++) {
    // If letter exist in object
    if (hash[string2[i]] !== undefined) {
      // Decrement count
      hash[string2[i]]--;
    } else { // Else
      // Return false (since letter does not exist)
      return false;
    }
  }
  console.log(hash);
  // Iterate through object
  for (var letter in hash) {
    // If a letter value does not equal 0
    if (hash[letter] !== 0) {
      // Return false
      return false;
    }
  }

  //Return true
  return true;
}

