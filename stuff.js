const hands = [
    { symbol: 'Rock', beat1: 'crushes', beat2: 'crushes' },
    { symbol: 'Paper', beat1: 'covers', beat2: 'disproves'}, 
    { symbol: 'Scissors', beat1: 'cuts', beat2: 'decapitates'},
    { symbol: 'Lizard', beat1: 'eats', beat2: 'poisons'}, 
    { symbol: 'Spock', beat1: 'vaporizes', beat2: 'smashes'}
];

function main() {
    const playerSelection = hands[0].symbol;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

function computerPlay() {
    return hands[Math.floor(Math.random() * hands.length)].symbol;
}

function playRound(playerSelection, computerSelection) {
    let beat;

    if (playerSelection == computerSelection) {
        return messages[0];
    }

    if (playerSelection == hands[0].symbol.toLowerCase()) {
        if (computerSelection == hands[2].symbol) {
            beat = hands[0].beat1;
            return messages[1]
        }
        else if (computerSelection == hands[3].symbol) {
            beat = hands[0].beat2;
            return messages[1]    
        }
        else if (computerSelection == hands[1].symbol) {
            beat = hands[1].beat2;
            return messages[2]    
        }
        else if (computerSelection == hands[4].symbol) {
            beat = hands[4].beat2;
            return messages[2]    
        }

        
    }

    function winMessage(playerSelection, beat, computerSelection) {
        let messages = [
            `Tie!`, 
            `You Win! ${playerSelection} ${beat} ${computerSelection}`, 
            `You Lose! ${computerSelection} ${beat} ${playerSelection}`
        ];
    }

}