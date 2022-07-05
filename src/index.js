/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

let correctCount = 0;

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
const helloUser = console.log(`Hello, ${userName}!`);

const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const checkCorrect = (answer, correctAnswer, wrongAnswer) => {
  if (answer) {
    console.log('Correct!');
    correctCount += 1;
    return true;
  }
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};

// eslint-disable-next-line consistent-return
const continionGame = () => {
  if (correctCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    return true;
  }
};

export {
  helloUser, askQuestion, getAnswer, checkCorrect, continionGame,
};
