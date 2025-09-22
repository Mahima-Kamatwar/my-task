let cell_Collection = document.querySelectorAll(".cell");
let playerX = document.querySelector(".player-1");
let playerO = document.querySelector(".player-2");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
let isGameStarted = false;
let gameHeader = document.querySelector(".game-header");
let startBtn = document.querySelector(".startBtn");

playerX.classList.add("active")

let resultTitle = document.querySelector(".result .title");
let resultControls = document.querySelector(".result .controls button");
let resultClock = document.querySelector(".result .clock .time");

let winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

let h5 = document.querySelector(".game-header h5");

cell_Collection.forEach(cell => {
    cell.addEventListener("click", (event) => {
        if (!isGameStarted || gameOver) return;

        let cellIndex = event.target.getAttribute("data-item");
        if (board[cellIndex] !== "") {
            alert("Invalid Move");
            return;
        }

        event.target.innerHTML = currentPlayer;
        move(cellIndex, currentPlayer);
    });
});

function switchPlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
        playerO.classList.add("active");
        playerX.classList.remove("active");
    } else if (currentPlayer == "O") {
        currentPlayer = "X";
        playerX.classList.add("active");
        playerO.classList.remove("active");
    }
}

function move(index, player) {
    if (board[index] == "") {
        board[index] = player;

        if (isGameOver()) {
            gameOver = true;
            return;
        } else {
            switchPlayer();
        }

    } else {
        alert("select empty cell");
    }
}

function isGameOver() {
    let winner = checkWinner();
    if (winner) {
        resultTitle.innerHTML = `Player - ${winner} is the Winner!`;
        clearInterval(timeInterval);
        return true;
    }
    if (checkDraw()) {
        resultTitle.innerHTML = "Game Drawn!";
        clearInterval(timeInterval);
        return true;
    }
    return false;
}

function checkWinner() {
    let winner = null;
    winningPatterns.forEach(pattern => {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = board[a];
            console.log(winner + " is the winner");
        }
    });
    return winner;
}

function checkDraw() {
    return board.every((item) => item);
}

function resetGame() {
    clearInterval(timeInterval);
    resultClock.innerHTML = "00:00:00";
    board = ["", "", "", "", "", "", "", "", ""];
    cell_Collection.forEach(cell => cell.innerHTML = "");
    resultTitle.innerHTML = "";
    currentPlayer = "X";
    playerX.classList.add("active");
    playerO.classList.remove("active");
}

startBtn.addEventListener("click", () => {
    gameOver = false;
    isGameStarted = true;
    h5.innerHTML = "";
    resetGame();
    showCurrentTime();
});



let timeInterval;
let timeLeft = 20; // countdown from 20 seconds

function showCurrentTime() {
    clearInterval(timeInterval); // reset previous timer
    timeLeft = 20;

    timeInterval = setInterval(() => {
        // add leading zero if timeLeft is single-digit
        let displaySeconds = ("0" + timeLeft).slice(-2);

        resultClock.innerHTML = `00:00:${displaySeconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timeInterval);
            gameOver = true;
            isGameStarted = false;
            resultTitle.innerHTML = "Game Over (Time Up)";
        }
    }, 1000);
}

// Start button logic
startBtn.addEventListener("click", () => {
    gameOver = false;
    isGameStarted = true;
    resetGame();
    showCurrentTime(); // start countdown timer
});

