import * as Even from '../src/games/even.js';
import * as indexJs from '../src/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function game() {
  const target = Even.randomNum();
  indexJs.askQuestion(target);
  const answer = indexJs.getAnswer();
  const correctAnswer = Even.correctAnswer(target);
  const continionGame = indexJs.checkCorrect(correctAnswer === answer, correctAnswer, answer);
  if (continionGame) {
    if (indexJs.continionGame()) {
      game();
    }
  }
}

game();
