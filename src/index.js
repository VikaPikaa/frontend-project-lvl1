import readlineSync from 'readline-sync';

const roundsCount = 3;

const gameProgress = (logicGame) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const [gameQuestion] = logicGame();
  console.log(gameQuestion);

  for (let i = 0; i < roundsCount; i += 1) {
    const [, gameTarget, correctAnswer] = logicGame();

    console.log(`Question: ${gameTarget}`);

    const answer = readlineSync.question('Your answer: ');
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
