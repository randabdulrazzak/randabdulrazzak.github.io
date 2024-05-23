let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    const rand = Math.floor(Math.random() * 10);
    return rand;
}

const compareGuesses = (human, computer, target) => {
    const humanDiff = Math.abs(human - target);
    const compDiff = Math.abs(computer - target);
    if (humanDiff <= compDiff) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        return humanScore += 1;
    } else if (winner === 'computer') {
        return computerScore += 1;
    }
}

const advanceRound = () => {
    return currentRoundNumber += 1;
}

// const getAbsoluteDistance = (num1, num2) => {
//     const dist = Math.abs(num1 - num2);
//     return dist;

// }