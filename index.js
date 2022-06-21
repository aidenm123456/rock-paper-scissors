// event listeners start

window.onload = function() {

    const f1 = () => { isWinner(); playRound("rock"); isWinner(); if (isWinner() == true) {btn1.removeEventListener('click', f1); btn2.removeEventListener('click', f2); btn3.removeEventListener('click', f3);} };
    const f2 = () => { isWinner(); playRound("paper"); isWinner(); if (isWinner() == true) {btn1.removeEventListener('click', f1); btn2.removeEventListener('click', f2); btn3.removeEventListener('click', f3);} };
    const f3 = () => { isWinner(); playRound("scissors"); isWinner(); if (isWinner() == true) {btn1.removeEventListener('click', f1); btn2.removeEventListener('click', f2); btn3.removeEventListener('click', f3);} };

    const btn1 = document.querySelector('#btn1');
    btn1.addEventListener('click', f1);

    const btn2 = document.querySelector('#btn2');
    btn2.addEventListener('click', f2);

    const btn3 = document.querySelector('#btn3');
    btn3.addEventListener('click', f3);


}



// event listeners end


// function playerSelection() {

//     let playerTurn = window.prompt("Please type either rock, paper or scissors","");

//     if (playerTurn == "rock" || playerTurn == "Rock" || playerTurn == "ROCK") {
//         return ("rock")
//     }

//     else if (playerTurn == "paper" || playerTurn == "Paper" || playerTurn == "PAPER") {
//         return ("paper")
//     }

//     else if (playerTurn == "scissors" || playerTurn == "Scissors" || playerTurn == "SCISSORS") {
//         return ("paper")
//     }

//     else {
//         return ("selection invalid. Please choose rock, paper, or scissors.")
//     }
// }

function isWinner() {

    const gameOver = document.querySelector('#gameOver');

    if (playerRoundsWon >= 3) {
        //GAME OVER
        gameOver.textContent = "YOU HAVE WON THIS GAME!"
        return true;
    }

    else if (computerRoundsWon >= 3) {
        gameOver.textContent = "YOU HAVE LOST THIS GAME :("
        return true;
    }

    else {
        return false;
    }
}



function computerSelection() {

    let computerTurn = 0;
    computerTurn = Math.floor(Math.random() * 3) + 1;;

    if (computerTurn == 1) {
        return ("rock")
    }

    else if (computerTurn == 2) {
        return ("paper")
     }

    else {
        return ("scissors")
    }

}

let playerRoundsWon = 0; 
let computerRoundsWon = 0;


function playRound(rps) {

    const results = document.querySelector('#results');
    const winMessage = "Round Win!";
    const lostMessage = "Round Lost :(";
    const tieMessage = "Round Tie!";

    const playerRound = rps;
    const computerRound = computerSelection();
    let playerWins = null;


    const playerRounds = document.querySelector('#playerRounds');
    const computerRounds = document.querySelector('#computerRounds');
    const gameOver = document.querySelector('#gameOver');

    // let playerRoundsWon = 0; 
    // let computerRoundsWon = 0;

    // console.log(playerRound)
    // console.log(computerRound)

    // rock

    if (playerRound == "rock" && computerRound == "paper") {
        playerWins = false;
        console.log("player's rock loses to paper")
        results.textContent = lostMessage;
        computerRoundsWon++
        computerRounds.textContent = computerRoundsWon.toString();
        return (playerWins)
    }

    else if (playerRound == "rock" && computerRound == "scissors") {
        playerWins = true;
        console.log("player's rock beats scissors")
        results.textContent = winMessage;
        playerRoundsWon++
        playerRounds.textContent = playerRoundsWon.toString();
        return (playerWins)
    }

    else if (playerRound == "rock" && computerRound == "rock") {
        console.log("player's rock ties rock")
        results.textContent = tieMessage;
    }

    // paper

    if (playerRound == "paper" && computerRound == "rock") {
        playerWins = true;
        console.log("player's paper beats to rock")
        results.textContent = winMessage;
        playerRoundsWon++
        playerRounds.textContent = playerRoundsWon.toString();
        return (playerWins)
    }

    else if (playerRound == "paper" && computerRound == "scissors") {
        playerWins = false;
        console.log("player's paper loses to scissors")
        results.textContent = lostMessage;
        computerRoundsWon++
        computerRounds.textContent = computerRoundsWon.toString();
        return (playerWins)
    }

    else if (playerRound == "paper" && computerRound == "paper") {
        console.log("player's paper ties paper")
        results.textContent = tieMessage;
    }

    // scissors

    if (playerRound == "scissors" && computerRound == "rock") {
        playerWins = false;
        console.log("player's scissors loses to rock")
        results.textContent = lostMessage;
        computerRoundsWon++
        computerRounds.textContent = computerRoundsWon.toString();
        return (playerWins)
    }

    else if (playerRound == "scissors" && computerRound == "paper") {
        playerWins = true;
        console.log("player's scissors beats paper")
        results.textContent = winMessage;
        playerRoundsWon++
        playerRounds.textContent = playerRoundsWon.toString();
        return (playerWins)
    }

    else if (playerRound == "scissors" && computerRound == "scissors") {
        console.log("player's scissors ties scissors")
        results.textContent = tieMessage;
    }



    // //check for winner

    // if (playerRoundsWon >= 3) {
    //     //GAME OVER
    //     gameOver.textContent = "YOU HAVE WON THIS GAME!"
    // }

    // else if (computerRoundsWon >= 3) {
    //     gameOver.textContent = "YOU HAVE LOST THIS GAME :("

    // }

}


function game() {

    const playerRounds = document.querySelector('#playerRounds');
    const computerRounds = document.querySelector('#computerRounds');

    let playerRoundsWon = 0; 
    let computerRoundsWon = 0;

    for (let i = 0; i < 5; i++) {

        if (playRound() == true) {
            playerRoundsWon++
            playerRounds.textContent = playerRoundsWon.toString();

            if (playerRoundsWon >= 3) {
                return("the winner is THE PLAYER!!!")
            }

            else if (computerRoundsWon >= 3) {
                return("the winner is THE COMPUTER :(")
            }


        }

        else {

            computerRoundsWon ++
            computerRounds.textContent = computerRoundsWon.toString();

            if (playerRoundsWon >= 3) {
                return("the winner is THE PLAYER!!!")
            }

            else if (computerRoundsWon >= 3) {
                return("the winner is THE COMPUTER :(")
            }
        }


    }


}