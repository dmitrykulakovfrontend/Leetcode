/*
  You are given an array of integers stones where stones[i] is the weight of the ith stone.

  We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together.
  Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

  If x == y, both stones are destroyed, and
  If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
  At the end of the game, there is at most one stone left.

  Return the smallest possible weight of the left stone. If there are no stones left, return 0.
 
*/

// Answer

var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap();
    for (stone of stones) {
      maxHeap.add(stone);
    }
    while (maxHeap.heap.length > 2) {
      let num1 = maxHeap.extractMax();
      let num2 = maxHeap.extractMax();
      if (num1 === num2) continue;
      else if (num1 > num2) maxHeap.add(num1 - num2);
      else if (num2 > num1) maxHeap.add(num2 - num1);
    }
    return maxHeap.heap[1] || 0;
};

class MaxHeap {
  constructor() {
    this.heap = [Infinity];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  bubbleDown(index) {
    let element = this.heap[index];
    let left = index * 2;
    let right = left + 1;
    let leftNode = this.heap[left] || 0;
    let rightNode = this.heap[right] || 0;
    if (rightNode > element && rightNode >= leftNode) {
      this.heap[index] = rightNode;
      this.heap[right] = element;
      this.bubbleDown(right);
    } else if (leftNode > element && leftNode >= rightNode) {
      this.heap[index] = leftNode;
      this.heap[left] = element;
      this.bubbleDown(left);
    }
  }
  bubbleUp(index) {
    let element = this.heap[index];
    let parentIndex = Math.floor(index / 2) || 0;
    let parent = this.heap[parentIndex];
    if (element > parent) {
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      this.bubbleUp(parentIndex);
    }
  }
  extractMax() {
    let max = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.bubbleDown(1);
    return max;
  }
}

// results
/*
Runtime: 67 ms. Beats 86.39 % of javascript submissions..
Memory Usage: 42.5 MB. Beats 84.76 % of javascript submissions.
*/
