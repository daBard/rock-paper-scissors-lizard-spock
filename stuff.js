//Different signs and their verbs
const hands = [
    { sign: 'rock', beat1: 'crushes', beat2: 'crushes' },
    { sign: 'paper', beat1: 'covers', beat2: 'disproves'}, 
    { sign: 'scissors', beat1: 'cuts', beat2: 'decapitates'},
    { sign: 'lizard', beat1: 'eats', beat2: 'poisons'}, 
    { sign: 'spock', beat1: 'vaporizes', beat2: 'smashes'}
];

//set global variables
const selectBox = document.getElementById('hands');

let numOfGames = 0;
let playerWins = 0;
let computerWins = 0;

//On change of 
selectBox.onchange = function() {
    if (numOfGames < 5) {
        game();
        numOfGames++; 
        console.log(numOfGames);
    }
    if (numOfGames >= 5) {
        console.clear();
        console.log(`Player has won ${playerWins} times!`);
        console.log(`Computer has won ${computerWins} times!`);
    }
    selectBox.selectedIndex = 0;
}

function game() {
    const playerSelection = selectBox.options[selectBox.selectedIndex].value;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}


function computerPlay() {
    return hands[Math.floor(Math.random() * hands.length)].sign;
}

function playRound(pS, cS) {
    let beat;

    if (pS == cS) {
        return winMessage(null, pS, beat, cS);
    }

    if (pS == hands[0].sign) {
        if (cS == hands[2].sign) {
            beat = hands[0].beat1;
            return winMessage(true, pS, beat, cS);
        }
        else if (cS == hands[3].sign) {
            beat = hands[0].beat2;
            return winMessage(true, pS, beat, cS);  
        }
        else if (cS == hands[1].sign) {
            beat = hands[1].beat1;
            return winMessage(false, pS, beat, cS);   
        }
        else if (cS == hands[4].sign) {
            beat = hands[4].beat1;
            return winMessage(false, pS, beat, cS);   
        }
    }

    else if (pS == hands[1].sign) {
        if (cS == hands[0].sign) {
            beat = hands[1].beat1;
            return winMessage(true, pS, beat, cS);
        }
        else if (cS == hands[4].sign) {
            beat = hands[1].beat2;
            return winMessage(true, pS, beat, cS);  
        }
        else if (cS == hands[2].sign) {
            beat = hands[2].beat1;
            return winMessage(false, pS, beat, cS);   
        }
        else if (cS == hands[3].sign) {
            beat = hands[3].beat1;
            return winMessage(false, pS, beat, cS);   
        }
    }

    else if (pS == hands[2].sign) {
        if (cS == hands[1].sign) {
            beat = hands[2].beat1;
            return winMessage(true, pS, beat, cS);
        }
        else if (cS == hands[3].sign) {
            beat = hands[1].beat1;
            return winMessage(true, pS, beat, cS);  
        }
        else if (cS == hands[0].sign) {
            beat = hands[0].beat2;
            return winMessage(false, pS, beat, cS);   
        }
        else if (cS == hands[4].sign) {
            beat = hands[4].beat2;
            return winMessage(false, pS, beat, cS);   
        }
    }

    else if (pS == hands[3].sign) {
        if (cS == hands[1].sign) {
            beat = hands[3].beat1;
            return winMessage(true, pS, beat, cS);
        }
        else if (cS == hands[4].sign) {
            beat = hands[3].beat2;
            return winMessage(true, pS, beat, cS);  
        }
        else if (cS == hands[0].sign) {
            beat = hands[0].beat2;
            return winMessage(false, pS, beat, cS);   
        }
        else if (cS == hands[2].sign) {
            beat = hands[2].beat2;
            return winMessage(false, pS, beat, cS);   
        }
    }

    else if (pS == hands[4].sign) {
        if (cS == hands[0].sign) {
            beat = hands[4].beat1;
            return winMessage(true, pS, beat, cS);
        }
        else if (cS == hands[2].sign) {
            beat = hands[4].beat2;
            return winMessage(true, pS, beat, cS);  
        }
        else if (cS == hands[1].sign) {
            beat = hands[1].beat2;
            return winMessage(false, pS, beat, cS);   
        }
        else if (cS == hands[3].sign) {
            beat = hands[3].beat2;
            return winMessage(false, pS, beat, cS);   
        }
    }

}
    

function winMessage(winner, playerSelection, beat, computerSelection) {
    if (winner == null) {
        return `Tie!`;
    }
    else if (winner) { 
        computerSelection = checkIfSpock(computerSelection);
        let temp = firstCapital(`${playerSelection} ${beat} ${computerSelection}`);
        playerWins++;
        return `You Win! ${temp}!`;
    }
    else if (!winner) { 
        playerSelection = checkIfSpock(playerSelection);
        let temp = firstCapital(`${computerSelection} ${beat} ${playerSelection}`);
        computerWins++;
        return `You Lose! ${temp}!`;
    } 
}

function firstCapital(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function checkIfSpock(string) {
    if (string == 'spock') { return firstCapital(string); }
    else { return string; }
}