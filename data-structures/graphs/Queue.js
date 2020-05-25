/**
 * @class Queue simple API to represent a FIFO Queue
 * it exposes three methods:
 * enqueue -> add element to the end of the queue
 * dequeue -> remove element from the front of the queue
 * isEmpty -> returns is queue is empty or not
 */
class Queue {
	constructor() {
		this.list = [];
	}

	enqueue(element) {
		this.list.push(element);
	}

	dequeue() {
		if (this.list.length > 0) {
			return this.list.shift();
		} 
		return null;
	}
	
	isEmpty() {
	    return this.list.length === 0;
	}
}

module.exports = Queue;
