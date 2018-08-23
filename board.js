class Board {
	/**
	 *Creates an instance of Board.
	 * @param {number} w Width of the board
	 * @param {numer} h Height of the board
	 */
	constructor(w, h){
		this.w = w; // cols
		this.h = h; // width

		this.node = Create2DArray(w, h);
	}

	
	/**
	 * @param {Node} node Node to calculate neighbors
	 * @returns {*} Valid neighbors from node
	 */
	CalculateNeighbors(nodeBase){
		if(!nodeBase.isWalkable){
			return [];
		}

		// Up, right, down and left
		// Can be multidirectional
		const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
		let neighbors = new Array();
		dirs.forEach(dir => {
			let x = nodeBase.x + dir[0];
			let y = nodeBase.y + dir[1];
			if( (x >= 0 && x < this.w) && (y >= 0 && y < this.h) ){
				let n = this.node[x][y];
				if(n.isWalkable){
					neighbors.push(n);
				}
			}
		});
		return neighbors;
	}
}

class Node {
	/**
	 *Creates an instance of Node.
	 * @param {number} x X Position
	 * @param {number} y Y Position
	 * @param {boolean} isWalkable
	 */
	constructor(x, y, id, isWalkable) {
		this.x = x;
		this.y = y;
		this.ID = id;
		this.isWalkable = isWalkable;

		this.neighbors = new Array();
	}
}

/**
 * @param {number} nCols Number of Columns
 * @param {number} nRows Number of Rows
 * @returns {*} 2D array of [nRows][nCols]
 */
function Create2DArray(nCols, nRows){
	let array = new Array(nRows);
	for(let i = 0; i < nCols; i++){
		array[i] = new Array(nCols);
	}
	return array;
}