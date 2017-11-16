var Stack = function() {
  this.storage = {};
  this.size = 0;
}

Stack.prototype.pop = function() {
  this.size -=1;

  var result = this.storage[this.size];

  delete this.storage[this.size];

  return result;
}

Stack.prototype.push = function(value) {
  this.storage[this.size] = value;
  this.size++;
}

Stack.prototype.peak = function() {
  return this.storage[this.size-=1] || null;
}

Stack.prototype.isEmpty = function() {
  return this.size === 0;
}