const randomNum = () => Math.floor(Math.random() * 100) + 1;
const randomSingleNum = () => Math.floor(Math.random() * 10) + 1;

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operators.length);
  return operators[rand];
};

const primeFunction = (number) => {
  if (number <= 1) return false;

  let flag = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  }
  return flag ? 'yes' : 'no';
};

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

export {
  randomNum, randomSingleNum, randomOperator, primeFunction, gcdFunction,
};
