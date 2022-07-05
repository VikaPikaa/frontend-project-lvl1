import { randomNum } from '../helper.js';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operators.length);
  return operators[rand];
};

const expressionCalc = () => `${randomNum()} ${randomOperator()} ${randomNum()}`;

// eslint-disable-next-line no-eval
const correctAnswer = (expression) => `${eval(expression)}`;

export {
  expressionCalc, correctAnswer,
};
