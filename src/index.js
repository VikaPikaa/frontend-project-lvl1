import readlineSync from 'readline-sync';

const roundsCount = 3;

const gameProgress = (logicGame) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameQuestion = logicGame()[0];
  console.log(gameQuestion);

  for (let i = 0; i < roundsCount; i += 1) {
    const game = logicGame();

    const gameTarget = game[1];
    console.log(`Question: ${gameTarget}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = game[2];
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameProgress;
