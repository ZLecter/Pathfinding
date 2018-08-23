/**
 * @param {Board} board
 * @param {Node} start
 */
function BreadthFirstSearch (board, start) {
	let frontier = new Queue();
	frontier.Enqueue(start);

	let visited = new Array();
	visited.push(0);
	console.log(visited.length);
	console.log("=================");

	while (!frontier.isEmpty()) {
		let currentNode = frontier.Dequeue();
		console.log("Visiting node.ID: " + currentNode.ID);
		// console.log("Frontier: ");
		// console.log(frontier.items.length);
		// console.log("Visited: ");
		// console.log(visited.length);
		// console.log("=================");
		board.CalculateNeighbors(currentNode).forEach(next => {
			if(!visited.includes(next.ID)){
				frontier.Enqueue(next);
				visited.push(next.ID);
				// console.log("Inserted node.ID: " + next.ID);
				// console.log("=================");
			}
		});
	}
}