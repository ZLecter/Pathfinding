class Queue{
	constructor(){
		this.items = new Array();
	}

	/**
	 * @param {*} element Put/push element at the end of the queue
	 */
	Enqueue(element){
		this.items.push(element);
	}

	/**
	 * @returns Returns and delete last element of the queue. Returns undefined if its empty
	 * @memberof Queue
	 */
	Dequeue(){
		if(this.isEmpty())
			return undefined;
		return this.items.pop(); // shift?
	}

	/**
	 * @returns Returns first element of the queue
	 * @memberof Queue
	 */
	Front(){
		if(this.isEmpty())
			return "No elements";
		return this.items[0];
	}

	isEmpty(){
		return this.items.length == 0;
	}
}