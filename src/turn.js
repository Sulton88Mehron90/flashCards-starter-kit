const evaluateGuess = (guess, correctAnswer) => {
  let result = '';
  if (guess === correctAnswer) {
    result = 'Correct! ✅';
  } else {
    result = 'Incorrect! ❎';
  };
  console.log(result);
  return result;
};

module.exports = {
  evaluateGuess
};
   