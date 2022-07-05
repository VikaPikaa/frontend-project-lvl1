const randomNum = () => Math.floor(Math.random() * 100) + 1;

const correctAnswer = (number) => {
  let flag = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  }
  return flag ? 'yes' : 'no';
};

export {
  randomNum, correctAnswer,
};
