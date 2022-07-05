import * as Progression from '../logic/progression.js';
import * as indexJs from '../index.js';

function progression() {
  console.log('What number is missing in the progression?');

  function game() {
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
}
export default progression;