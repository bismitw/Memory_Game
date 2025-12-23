document.addEventListener("DOMContentLoaded",()=>{

    //Grab HTML elements
    const gameBoard = document.getElementById("game-board");
    const movesDisplay = document.getElementById("moves");
    const timeDisplay = document.getElementById("time");
    const bestScoreDisplay = document.getElementById("best-score");
    const newGameBtn = document.getElementById("new-game-btn");
    const difficultyBtn = document.getElementById("difficulty-btn");
    const gameOverScreen = document.getElementById("game-over");
    const winMessage = document.getElementById("win-message");
    const finalStats = document.getElementById("final-stats");
    const playAgainBtn = document.getElementById("play-again-btn");

    //Game state variables
    let cards= []; //all card elements 
    let flippedCards = []; //currently flipped card (max 2);
    let moves = 0; // player move count
    let time = 0; //game timer in seconds
    let timer; //Timer interval ID
    let gameActive = true; //can player click?  (Prevents spam)
    let cardCount = 16;  // Total cards (4x4= 8 pairs)
    

    //Emoji pairs Game Content (8 uniue pairs)
    const Emojis = ["🦄", "🐸", "🐷", "🐯", "🦋", "🐢", "🦒", "🦩"];


    





})