const QUIZ = require("../../quizzes/quizzes.json");
const { isOnlyOneOptionTrue } = require("../../utils");

test("Only one option should be true", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionList.forEach((question) => {
      // if (!isOnlyOneOptionTrue(question.options)) {
      //   console.error(`Error: Only one option should be true but id:'${question.id}'\n${question.options}`)
      // }
      expect(isOnlyOneOptionTrue(question.options)).toBe(true);
      
    });
  });
});
