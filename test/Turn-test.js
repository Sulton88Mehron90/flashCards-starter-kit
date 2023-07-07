// const chai = require('chai');
// const expect = chai.expect;

// const { evaluateGuess } = require('../src/turn');

// describe('evaluateGuess', function() {
//   it('should be a function', function() {
//     expect(evaluateGuess).to.be.a('function')
//   });
  
//   it('should be able to evaluate if guess is Correct', function(){
//     let guess = 'object'
//     let correctAnswer = 'object'
//     evaluation = evaluateGuess(guess, correctAnswer)
//     expect(evaluation).to.equal('Correct! ✅')
//   })
  
//   it('should be able to evaluate if guess is Incorrect', function(){
//     let guess = 'object'
//     let correctAnswer = 'array'
//     evaluation = evaluateGuess(guess, correctAnswer)
//     expect(evaluation).to.equal('Incorrect! ❎')
//   });
// });

const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('evaluateGuess', function() {
  let guess;
  let correctAnswer;

  beforeEach(function() {
    guess = 'object';
    correctAnswer = 'object';
  });

  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });
  
  it('should be able to evaluate if guess is Correct', function() {
    const evaluation = evaluateGuess(guess, correctAnswer);
    expect(evaluation).to.equal('Correct! ✅');
  });
  
  it('should be able to evaluate if guess is Incorrect', function() {
    correctAnswer = 'array';
    const evaluation = evaluateGuess(guess, correctAnswer);
    expect(evaluation).to.equal('Incorrect! ❎');
  });
});
