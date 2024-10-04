const cards = [
    'A', 'A', 'B', 'B',
    'C', 'C', 'D', 'D',
    'E', 'E', 'F', 'F',
    'G', 'G', 'H', 'H'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
let timerInterval;
let timeElapsed = 0;
let gameStarted = false;

// Shuffle cards
function shuffle(array) {
    array.sort(() => 0.5 - Math.random());
}

// Create game board
function createBoard() {
    const board = document.getElementById('game-board');
    shuffle(cards);
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = card;
        cardElement.addEventListener('click', flipCard);
        board.appendChild(cardElement);
    });
}

// Flip card
function flipCard() {
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }

    if (lockBoard) return;
    if (this === firstCard) return; // Prevent double clicking same card

    this.classList.add('flip');
    this.textContent = this.dataset.value;

    if (!firstCard) {
        // First card clicked
        firstCard = this;
    } else {
        // Second card clicked
        secondCard = this;
        checkForMatch();
    }
}

// Check if two cards match
function checkForMatch() {
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;
    isMatch ? disableCards() : unflipCards();
}

// Disable matched cards
function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    matchedPairs++;
    if (matchedPairs === cards.length / 2) {
        clearInterval(timerInterval);
        setTimeout(() => alert(`Congratulations! You matched all the pairs in ${formatTime(timeElapsed)}!`), 500);
    }

    resetBoard();
}

// Unflip cards
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1000);
}

// Reset board
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Start the game timer
function startTimer() {
    const timerElement = document.getElementById('timer');
    timerInterval = setInterval(() => {
        timeElapsed++;
        timerElement.textContent = `Time: ${formatTime(timeElapsed)}`;
    }, 1000);
}

// Format time in minutes and seconds (MM:SS)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Start game
createBoard();
