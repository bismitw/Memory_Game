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
    const emojis = ["🦄", "🐸", "🐷", "🐯", "🦋", "🐢", "🦒", "🦩"];


    //Create single card -Build HTML structure
    function createCard(emoji , index){
        const card = document.createElement('div');
        card.classList.emoji = emoji // stores emoji invisibly
        card.dataset.index= index ; //position tracker
        card.innerHTML = `
            <div class= "card-back">? </div>
            <div class= "card-front">${emoji}</div>

        `;
        return card;

    }

    //Shuffle array 
    //professional card shuffling algorithm.
    function shuffle(array){
        const shuffled = [...array]; //... spread operator clones array original array stays unchanged
        for(let i = shuffled.length-1; i>0; i--){ //starts from last item Each position gets random swap partner
            const j = math.floor(math.random()*(i+1)); //Random index
            [shuffled[i], shuffled[j] = shuffled[i], shuffled[j]] //swap
        }
        return shuffled;

    }

    //Start new game Full reset 
    function startNewGame(){
        gameActive = true; //Allow clicks
        moves = 0; //reset counter
        time = 0; //reset timer
        flippedCards = []; //Clear flipped
        gameBoard.innerHTML= '' //Empty Board
        gameOverScreen.classList.add('hidden'); //hide win screen
        clearInterval(timer); //stop timer

        //create 8 pairs (16 total cards)
        const gameEmojis = [...emojis.slice(0, cardCount/2), ...emojis.slice(0, cardCount/2)];
        const shuffledEmojis = shuffle(gameEmojis);

        //Build all cards and Add to board
        cards = shuffledEmojis.map((emoji, index) => createCard(emoji, index));
        cards.forEach(card => gameBoard.appendChild(card));


        //Reset Displays
        movesDisplay.textContent = moves;
        timeDisplay.textContent= '00:00';

    }






})