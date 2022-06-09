/*
  Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

  Implement KthLargest class:

  KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
  int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
 
*/

// Answer

var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap(k)
    for (let n of nums) {
        this.minHeap.add(n)
    }
}

KthLargest.prototype.add = function(val) {
    this.minHeap.add(val)
    return this.minHeap.peek()
}

class MinHeap {
    constructor(size) {
        this.size = size;
        this.minHeap = []
    }
    
    add(val) {
        let heap = this.minHeap
        if (heap.length < this.size) {
            heap.push(val)
            let i = heap.length - 1
            let parent = (i - 1) / 2 | 0

            while (parent >= 0 && heap[i] < heap[parent]) {
                this.swap(parent, i)
                i = parent
                parent = (parent - 1) / 2 | 0
            }
        }
        else if (heap[0] < val) {
            heap[0] = val
            this.heapify(0)
        }
    }
    heapify(i) {
        let heap = this.minHeap;
        let n = heap.length;
        let left = 2 * i + 1
        let right = 2 * i + 2
        let smallest = i

        if (left < n && heap[smallest] > heap[left]) smallest = left
        if (right < n && heap[smallest] > heap[right]) smallest = right
        if (smallest != i) {
            this.swap(smallest, i)
            this.heapify(smallest)
        }
    }
    peek() {
        return this.minHeap[0]
    }
    swap(i, j) {
    let temp = this.minHeap[i];
    this.minHeap[i] = this.minHeap[j]
    this.minHeap[j] = temp
    }
}

// results
/*
Runtime: 180 ms. Beats 72.24 % of javascript submissions.
Memory Usage: 48.9 MB. Beats 97.51 % of javascript submissions.
*/
