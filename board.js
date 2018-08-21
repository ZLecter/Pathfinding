class Board {
	constructor(w, h){
		this.w = w; // cols
		this.h = h; // width

		this.board = Create2DArray(w, h);
	}
}

function Create2DArray(nCols, nRows){
	let array = new Array(nRows);
	for(let i = 0; i < nCols; i++){
		array[i] = new Array(nCols);
	}
	return array;
}