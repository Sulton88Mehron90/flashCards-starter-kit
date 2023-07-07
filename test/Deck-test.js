const chai = require('chai');
const expect = chai.expect;

const { createDeck, totalCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('createDeck', function() {
  let card1, card2, card3, deck;

  beforeEach(function() {
    card1 = createCard(1, 'What animal Sulton has now?', ['dog', 'ball python', 'gecko lizard'], 'dog');
    card2 = createCard(14, 'What country Mehron is visiting now?', ['Russia', 'Ukraine', 'Tajikistan'], 'Tajikistan');
    card3 = createCard(12, "What is Sulton's middle name?", ['Mehron', 'Ali', 'Romin'], 'Romin');
    deck = createDeck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should create an array containing all the cards', function() {
    expect(deck).to.be.deep.equal([card1, card2, card3]);
  });
});

describe('totalCards', function() {
  let card1, card2, card3, deck;

  beforeEach(function() {
    card1 = createCard(1, 'What animal Sulton has now?', ['dog', 'ball python', 'gecko lizard'], 'dog');
    card2 = createCard(14, 'What country Mehron is visiting now?', ['Russia', 'Ukraine', 'Tajikistan'], 'Tajikistan');
    card3 = createCard(12, "What is Sulton's middle name?", ['Mehron', 'Ali', 'Romin'], 'Romin');
    deck = createDeck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(totalCards).to.be.a('function');
  });

  it('should know how many cards are in the deck', function() {
    const numberOfCards = totalCards(deck);
    expect(numberOfCards).to.be.equal(3);
  });
});
