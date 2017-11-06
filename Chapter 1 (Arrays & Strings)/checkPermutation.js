/*
  Given two strings, write a method to decide if one is a permutation of the other.

  I: 2 String
  O: Boolean value
  C: N/A
  E: N/A

  Space Complexity: O(1)
  Time Complexity: O(n log n)
*/

var checkPermutation = (string1, string2) => {
  var sort1 = string1.split('').sort().join('');
  var sort2 = string2.split('').sort().join('');  

  return sort1 === sort2;
}

