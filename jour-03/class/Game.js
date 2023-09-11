class Game {
    constructor(player1, player2, board) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
        this.currentTurn = player1;
    }

    startNewGame() {
        this.board.initializeBoard();
        this.board.displayBoard();
        this.currentTurn = this.player1;
        this.registerMove();
    }

    makeMove(row, col) {

    }

    registerMove() {

    }

    switchTurn() {
    }

    checkGameOver() {

    }

    announceWinner() {

    }

    resetGame() {
        this.board.resetBoard();
        this.currentTurn = this.player1;
        this.registerMove();
    }
}

export default Game;