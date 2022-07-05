// const number = Math.floor(Math.random() * 100) + 1;
const randomNum = () => Math.floor(Math.random() * 100) + 1;

const randomNums = () => `${randomNum()} ${randomNum()}`;

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

// eslint-disable-next-line no-eval
const correctAnswer = (nums) => {
  let num1 = '';
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === ' ') break;
    num1 += nums[i];
  }
  const numReplace = `${num1} `;
  num1 = +num1;
  const num2 = +(nums.replace(numReplace, ''));

  return `${gcd(num1, num2)}`;
};

export {
  randomNums, correctAnswer,
};
