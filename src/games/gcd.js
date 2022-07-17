import randomNum from '../randomNum.js';
import gameProgress from '../index.js';

const checkGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return checkGcd(b, a % b);
};

const gcdFunction = (nums) => {
  let num1 = '';
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === ' ') break;
    num1 += nums[i];
  }
  const numReplace = `${num1} `;
  num1 = +num1;
  const num2 = +(nums.replace(numReplace, ''));

  return `${checkGcd(num1, num2)}`;
};

const gcd = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const target = `${randomNum(100)} ${randomNum(100)}`;
  const correctAnswer = gcdFunction(target);
  return [question, target, correctAnswer];
};
export default gameProgress(gcd);
