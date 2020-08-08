// gameBoard - module pattern game board, stores the positions of each box and has functions to check states
const gameBoard = (function () {
    //let boxes = document.querySelectorAll(".box")
    // moves determines the number of moves played to call a draw if it reaches 9
    let moves = 0;
    // empty represents a box with no marker
    let empty = 0;
    // o is the marker O, likewise with x
    let o = 1;
    let x = 2;
    // The gameboard used to represent the states
    let board = [[empty,empty,empty],[empty,empty,empty],[empty,empty,empty]];


    // clearBoard() clears the board, this will be used reset the board for another game
    // INCOMPLETE FUNCTION
    const clearBoard = function ()  {
        board = [[empty,empty,empty],[empty,empty,empty],[empty,empty,empty]];
        updateVisual(0,0,true);
        // CHANGE VISUAL STATE OF BOARD BACK TO EMPTY
    };


    // winCheck(row,col) checks if the most recent move results in a three in a row win.
    // INCOMPLETE FUNCTION
    const winCheck = function (row, col)  {

    };


    // validBox(row,col) determines if a marker can be placed in the box clicked. i.e. it checks that
    // the box clicked is empty
    // COMPLETE FUNCTION
    const validBox = function (row, col) {
        if (board[row][col] === empty) {
            return true;
        } else {
            return false;
        }
    }


    // placeMarker(row,col) places a marker in a box if it is a valid box check through the validBox(row,col) function
    const placeMarker = function (row, col) {
        if (validBox(row,col)) {
            updateVisual(row,col)
            moves += 1;
            board[row][col] = gameMaster.marker();
            winCheck(row,col);
        } else {
            return
        }
        if (moves === 9) {
            gameMaster.draw();
        }
    }
    const updateVisual = function (row,col,reset) {
        if (reset) {
            // update to empty board
        } else {
            // update row,col

        }
    }
})






const gameMaster = (function () {
    const playerOne = player();
    const playerTwo = player();
    let turn = playerOne;
    const changeTurn = function () {
        if (turn === playerOne) {
            turn = playerTwo;
        } else {
            turn = playerTwo;
        }
    }
    const startGame = function (nameOne, nameTwo) {
        playerOne.changeName(nameOne);
        playerTwo.changeName(playerTwo);
    }
    const restart = function () {
        playerOne.resetScore();
        playerTwo.resetScore();
        gameBoard.clearBoard();
    }
    const draw = function () {
        // ADD VISUALS TO DISPLAY DRAW RESULT
        gameBoard.clearBoard();
        turn = playerOne;
    }
    const playerOneWin = function () {
        playerOne.incrementScore();
        turn = playerOne;
        gameBoard.clearBoard();
        // ADD VISUALS TO DISPLAY WIN
    }
    const playerTwoWin = function () {
        playerTwo.incrementScore();
        turn = playerOne;
        gameBoard.clearBoard();
        // ADD VISUALS TO DISPLAY WIN
    }
    const marker = function () {
        let retval = 0;
        if (turn === playerOne) {
            retval = 'X';
        } else {
            retval = 'O'
        }
        changeTurn();
        return retval;
    }
})






// COMPLETE FACTORY FUNCTION
const player = function () {
    // private attributes
    let name = '';
    let score = 0;
    const changeName = function (newName) {
        name = newName;
    }
    const resetScore = function () {
        score = 0;
    }
    const incrementScore = function () {
        score += 1;
    }
}
const displayController = (function () {

})