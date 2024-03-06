const QUIZ = require("../quizzes/quizzes.json");
const { hasUniqueAnd16CharacterIds } = require("../utils");

test("should have unique and 16-character IDs for each question", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionList.forEach((question) => {
      hasUniqueAnd16CharacterIds([question]); // Pass an array with the question for this function
    });
  });
});
