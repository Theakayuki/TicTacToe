function openPlayerConfig(e) {
    const selectedPlayerId = e.target.dataset.playerid;
    editedPlayer = +selectedPlayerId;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    configErrors.textContent = '';
    formElement.getElementsByTagName('input')[0].value = '';
}

function savePlayerConfig(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const enteredPlayerName = formData.get('playerName').trim();

    if (!enteredPlayerName) {
        configErrors.textContent = 'Player name is required';
        e.target.firstElementChild.classList.add('error');
        return;
    }

    document
        .getElementById(`player-${editedPlayer}-data`)
        .getElementsByTagName('h3')[0].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;
    closePlayerConfig();
}
