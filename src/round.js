const createRound = (deck) => ({
  deck: deck,
  currentCard: currentCard = deck[0],
  incorrectGuesses: incorrectGuesses = [],
  turns: turns = 0
});

const takeTurn = (guess, round) => {
  message = ''
  if (guess === round.currentCard.correctAnswer) {
    message = 'Correct! ✅'
  }else{
    guess !== round.currentCard.correctAnswer;
    message = 'Incorrect! ❎'
    round.incorrectGuesses.push(round.currentCard.id);
  };
  round.turns++
  round.currentCard = round.deck[round.deck.indexOf(round.currentCard) + 1]
  return message
};

const calculatePercentageCorrect = (round) => {
  let percent = 1 - round.incorrectGuesses.length / round.turns
  return percent * 100
};
  
const endRound = (round) => {
  let result = calculatePercentageCorrect(round)
  return `** Round over! ** You answered ${result}% of the questions correctly!`
};
   
  module.exports = {
    createRound, 
    takeTurn, 
    calculatePercentageCorrect, 
    endRound
};