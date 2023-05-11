const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { totalCards, createDeck } = require('./deck');
const { createRound} = require('./round');
const { createCard } = require('./card')

function printMessage(deck) {

  console.log(`Welcome to FlashCards! You are playing with ${totalCards(deck)} cards.
  〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ ➰ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ 〰️ `);
};

function printQuestion(round) {
  util.main(round);
};

function start() {
  let cards = prototypeQuestions.map((card) => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer);
  });
  var deck = createDeck(cards);
  var round = createRound(deck);

  printMessage(deck);
  printQuestion(round);
};

module.exports = {
  start,
  printMessage, 
  printQuestion
};