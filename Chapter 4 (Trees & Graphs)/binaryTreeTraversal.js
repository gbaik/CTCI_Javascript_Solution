/*
  In-Order Traversal
*/

var inOrderTraverasl = (root, callback) => {
  if(root.left) {
    callback(inOrderTraverasl(root.left, callback));
  }

  callback(inOrderTraverasl(root, callback));

  if(root.right) {
    callback(inOrderTraverasl(root.right, callback));
  }
}

/*
  Pre-Order Traversal
*/

var preOrderTraversal = (root, callback) => {
  callback(preOrderTraversal(root, callback));
  
  if(root.left) {
    callback(preOrderTraversal(root.left, callback));
  }

  if (root.right) {
    callback(preOrderTraversal(root.right, callback));
  }
}

/*
  Post-Order Traversal
*/

var postOrderTraversal = (root, callback) => {
  if(root.left) {
    callback(postOrderTraversal(root.left, callback));
  }
  
  if (root.right) {
    callback(postOrderTraversal(root.right, callback));
  }

  callback(postOrderTraversal(root, callback));
}