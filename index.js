let board;
let scaleX, scaleY;
let player = {x: 0, y: 0};
let end = {x: 5, y: 5};

function setup(){
	createCanvas(800, 800);
	board = new Board(10, 10);
	scaleX = width/board.w;
	scaleY = height/board.h;
	// noLoop();
	// frameRate(30);

	for (let i = 0; i < board.w; i++) {
		for (let j = 0; j < board.h; j++) {
			board.board[i][j] = true;
		}
	}
}

function draw(){

	for (let i = 0; i < board.w; i++) {
		for (let j = 0; j < board.h; j++) {
			// let r = map(i, 0, board.w-1, 0, 255);
			// let g = map(j, 0, board.h-1, 0, 255);
			// fill(r, g, 0, 255);
			let isWalkable = board.board[i][j];
			if(isWalkable) fill(255);
			else fill(0,0,0);

			rect(i * scaleX, j * scaleY, scaleX, scaleY);
		}
	}

	fill(25, 125, 125);
	ellipse(player.x * scaleX + scaleX/2, player.y * scaleY + scaleY/2, scaleX * 0.9);
	
	fill(225, 0, 125);
	ellipse(end.x * scaleX + scaleX/2, end.y * scaleY + scaleY/2, scaleX * 0.9);
	
}

function mousePressed(){

	let xpos = parseInt(mouseX/scaleX);
	let ypos = parseInt(mouseY/scaleY);
	if(xpos != player.x || ypos != player.y){
		if(xpos != end.x || ypos != end.y){
			let isWalkable = board.board[xpos][ypos];
			board.board[xpos][ypos] = !isWalkable;
		}
	}
	
}