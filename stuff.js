const hands = [
    { symbol: 'Rock', beat1: 'crushes', beat2: 'crushes' },
    { symbol: 'Paper', beat1: 'covers', beat2: 'disproves'}, 
    { symbol: 'Scissors', beat1: 'cuts', beat2: 'decapitates'},
    { symbol: 'Lizard', beat1: 'eats', beat2: 'poisons'}, 
    { symbol: 'Spock', beat1: 'vaporizes', beat2: 'smashes'}
];

function main() {
    //alert(computerPlay());
}



function computerPlay() {
    return hands[Math.floor(Math.random() * hands.length)];
}

function playRound(playerSelection, computerSelection) {
    const message = [
        `Tie!`, 
        `You Win! ${playerSelection} ${beat} ${computerSelection}`, 
        `You Lose! ${computerSelection} ${beat} ${playerSelection}`
    ];
    
    let playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();

    if (playerSelection = computerSelection.toLowerCase() {
        return message
    }

    if (playerSelection = hands[0].symbol.toLowerCase()) {
        if (computerSelection = hands[2]) {
            beat = hands[2].beat1;
        }
    }
        

}