/**
 * @class Stack this class provides an api to work with a general stack
 * ADT
 */
class Stack {
	constructor() {
		this.list = [];
	}
    
	push(element) {
		this.list.push(element);
	}
    
	pop() {
		return this.list.pop();
	}
    
	top() {
		return this.list[this.list.length - 1];
	}
    
	isEmpty() {
		return this.list.length === 0;
	}

	getStack() {
		return this.list;
	}
}

module.exports = Stack;
