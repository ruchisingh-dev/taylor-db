const QUIZ = require("../quizzes/quizzes.json");
const { isOnlyOneOptionTrue } = require("../utils");

test("Only one option should be true", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionList.forEach((question) => {
      expect(isOnlyOneOptionTrue(question.options)).toBe(true);
    });
  });
});
