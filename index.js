const DEBUGMODE = false;
const NONWALKBLOCKS = 40;

let breadth;

let board;
let scaleX, scaleY;
let player = {x: 0, y: 0};
let end = {x: 0, y: 3};

function setup(){
	createCanvas(400, 400);
	board = new Board(10, 10);
	scaleX = width/board.w;
	scaleY = height/board.h;
	// noLoop();
	// frameRate(30);

	for (let i = 0; i < board.w; i++) {
		for (let j = 0; j < board.h; j++) {
			board.node[i][j] = new Node(i, j, (i*board.h) + j, true);
		}
	}

	//Generate Random blocks
	board.GenerateRandomNonWalkBlocks(NONWALKBLOCKS);

	// Not necessary, really
	for (let i = 0; i < board.w; i++) {
		for (let j = 0; j < board.h; j++) {
			let n = board.node[i][j];
			n.neighbors = board.CalculateNeighbors(n);
		}
	}

	breadth = new Breadth(board, board.node[player.x][player.y], board.node[end.x][end.y]);
}

function draw(){

	for (let i = 0; i < board.w; i++) {
		for (let j = 0; j < board.h; j++) {
			let isWalkable = board.node[i][j].isWalkable;
			// if(isWalkable) fill(255);
			// else fill(0);
			fill(board.node[i][j].color);

			rect(i * scaleX, j * scaleY, scaleX, scaleY);
		}
	}

	// Draw player
	fill(25, 125, 125);
	ellipse(player.x * scaleX + scaleX/2, player.y * scaleY + scaleY/2, scaleX * 0.9, scaleY * 0.9);
	// Draw End Point
	fill(225, 0, 125);
	ellipse(end.x * scaleX + scaleX/2, end.y * scaleY + scaleY/2, scaleX * 0.9);

	// Debug for neighbors
	if(DEBUGMODE){
		let xpos = parseInt(mouseX/scaleX);
		let ypos = parseInt(mouseY/scaleY);
		if((xpos >= 0 && xpos < board.w) && (ypos >= 0 && ypos < board.h)){
			// fill(0,255,0, 128);
			fill(NodeColor.Current);
			rect(xpos * scaleX, ypos * scaleY, scaleX, scaleY);
			board.node[xpos][ypos].neighbors.forEach(n => {
				// fill(0,0, 255, 128);
				fill(NodeColor.Neighbor);
				rect(n.x * scaleX, n.y * scaleY, scaleX, scaleY);
			});
		}
	}
}

function mousePressed(){

	let xpos = parseInt(mouseX/scaleX);
	let ypos = parseInt(mouseY/scaleY);

	if((xpos >= 0 && xpos < board.w) && (ypos >= 0 && ypos < board.h)){
		if(xpos != player.x || ypos != player.y){
			if(xpos != end.x || ypos != end.y){
				let n = board.node[xpos][ypos];
				n.isWalkable = !n.isWalkable;
				// Recalculate neighbors if node changed
				if(n.isWalkable){
					n.neighbors = board.CalculateNeighbors(n);
					n.neighbors.forEach(nb => {
						nb.neighbors = board.CalculateNeighbors(nb);
					});
					n.color = NodeColor.Walkable;
				}else{
					n.neighbors.forEach(nb => {
						nb.neighbors = board.CalculateNeighbors(nb);
					});
					n.neighbors = board.CalculateNeighbors(n);
					n.color = NodeColor.NonWalkable;
				}
			}
		}
	}
	
	
}