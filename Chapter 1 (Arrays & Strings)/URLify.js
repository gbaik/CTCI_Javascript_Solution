/*
  Write a method to replace all spaces in a string with '%20: 
  You may assume that the string has sufficient space at the end to hold the additional characters, 
  and that you are given the "true" length of the string.

  I: String, Number (length of string)
  O: String (spaces replaced with %20)
  C: N/A
  E: N/A

  Space Complexity: O(1)
  Time Complexity: O(n)
*/

// Split on space & Join on %20
var URLify = (string, length) => (string.split(' ').join('%20'));

