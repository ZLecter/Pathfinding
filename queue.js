class Queue{
	constructor(){
		this.items = [];
	}

	Enqueue(element){
		this.items.push(element);
	}

	Dequeue(){
		if(this.isEmpty())
			return "No elements";
		return this.items.shift();
	}

	Front(){
		if(this.isEmpty())
			return "No elements";
		return this.items[0];
	}

	isEmpty(){
		return this.items.length == 0;
	}
}