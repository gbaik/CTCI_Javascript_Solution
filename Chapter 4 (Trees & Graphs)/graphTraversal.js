/*  
  Breadth-First Search
*/

var breadthFirstSearch = (node) => {
  var output = [];
  var queue = [node];
  var seen = {};

  seen[node.id] = true;

  while (queue) {
    var current = queue.pop();

    for (var i = 0; i < current.edges.length; i++) {
      var edge = current.edges[i];
      
      if (!storage[edge.id]) {
          queue.push(edge);
          storage[edge.id] = true; 
      }
    }

    output.push(current.value);
  }

  return output;
}

/*
  Depth-First Search
*/

var depthFirstSearch = (node) => {
  var output = [];
  var queue = [node];
  var seen = {};

  seen[node.id] = true;

  while (queue) {
    var current = queue.pop();

    for (var i = 0; i < current.edges.length; i++) {
      var edge = current.edges[i];

      if (!seen[edge.id]) {
        queue.push(edge);
        seen[edge.id] = true;
      }
    }

    output.push(current.id);
  }

  return queue;
}
