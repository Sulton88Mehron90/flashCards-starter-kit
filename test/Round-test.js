const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentageCorrect, endRound } = require('../src/round');

describe('Round', function() {
  let round, deck, card1, card2, card3;

  beforeEach(function() {
    card1 = createCard(1, 'What animal Sulton has now?', ['dog', 'ball python', 'gecko lizard'], 'dog');
    card2 = createCard(14, 'What country Mehron is visiting now?', ['Russia', 'Ukraine', 'Tajikistan'], 'Tajikistan');
    card3 = createCard(12, "What is Sulton's middle name?", ['Mehron', 'Ali', 'Romin'], 'Romin');

    deck = createDeck([card1, card2, card3]);

    round = createRound(deck);
  });

  it('Should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('Should be able to create a Round with a Deck', function() {
    expect(round.deck).to.be.deep.equal([card1, card2, card3]);
  });

  it('Should have currentCard property start as the first card in the deck', function () {
    expect(round.currentCard).to.be.deep.equal({
      id: 1,
      question: 'What animal Sulton has now?',
      answers: ['dog', 'ball python', 'gecko lizard'],
      correctAnswer: 'dog'
    });
  });

  it('Should have a turns property that starts at 0', function() {
    expect(round.turns).to.be.equal(0);
  });

  it('Should have incorrectGuesses property that starts out as empty', function() {
    expect(round.incorrectGuesses).to.be.deep.equal([]);
  });
});

describe('taking turns', function() {
  let round, deck, card1, card2, card3;

  beforeEach(function() {
    card1 = createCard(1, 'What animal Sulton has now?', ['dog', 'ball python', 'gecko lizard'], 'dog');
    card2 = createCard(14, 'What country Mehron is visiting now?', ['Russia', 'Ukraine', 'Tajikistan'], 'Tajikistan');
    card3 = createCard(12, "What is Sulton's middle name?", ['Mehron', 'Ali', 'Romin'], 'Romin');

    deck = createDeck([card1, card2, card3]);

    round = createRound(deck);
  });

  it('Should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it('Should be able to make a correct guess', function() {
    feedback = takeTurn('dog', round);

    expect(feedback).to.be.equal('Correct! ✅');
  });

  it('Should be able to make an incorrect guess', function() {
    feedback = takeTurn('ball python', round);

    expect(feedback).to.be.equal('Incorrect! ❎');
  });

  it('Should be able to track the number of turns made', function() {
    takeTurn('dog', round);
    takeTurn('Tajikistan', round);

    expect(round.turns).to.be.equal(2);
  });

  it('Should be able to change cards', function() {
    takeTurn('dog', round);

    expect(round.currentCard).to.be.deep.equal(card2);
  });

  it('Should be able to store incorrectGuesses', function() {
    takeTurn('ball python', round);
    takeTurn('Ukraine', round);

    expect(round.incorrectGuesses).to.be.deep.equal([1, 14]);
  });
});

describe('calculatePercentageCorrect', function() {
  let round, deck, card1, card2, card3;

  beforeEach(function() {
    card1 = createCard(1, 'What animal Sulton has now?', ['dog', 'ball python', 'gecko lizard'], 'dog');
    card2 = createCard(14, 'What country Mehron is visiting now?', ['Russia', 'Ukraine', 'Tajikistan'], 'Tajikistan');
    card3 = createCard(12, "What is Sulton's middle name?", ['Mehron', 'Ali', 'Romin'], 'Romin');

    deck = createDeck([card1, card2, card3]);

    round = createRound(deck);

    takeTurn('dog', round);
    takeTurn('Ukraine', round);
  });

  it('should be a function', function() {
    expect(calculatePercentageCorrect).to.be.a('function');
  });

  it('should be able to calculate the percentage of correct guesses', function() {
    percentage = calculatePercentageCorrect(round);

    expect(percentage).to.be.equal(50);
  });
});

describe('endRound', function() {
  it('should be a function', function() {
    expect(endRound).to.be.a('function');
  });

  it('should be able to end a round', function() {
    card1 = createCard(1, 'What animal Sulton has now?', ['dog', 'ball python', 'gecko lizard'], 'dog');
    card2 = createCard(14, 'What country Mehron is visiting now?', ['Russia', 'Ukraine', 'Tajikistan'], 'Tajikistan');
    card3 = createCard(12, "What is Sulton's middle name?", ['Mehron', 'Ali', 'Romin'], 'Romin');

    const deck = createDeck([card1, card2, card3]);

    const round = createRound(deck);

    takeTurn('dog', round);
    takeTurn('Ukraine', round);

    message = endRound(round);

    expect(message).to.be.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
});
