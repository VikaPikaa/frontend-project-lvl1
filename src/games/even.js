import { randomNum } from '../math.js';

const even = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const target = randomNum();
  const correctAnswer = (target % 2 === 0) ? 'yes' : 'no';
  return [question, target, correctAnswer];
};
export default even;
