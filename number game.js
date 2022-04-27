let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*10)
}

const compareGuesses = (humanguess,computerguess, secretnumber) => {
  if (Math.abs(humanguess - secretnumber) <= Math.abs(computerguess - secretnumber)) {
    return true;
  } else {
    return false;
  }
  
  if (humanguess > 9) {
    const al = alert("dog");
    return al;
  }
}

const updateScore = score => {
  if (score === 'human'){
    humanScore += 1;
  } else if (score === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
