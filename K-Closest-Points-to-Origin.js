/*
  Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

  The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

  You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
*/

// Answer


/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let data = mapPointsToDistances(points);

  function compareDistance(p1, p2) {
    if (p2 === Infinity) return true;
    if (p1 === Infinity) return false;
    return p1.distance <= p2.distance;
  }

  function distance(x, y) {
    return (x ** 2 + y ** 2) ** (1 / 2);
  }

  function mapPointsToDistances(points) {
    return points.map((point) => {
      return {
        distance: distance(point[0], point[1]),
        point,
      };
    });
  }

  let heap = new MinHeap(data, compareDistance);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(heap.extractMin().point);
  }
  return result;
};
    class MinHeap {
  constructor(array, compare) {
    // points: [[2,5], [10, 15]]
    // heap: [{distance: 5, point: [2, 5]}, {distance: 10, point: [10, 15]}, ...]
    this.heap = [null, ...array];
    this.size = array.length - 1;
    this.compare = compare;
    this.buildHeap();
  }
  buildHeap() {
    // initially builds the heap
    for (let i = this.size; i >= 1; i--) {
      this.heapify(i);
    }
  }
  swap(i, j) {
    // swap heap elements at index i and j
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  heapify(i) {
    while (i >= 1) {
      let left = 2 * i;
      let right = 2 * i + 1;
      let parent = this.heap[i];

      let leftChild =
        this.heap[left] === undefined ? Infinity : this.heap[left];
      let rightChild =
        this.heap[right] === undefined ? Infinity : this.heap[right];

      if (
        this.compare(leftChild, parent) &&
        this.compare(leftChild, rightChild)
      ) {
        this.swap(left, i);
        i = left;
      } else if (this.compare(rightChild, parent)) {
        this.swap(right, i);
        i = right;
      } else break;
    }
  }
  extractMin() {
    const min = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.size -= 1;
    let i = 1;
    while (i <= this.size) {
      let left = i * 2;
      let right = i * 2 + 1;
      let parent = this.heap[i];
      let leftChild =
        this.heap[left] === undefined ? Infinity : this.heap[left];
      let rightChild =
        this.heap[right] === undefined ? Infinity : this.heap[right];
      if (
        this.compare(leftChild, parent) &&
        this.compare(leftChild, rightChild)
      ) {
        this.swap(i, left);
        i = left;
      } else if (this.compare(rightChild, parent)) {
        this.swap(i, right);
        i = right;
      } else break;
    }
    return min;
  }
}

// results
/*
Runtime: 259 ms. Beats 73.10 % of javascript submissions.
Memory Usage: 53.3 MB. Beats 92.67 % of javascript submissions.
*/
