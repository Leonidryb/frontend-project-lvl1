import readlineSync from 'readline-sync';

const brainEven = () => {
  const COUNT_STEPS_GAME = 3;
  const POS_ANSWER = 'yes';
  const NEG_ANSWER = 'no';

  const getUserName = () => {
    const userName = readlineSync.question('May I have your name? ');

    return userName;
  };

  const isNumberEven = (number) => {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  };

  const getNumbersArray = (arrayLength) => {
    const result = [];
    for (let i = 0; i < arrayLength; i += 1) {
      const number = Math.round(Math.random() * 50);

      result.push(number);
    }
    return result;
  };

  const showQuestion = (number) => {
    console.log(`Question: ${number}`);
  };

  const checkAnswer = (number) => {
    const answer = readlineSync.question('Your answer: ');
    if (isNumberEven(number) === true && answer === POS_ANSWER) {
      console.log('Correct!');
      return true;
    }

    if (isNumberEven(number) === true && answer === NEG_ANSWER) {
      console.log(`${NEG_ANSWER} is wrong answer ;(. Correct answer was ${POS_ANSWER}.`);
      return false;
    }

    if ((isNumberEven(number) === false && answer === NEG_ANSWER)) {
      console.log('Correct!');
      return true;
    }

    if (isNumberEven(number) === false && answer === POS_ANSWER) {
      console.log(`${POS_ANSWER} is wrong answer ;(. Correct answer was ${NEG_ANSWER}.`);
      return false;
    }

    if (isNumberEven(number) === false && (answer !== POS_ANSWER || answer !== NEG_ANSWER)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${NEG_ANSWER}.`);
      return false;
    }

    if (isNumberEven(number) === true && (answer !== POS_ANSWER || answer !== NEG_ANSWER)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${POS_ANSWER}.`);
      return false;
    }

    return null;
  };

  const initGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = getUserName();
    console.log(`Hello, ${userName}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const answersArray = getNumbersArray(COUNT_STEPS_GAME);
    for (let i = 0; i < COUNT_STEPS_GAME; i += 1) {
      showQuestion(answersArray[i]);
      if (checkAnswer(answersArray[i]) === false) {
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };

  initGame();
};

export default brainEven;
