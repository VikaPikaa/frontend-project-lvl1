import { randomNum, randomOperator } from '../math.js';

const calc = () => {
  const question = 'What is the result of the expression?';
  const target = `${randomNum()} ${randomOperator()} ${randomNum()}`;
  // eslint-disable-next-line no-eval
  const correctAnswer = `${eval(target)}`;
  return [question, target, correctAnswer];
};
export default calc;
