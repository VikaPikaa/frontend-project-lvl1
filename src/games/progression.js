import randomNum from '../randomNum.js';
import gameProgress from '../index.js';

const index = randomNum(10);
let answer = 0;

const progressionFunction = () => {
  const progression = [randomNum(10)];
  const term = randomNum(100);

  for (let i = 0; i <= 10; i += 1) {
    if (i === 0) {
      progression[i] += term;
    } else {
      progression[i] = progression[i - 1] + term;
    }
  }
  answer = progression[index];
  progression[index] = '..';
  return progression.join(' ');
};

const progression = () => {
  const question = 'What number is missing in the progression?';
  const target = progressionFunction();
  const correctAnswer = `${answer}`;
  return [question, target, correctAnswer];
};
export default gameProgress(progression);
