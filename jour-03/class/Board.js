class Board {
    constructor() {
        this.grid = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"],
        ];
        this.hasWinner = false;
    }

    initializeBoard() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                this.grid[row][col] = "-";
            }
        }
        this.hasWinner = false;
    }
    displayBoard() {
        const board = document.getElementById("board");
        board.innerHTML = "";

        for (let row = 0; row < 3; row++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row");

            for (let col = 0; col < 3; col++) {
                const btn = document.createElement("button");
                btn.classList.add("case");
                btn.id = `btn-${row}-${col}`;
                btn.textContent = this.grid[row][col];
                rowDiv.appendChild(btn);
            }

            board.appendChild(rowDiv);
        }
    }
    placeMove(row, col, symbol) {
        if (this.grid[row][col] === "-") {
            this.grid[row][col] = symbol;
            return true;
        }
        return false;
    }
    checkVictory() {
        const grid = this.grid;

        // Vérification des lignes
        for (let row = 0; row < 3; row++){
            if (grid[row][0] === grid[row][1] && grid[row][0] === grid[row][2] && grid[row][0] !== '-') {
                this.hasWinner = true;
                return true;
            }
        }
        // Vérification des colonnes
        for (let col = 0; col < 3; col++){
            if (grid[0][col] === grid[1][col] && grid[0][col] === grid[2][col] && grid[0][col] !== '-') {
                this.hasWinner = true;
                return true;
            }
        }
        // Vérification des diagonales
        if (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== '-') {
            this.hasWinner = true;
            return true;
        }
    }
    isFull() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++)
                if (this.grid[row][col] === "-") {
                    return false;
                }
        }
        return true;
    }
    resetBoard() {
        this.initializeBoard();
        this.displayBoard();
    }
}
export default Board;