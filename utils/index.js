function isOnlyOneOptionTrue(options) {
  const trueOptions = options.filter((option) => option.isRight);
  return trueOptions.length === 1;
}

const hasFourOptions = (options) => {
  return options.length === 4;
};

const hasUniqueAnd16CharacterIds = (questions) => {
  const questionIds = new Set();

  questions.forEach((question) => {
    // Ensure the ID is unique
    expect(questionIds.has(question.id)).toBe(false);

    // Ensure the ID is 16 characters long
    //expect(question.id).toHaveLength(16);

    questionIds.add(question.id);
  });
};

module.exports = {
  isOnlyOneOptionTrue,
  hasFourOptions,
  hasUniqueAnd16CharacterIds,
};
