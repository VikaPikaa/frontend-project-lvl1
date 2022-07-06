import { randomNum, randomSingleNum } from '../math.js';

const index = randomSingleNum();
let answer = 0;

const progressionFunction = () => {
  const progression = [randomSingleNum()];
  const term = randomNum();

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
export default progression;
