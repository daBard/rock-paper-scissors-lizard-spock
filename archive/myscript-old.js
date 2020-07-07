//Different signs and their verbs
const hands = [
    { sign: 'rock', beatVerb1: 'crushes', beatVerb2: 'crushes' },
    { sign: 'paper', beatVerb1: 'covers', beatVerb2: 'disproves'}, 
    { sign: 'scissors', beatVerb1: 'cuts', beatVerb2: 'decapitates'},
    { sign: 'lizard', beatVerb1: 'eats', beatVerb2: 'poisons'}, 
    { sign: 'spock', beatVerb1: 'vaporizes', beatVerb2: 'smashes'}
];

//set global variables
const selectBox = document.getElementById('hands');

let numOfGames = 0;
let playerWins = 0;
let computerWins = 0;

//On change of select-box
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

//Picks signs, plays a round and prints win-message 
function game() {
    const playerSelection = selectBox.options[selectBox.selectedIndex].value;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

//Computer randomly picks sign
function computerPlay() {
    return hands[Math.floor(Math.random() * hands.length)].sign;
}

//Plays a round and returns win-message
function playRound(_playerSelect, _computerSelect) {
    let beatVerb;

    if (_playerSelect == _computerSelect) {
        return winMessage(null, _playerSelect, beatVerb, _computerSelect);
    }

    if (_playerSelect == hands[0].sign) {
        if (_computerSelect == hands[2].sign) {
            beatVerb = hands[0].beatVerb1;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);
        }
        else if (_computerSelect == hands[3].sign) {
            beatVerb = hands[0].beatVerb2;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);  
        }
        else if (_computerSelect == hands[1].sign) {
            beatVerb = hands[1].beatVerb1;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
        else if (_computerSelect == hands[4].sign) {
            beatVerb = hands[4].beatVerb1;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
    }

    else if (_playerSelect == hands[1].sign) {
        if (_computerSelect == hands[0].sign) {
            beatVerb = hands[1].beatVerb1;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);
        }
        else if (_computerSelect == hands[4].sign) {
            beatVerb = hands[1].beatVerb2;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);  
        }
        else if (_computerSelect == hands[2].sign) {
            beatVerb = hands[2].beatVerb1;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
        else if (_computerSelect == hands[3].sign) {
            beatVerb = hands[3].beatVerb1;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
    }

    else if (_playerSelect == hands[2].sign) {
        if (_computerSelect == hands[1].sign) {
            beatVerb = hands[2].beatVerb1;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);
        }
        else if (_computerSelect == hands[3].sign) {
            beatVerb = hands[1].beatVerb1;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);  
        }
        else if (_computerSelect == hands[0].sign) {
            beatVerb = hands[0].beatVerb2;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
        else if (_computerSelect == hands[4].sign) {
            beatVerb = hands[4].beatVerb2;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
    }

    else if (_playerSelect == hands[3].sign) {
        if (_computerSelect == hands[1].sign) {
            beatVerb = hands[3].beatVerb1;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);
        }
        else if (_computerSelect == hands[4].sign) {
            beatVerb = hands[3].beatVerb2;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);  
        }
        else if (_computerSelect == hands[0].sign) {
            beatVerb = hands[0].beatVerb2;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
        else if (_computerSelect == hands[2].sign) {
            beatVerb = hands[2].beatVerb2;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
    }

    else if (_playerSelect == hands[4].sign) {
        if (_computerSelect == hands[0].sign) {
            beatVerb = hands[4].beatVerb1;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);
        }
        else if (_computerSelect == hands[2].sign) {
            beatVerb = hands[4].beatVerb2;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);  
        }
        else if (_computerSelect == hands[1].sign) {
            beatVerb = hands[1].beatVerb2;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
        else if (_computerSelect == hands[3].sign) {
            beatVerb = hands[3].beatVerb2;
            return winMessage(false, _playerSelect, beatVerb, _computerSelect);   
        }
    }
}
    
//Builds the win-message
function winMessage(_winner, _playerSelection, _beatVerb, _computerSelection) {
    if (_winner == null) {
        _playerSelection = checkIfSpock(_playerSelection);
        return `Tie! You both picked ${_playerSelection}!`;
    }
    else if (_winner) { 
        _computerSelection = checkIfSpock(_computerSelection);
        let temp = firstCapital(`${_playerSelection} ${_beatVerb} ${_computerSelection}`);
        playerWins++;
        return `You Win! ${temp}!`;
    }
    else if (!_winner) { 
        _playerSelection = checkIfSpock(_playerSelection);
        let temp = firstCapital(`${_computerSelection} ${_beatVerb} ${_playerSelection}`);
        computerWins++;
        return `You Lose! ${temp}!`;
    } 
}

//First letter capitalized
function firstCapital(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//If spock -> Spock
function checkIfSpock(string) {
    if (string == 'spock') { return firstCapital(string); }
    else { return string; }
}