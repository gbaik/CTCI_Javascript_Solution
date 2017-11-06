var isUnique = (string) => {
  // Declare object
  var hash = {};

  // Look through string
  for (var i = 0; i < string.length; i++) {
    // If letter exists in object
    if (hash[string[i]]) {
      // Return false      
      return false;
    }
    // Insert letter into object equal to true
    hash[string[i]] = true;
  }
  
  // return true 
  return true;
}

console.log(isUnique('hello'));
console.log(isUnique('hl'));