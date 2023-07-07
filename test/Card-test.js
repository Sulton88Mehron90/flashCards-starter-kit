const chai = require('chai');
const expect = chai.expect;
const { createCard } = require('../src/card');

describe('createCard', function() {
  let card;

  beforeEach(function() {
    card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });

  // Sad path testing
  it('should return an error if not all parameters are provided', function() {
    let errorCard;
    try {
      errorCard = createCard();
    } catch (err) {
      expect(err).to.be.an('error');
      expect(err.message).to.equal('Parameters missing');
    }
    expect(errorCard).to.be.undefined;
  });

  // beforeEach testing
  afterEach(function() {
    console.log('End of createCard tests');
  });
});
