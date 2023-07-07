const createCard = (id, question, answers, correctAnswer) => {
  if (
    typeof id !== 'number' ||
    typeof question !== 'string' ||
    !Array.isArray(answers) ||
    typeof correctAnswer !== 'string'
  ) {
    return undefined;
  }

  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  };
};

module.exports = {
  createCard
};
