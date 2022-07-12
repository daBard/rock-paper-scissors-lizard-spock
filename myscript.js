// DOM ELEMENTS
const docScore = document.querySelector('#score');
const docTotal = document.querySelector('#total');
const docCompSign = document.querySelector('#comp-sign-img');
const docWinner = document.querySelector('#win-loose');
const docCondition = document.querySelector('#condition');
const docPlayerSigns = document.querySelectorAll('.player-sign img');
const docAboutLink = document.querySelector('#about-link');
const docAboutBox = document.querySelector('#about');
const docResetLink = document.querySelector('#reset-link');
const docResetBox = document.querySelector('#reset-confirmation');
const docResetYes = document.querySelector('#reset-y');

//Different signs and their verbs
const hands = [
    { sign: 'rock', beatVerb1: 'crushes', beatVerb2: 'crushes', img: 'img/rock.jpg'},
    { sign: 'paper', beatVerb1: 'covers', beatVerb2: 'disproves', img: 'img/paper.jpg'}, 
    { sign: 'scissors', beatVerb1: 'cuts', beatVerb2: 'decapitates', img: 'img/scissors.jpg'},
    { sign: 'lizard', beatVerb1: 'eats', beatVerb2: 'poisons', img: 'img/lizard.jpg'}, 
    { sign: 'spock', beatVerb1: 'vaporizes', beatVerb2: 'smashes', img: 'img/spock.jpg'}
];

//set global variables
let numOfGames = 0;
let playerWins = 0;
let computerWins = 0;
let gameOn = false;

//set event listeners on clickable content
docAboutLink.addEventListener('click', function(){
    docAboutBox.classList.toggle('blocker');
    docAboutBox.classList.toggle('hidden');
});

docAboutBox.addEventListener('click', function(e){
    if (docAboutBox == e.target) {
        docAboutBox.classList.toggle('blocker');
        docAboutBox.classList.toggle('hidden');
    }
});

docResetLink.addEventListener('click', function() {
    docResetBox.classList.toggle('blocker');
    docResetBox.classList.toggle('hidden');
});

docResetBox.addEventListener('click', function(e){
    if (docResetBox == e.target) {
        docResetBox.classList.toggle('blocker');
        docResetBox.classList.toggle('hidden');
    }
});

docResetYes.addEventListener('click', function(){
    resetScore();
    resetGame('START!');
    docCompSign.src = hands[0].img;
    docResetBox.classList.toggle('blocker');
    docResetBox.classList.toggle('hidden');
});

//Build array of player signs and add event listener that either runs game or resets game
Array.from(docPlayerSigns).forEach(docPlayerSign => docPlayerSign.addEventListener('click', function(e){ 
    if (gameOn == false) {
        gameOn = true;
        for (let i = 0; i < docPlayerSigns.length; i++) {
            if (docPlayerSigns[i].id != e.target.id) { docPlayerSigns[i].classList.add('not-picked'); }
            docPlayerSigns[i].classList.remove('pickable');    
        }
        game(e.target.id);
    }
    else {        
      resetGame('CONTINUE!');  
    }
}));

function resetGame(message) {
    for (let i = 0; i < docPlayerSigns.length; i++) {
        docPlayerSigns[i].classList.remove('winner');
        docPlayerSigns[i].classList.remove('looser');
        docPlayerSigns[i].classList.remove('not-picked');
        docPlayerSigns[i].classList.add('pickable');    
    }
    docCompSign.classList.remove('winner');
    docCompSign.classList.remove('looser');
    docWinner.textContent = message;
    docCondition.textContent = 'Rock, Paper, Scissors, Lizard, Spock...'
    gameOn = false;
}

function resetScore() {
    numOfGames = 0;
    playerWins = 0;
    computerWins = 0;
    setScore();
}

function setScore() {
    docScore.textContent = `PLAYER ${playerWins} : ${computerWins} COMPUTER`;
    docTotal.textContent = `TOTAL: ${numOfGames}`;
}

//Computer randomly picks and shows sign
function computerPlay() {
    let hand = hands[Math.floor(Math.random() * hands.length)];
    docCompSign.src = hand.img;
    return hand.sign;
}

//Plays a round and returns win-message
function game(_playerSelect) {
    let beatVerb;
    _computerSelect = computerPlay();

    if (_playerSelect == _computerSelect) {
        return winMessage(null, _playerSelect, beatVerb, _computerSelect);
    }

    //ROCK
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

    //PAPER
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

    //SCISSORS
    else if (_playerSelect == hands[2].sign) {
        if (_computerSelect == hands[1].sign) {
            beatVerb = hands[2].beatVerb1;
            return winMessage(true, _playerSelect, beatVerb, _computerSelect);
        }
        else if (_computerSelect == hands[3].sign) {
            beatVerb = hands[2].beatVerb2;
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

    //LIZARD
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

    //SPOCK
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
    numOfGames++;
    if (_winner == null) {
        docCompSign.classList.add('looser');
        document.querySelector(`#${_playerSelection}`).classList.add('looser');

        _playerSelection = checkIfSpock(_playerSelection);
        docWinner.textContent = 'TIE!';
        docCondition.textContent = `You both picked ${_playerSelection}...`;
        setScore();
    }
    else if (_winner) { 
        docCompSign.classList.add('looser');
        document.querySelector(`#${_playerSelection}`).classList.add('winner');

        _computerSelection = checkIfSpock(_computerSelection);
        docWinner.textContent = 'YOU WIN!';
        docCondition.textContent = firstCapital(`${_playerSelection} ${_beatVerb} ${_computerSelection}...`);
        
        playerWins++;
        setScore();
    }
    else if (!_winner) { 
        docCompSign.classList.add('winner');
        document.querySelector(`#${_playerSelection}`).classList.add('looser');

        _playerSelection = checkIfSpock(_playerSelection);
        docWinner.textContent = 'YOU LOOSE!';
        docCondition.textContent = firstCapital(`${_computerSelection} ${_beatVerb} ${_playerSelection}...`);

        computerWins++;
        setScore();
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