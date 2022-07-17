import randomNum from '../randomNum.js';
import gameProgress from '../index.js';

const even = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const target = randomNum(100);
  const correctAnswer = (target % 2 === 0) ? 'yes' : 'no';
  return [question, target, correctAnswer];
};
export default gameProgress(even);
