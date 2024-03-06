const QUIZ = require("../quizzes/quizzes.json");
const { isOnlyOneOptionTrue } = require("../utils");

test("Only one option should be true", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionList.forEach((question) => {
      console.log(question);
      expect(isOnlyOneOptionTrue(question.options)).toBe(true);
    });
  });
});

test("Options Array should have a length of 4", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionList.forEach((question) => {
      console.log(question)
      expect(question.options.length).toBe(4);

    });
  });
});

test("Count Length of Questions", () => {
  QUIZ.forEach((quiz) => {
    console.log(`${quiz.name}: ${quiz.questionList.length}`);
  });
});
