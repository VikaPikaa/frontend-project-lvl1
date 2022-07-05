import * as Gcd from '../src/logic/gcd.js';
import * as indexJs from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');

function game() {
  const target = Gcd.randomNums();
  indexJs.askQuestion(target);
  const answer = indexJs.getAnswer();
  const correctAnswer = Gcd.correctAnswer(target);
  const continionGame = indexJs.checkCorrect(correctAnswer === answer, correctAnswer, answer);
  if (continionGame) {
    if (indexJs.continionGame()) {
      game();
    }
  }
}

game();
