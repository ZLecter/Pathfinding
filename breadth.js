class Breadth{

	/**
	 * @param {Board} board Actual grid
	 * @param {Node} start Start node
	 * @param {Node} end End node
	 */
	constructor(board, start, end) {
		this.frontier = new Queue();
		this.visited = new Array();
		this.board = board;
		this.start = start;
		this.end = end;
	}

	RedefineNodes(newStart, newEnd){
		this.start = newStart;
		this.end = newEnd;
	}

	FullSearch(earlyExit = true){
		let reachable = false;
		this.frontier = new Queue();
		this.frontier.Enqueue(this.start);

		this.visited = new Array();
		this.visited.push(0);

		// Actual algorithm
		while (!this.frontier.isEmpty()) {
			let currentNode = this.frontier.Dequeue();
			currentNode.color = NodeColor.OnQueue;
			if(currentNode.ID == this.end.ID){
				console.log("Reached end node");
				currentNode.color = NodeColor.Current;
				if(earlyExit){
					reachable = true;
					break;
				}
			}
			this.board.CalculateNeighbors(currentNode).forEach(next => {
				if(!this.visited.includes(next.ID)){
					this.frontier.Enqueue(next);
					this.visited.push(next.ID);
					next.color = NodeColor.Visited;
				}
			});
		}
		if(!reachable && earlyExit)
			console.log("Non reachable end");
		
		// Clear arrays
		this.frontier = new Queue();
		this.visited = new Array();
	}

	ByStep(){
		
	}
}