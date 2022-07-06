import { randomNum, primeFunction } from '../math.js';

const prime = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const target = randomNum();
  const correctAnswer = primeFunction(target);
  return [question, target, correctAnswer];
};
export default prime;
