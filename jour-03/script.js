import Player from "./class/Player";
import Game from "./class/Game";
import Board from "./class/Board";

const player1 = new Player("X", true);
const player2 = new Player("O", false);

// Créer le plateau de jeu
const board = new Board();

// Créer le jeu
const game = new Game(player1, player2, board);

// Initialiser une nouvelle partie
game.startNewGame();

// Ajouter un gestionnaire d'événement pour le bouton "Nouvelle partie"
const playButton = document.getElementById('play');
playButton.addEventListener('click', () => {
    game.resetGame();
});


// Ajouter un gestionnaire d'événement pour les cases du plateau
const boardDiv = document.getElementById('board');
boardDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('case')) {
        const [row, col] = event.target.id.split('-').slice(1).map(Number);
        game.makeMove(row, col);
    }
});