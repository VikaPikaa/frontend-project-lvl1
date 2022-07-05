// const number = Math.floor(Math.random() * 100) + 1;

const randomNum = () => Math.floor(Math.random() * 100) + 1;

const correctAnswer = (number) => ((number % 2 === 0) ? 'yes' : 'no');

export {
  randomNum, correctAnswer,
};
