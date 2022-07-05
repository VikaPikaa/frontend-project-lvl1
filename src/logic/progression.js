const randomTerm = () => Math.floor(Math.random() * 100) + 1;
const singleNum = () => Math.floor(Math.random() * 10) + 1;

const index = singleNum();
let answer = 0;

const getProgression = () => {
  const progression = [singleNum()];
  const term = randomTerm();

  for (let i = 0; i < 10; i += 1) {
    if (i === 0) {
      progression[i] += term;
    } else {
      progression[i] = progression[i - 1] + term;
    }
  }
  answer = progression[index];
  progression[index] = '..';
  return progression.join(' ');
};

const correctAnswer = () => `${answer}`;

export {
  getProgression, correctAnswer,
};
