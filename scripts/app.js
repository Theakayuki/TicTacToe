let editedPlayer = 0;
let activePlayer = 0;
const players = [
    {
        id: 1,
        name: '',
        symbol: 'X',
    },
    {
        id: 2,
        name: '',
        symbol: 'O',
    },
];

const gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const configErrors = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const gameBoardElement = document.getElementById('game-board');
const activePlayerElement = document.getElementById('active-player-name');
const startGameBtnElement = document.getElementById('start-game');
// const gameFieldElements = document.querySelectorAll('#game-board li');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
startGameBtnElement.addEventListener('click', startNewGame);

formElement.addEventListener('submit', savePlayerConfig);
gameBoardElement.addEventListener('click', handleGameFieldClick);

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', handleGameFieldClick);
// }
