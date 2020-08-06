// gameBoard - module pattern game board, stores the positions of each box and has functions to check states
const gameBoard = (function () {
    //let boxes = document.querySelectorAll(".box")
    let board = [[],[],[]];
    const clearBoard = function ()  {
        board = [[],[],[]];
    };
    const winCheck = function ()  {

    };
    const placeMarker = function (row, col) {

    }
    const validBox = function (row, col) {

    }
})
const gameMaster = (function () {
    const startGame = function (nameOne, nameTwo) {

    }
})
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
}