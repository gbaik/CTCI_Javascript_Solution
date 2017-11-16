var Queue = function() {
  this.storage = {};

  this.start = 0;
  this.end = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.end+=1] = value;
}

Queue.prototype.dequeue = function() {
  var result = this.storage[this.start];

  delete this.storage[this.start];

  this.start++;

  return result;
}

Queue.prototype.peak = function() {
  return this.storage[this.start+=1] || null;
}

Queue.prototype.isEmpty = function() {
  return this.end - this.start === 0;
}
