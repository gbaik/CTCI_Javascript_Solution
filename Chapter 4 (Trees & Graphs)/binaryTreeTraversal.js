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

var inOrderTraverasl = (root) => {
  var output = [];

  function traverse(node) {
    if (!node) { 
      return;
    }

    traverse(node.left);
    callback(node.value);
    traverse(node.right);
  }

  traverse(root);

  return output;
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

var preOrderTraversal = (root) => {
  var output = [];

  function traverse (node) {
    if (!node) {
      return;
    }

    output.push(node.value);
    traverse(node.left);
    traverse(node.right);    
  }

  traverse(root);

  return output;
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

var postOrderTraversal = (root) => {
  var output = [];

  function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    traverse(node.right); 
    output.push(node.value);   
  }

  traverse(root);

  return output;
}