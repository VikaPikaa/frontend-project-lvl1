import * as Prime from '../logic/prime.js';
import * as indexJs from '../index.js';

function prime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  function game() {
    const target = Prime.randomNum();
    indexJs.askQuestion(target);
    const answer = indexJs.getAnswer();
    const correctAnswer = Prime.correctAnswer(target);
    const continionGame = indexJs.checkCorrect(correctAnswer === answer, correctAnswer, answer);
    if (continionGame) {
      if (indexJs.continionGame()) {
        game();
      }
    }
  }

  game();
}
export default prime;