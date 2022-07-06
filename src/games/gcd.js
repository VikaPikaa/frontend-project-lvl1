import { randomNum, gcdFunction } from '../math.js';

const gcd = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const target = `${randomNum()} ${randomNum()}`;
  const correctAnswer = gcdFunction(target);
  return [question, target, correctAnswer];
};
export default gcd;
