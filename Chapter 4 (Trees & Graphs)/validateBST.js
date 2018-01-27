/*
  I: Root (Binary Tree)
  O: Boolean value
  C: N/A
  E: N/a

  Space Complexity: O(n)
  Time Complexity: O(log n)
*/

var validateBST = (root) => {
  var arr = [];

  function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    arr.push(node.value);
    traverse(node.right);
  }

  traverse(root);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }

  return true;
}