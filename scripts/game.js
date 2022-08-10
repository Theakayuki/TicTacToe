function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please enter player names');
        return;
    }
    clearBoard();
    activePlayer = 0;
    activePlayerElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchActivePlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    activePlayerElement.textContent = players[activePlayer].name;
}

function handleGameFieldClick(e) {
    const selectedField = e.target;
    if (selectedField.tagName !== 'LI') {
        return;
    }
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    const row = +selectedField.dataset.row - 1;
    const col = +selectedField.dataset.col - 1;
    gameBoard[row][col] = activePlayer + 1;

    checkForWinner();
    switchActivePlayer();
}

function checkForWinner() {
    // gameBoard is a 2D array with 3 rows and 3 columns
    // default value is 0 (empty)
    // 1 is for player 1
    // 2 is for player 2

    // check rows
    for (let row = 0; row < gameBoard.length; row++) {
        if (gameBoard[row][0] === gameBoard[row][1] && gameBoard[row][1] === gameBoard[row][2]) {
            if (gameBoard[row][0] !== 0) {
                alert(`${players[gameBoard[row][0] - 1].name} wins!`);
                return;
            }
        }
    }
    // check columns
    for (let col = 0; col < gameBoard[0].length; col++) {
        if (gameBoard[0][col] === gameBoard[1][col] && gameBoard[1][col] === gameBoard[2][col]) {
            if (gameBoard[0][col] !== 0) {
                alert(`${players[gameBoard[0][col] - 1].name} wins!`);
                return;
            }
        }
    }
    // check diagonals
    if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        if (gameBoard[0][0] !== 0) {
            alert(`${players[gameBoard[0][0] - 1].name} wins!`);
            return;
        }
    }
    if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        if (gameBoard[0][2] !== 0) {
            alert(`${players[gameBoard[0][2] - 1].name} wins!`);
            return;
        }
    }
    // check for draw
    let isDraw = true;
    for (let row = 0; row < gameBoard.length; row++) {
        for (let col = 0; col < gameBoard[0].length; col++) {
            if (gameBoard[row][col] === 0) {
                isDraw = false;
            }
        }
    }
    if (isDraw) {
        alert('Draw!');
    }
}

function clearBoard() {
    for (let row = 0; row < gameBoard.length; row++) {
        for (let col = 0; col < gameBoard[0].length; col++) {
            gameBoard[row][col] = 0;
        }
    }
    for (const gameBoardPiece of gameBoardElement.querySelectorAll('li')) {
        gameBoardPiece.classList.remove('disabled');
        gameBoardPiece.textContent = '';
    }
}
