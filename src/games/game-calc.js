import * as Calc from '../logic/calc.js';
import * as indexJs from '../index.js';

function calc() {
  console.log('What is the result of the expression?');

  function game() {
    const target = Calc.expressionCalc();
    indexJs.askQuestion(target);
    const answer = indexJs.getAnswer();
    const correctAnswer = Calc.correctAnswer(target);
    const continionGame = indexJs.checkCorrect(correctAnswer === answer, correctAnswer, answer);
    if (continionGame) {
      if (indexJs.continionGame()) {
        game();
      }
    }
  }

  game();
}
export default calc;
