import * as Progression from '../src/games/progression.js';
import * as indexJs from '../src/index.js';

console.log('What number is missing in the progression?');

function game() {
  Progression.getProgression();
  const target = Progression.getProgression();
  indexJs.askQuestion(target);
  const answer = indexJs.getAnswer();
  const correctAnswer = Progression.correctAnswer();
  const continionGame = indexJs.checkCorrect(correctAnswer === answer, correctAnswer, answer);
  if (continionGame) {
    if (indexJs.continionGame()) {
      game();
    }
  }
}

game();
