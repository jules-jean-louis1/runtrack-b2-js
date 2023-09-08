class Board {
    constructor() {
        this.grid = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
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
        const boardDiv = document.getElementById("board");
        boardDiv.innerHTML = "";

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

            boardDiv.appendChild(rowDiv);
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
        // Logique pour vérifier les combinaisons gagnantes
        // Si une combinaison gagnante est trouvée, mettez this.hasWinner à true et retournez true, sinon retournez false.
    }

    isFull() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.grid[row][col] === "-") {
                    return false;
                }
            }
        }
        return true;
    }

    resetBoard() {
        this.initializeBoard();
        this.displayBoard();
    }
}
