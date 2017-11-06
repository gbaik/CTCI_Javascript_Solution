/*
  Write a method to replace all spaces in a string with '%20: 
  You may assume that the string has sufficient space at the end to hold the additional characters, 
  and that you are given the "true" length of the string.

  I: String, Number (length of string)
  O: String (spaces replaced with %20)
  C: N/A
  E: If there are no more characters at the end, just cut it off (i.e "Mr John Smith " === "Mr%20John%20Smith")

  Space Complexity: O(1)
  Time Complexity: O(n)
*/

// Split on space & Join on %20
var URLify = (string, length) => {
  // Split on space 
  var split = string.split(' ');
  
  console.log(split);
  
  // Iterate through split string backwards
  for (var i = split.length - 1; i >= 0; i--) {
    console.log(split[i]);
    // If current value is equal to ""
    if(split[i] === "") {
      // Remove last item in split array
      split.pop();
    }
  }
  
  // Return Join split string on %20
  return split.join('%20')
 }

