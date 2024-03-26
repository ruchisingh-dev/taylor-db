const QUIZ = require("../../quizzes/quizzes.json");
const { hasFourOptions } = require("../../utils");

test("Options Array should have a length of 4", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionList.forEach((question) => {
      // if(!hasFourOptions(question.options)){
      //   console.log(`${question.options}`)
      // }
      expect(hasFourOptions(question.options)).toBe(true);
    });
  });
});
