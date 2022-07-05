import * as Gcd from '../logic/gcd.js';
import * as indexJs from '../index.js';

function gcd() {
  console.log('Find the greatest common divisor of given numbers.');

  function gameGcd() {
    const target = Gcd.randomNums();
    indexJs.askQuestion(target);
    const answer = indexJs.getAnswer();
    const correctAnswer = Gcd.correctAnswer(target);
    const continionGame = indexJs.checkCorrect(correctAnswer === answer, correctAnswer, answer);
    if (continionGame) {
      if (indexJs.continionGame()) {
        gameGcd();
      }
    }
  }

  gameGcd();
}
export default gcd;
