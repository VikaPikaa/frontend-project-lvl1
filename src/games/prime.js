import randomNum from '../randomNum.js';
import gameProgress from '../index.js';

const primeFunction = (number) => {
  if (number <= 1) return false;

  let flag = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

const prime = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const target = randomNum(100);
  const correctAnswer = primeFunction(target) ? 'yes' : 'no';
  return [question, target, correctAnswer];
};
export default gameProgress(prime);
