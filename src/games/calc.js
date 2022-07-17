import randomNum from '../randomNum.js';
import gameProgress from '../index.js';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operators.length);
  return operators[rand];
};

const answer = (num1, num2, operator) => {
  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  return num1 * num2;
};

const calc = () => {
  const num1 = randomNum(100);
  const num2 = randomNum(100);
  const operator = randomOperator();

  const question = 'What is the result of the expression?';
  const target = `${num1} ${operator} ${num2}`;
  const correctAnswer = `${answer(num1, num2, operator)}`;
  return [question, target, correctAnswer];
};
export default gameProgress(calc);
