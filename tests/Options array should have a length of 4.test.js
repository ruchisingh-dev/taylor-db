const QUIZ = require("../quizzes/quizzes.json");
const { hasFourOptions } = require("../utils");

test("Options Array should have a length of 4", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionList.forEach((question) => {
      expect(hasFourOptions(question.options)).toBe(true);
    });
  });
});
