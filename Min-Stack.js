/*
  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

  Implement the MinStack class:

  MinStack() initializes the stack object.
  void push(int val) pushes the element val onto the stack.
  void pop() removes the element on the top of the stack.
  int top() gets the top element of the stack.
  int getMin() retrieves the minimum element in the stack.
 
*/

// Answer

var MinStack = function () {
  this.stack = [];
};
MinStack.prototype.push = function (val) {
  let prev = this.stack[this.stack.length - 1];
  if (prev === undefined) prev = {minimum: Infinity};
  this.stack.push({
    value: val,
    minimum: val < prev.minimum ? val : prev.minimum,
  });
};
MinStack.prototype.pop = function () {
  this.stack.pop();
};
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].value;
};
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].minimum;
};

// results
/*
Runtime: 137 ms. Beats 63.52 % of javascript submissions.
Memory Usage: 50.1 MB. Beats 28.92 % of javascript submissions.
*/
