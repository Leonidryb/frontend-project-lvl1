import readlineSync from 'readline-sync';

const brainEven = () => {
  const COUNT_STEPS_GAME = 3;
  const NUMBER_ARRAY_LENGTH = COUNT_STEPS_GAME * 2;
  const ACTIONS_ARRAY = ['+', '-', '*'];

  const getUserName = () => {
    const userName = readlineSync.question('May I have your name? ');

    return userName;
  };

  const getNumbersArray = (arrayLength) => {
    const result = [];
    for (let i = 0; i < arrayLength; i += 1) {
      const number = Math.round(Math.random() * 30);

      result.push(number);
    }
    return result;
  };

  const getRandomActionsArray = (actionsArray) => {
    const result = [];
    for (let i = 0; i < actionsArray.length; i += 1) {
      const number = Math.round(Math.random() * (actionsArray.length - 1));
      result.push(actionsArray[number]);
    }

    return result;
  };

  const getGameArr = (numbersArray, actionsArray) => {
    const expressionsArray = [];
    let n = 0;
    for (let i = 0; i < COUNT_STEPS_GAME; i += 1) {
      const expression = { expression: `${numbersArray[n]} ${actionsArray[i]} ${numbersArray[n + 1]}` };

      if (actionsArray[i] === '+') {
        const result = numbersArray[n] + numbersArray[n + 1];
        expression.result = result;
      }
      if (actionsArray[i] === '-') {
        const result = numbersArray[n] - numbersArray[n + 1];
        expression.result = result;
      }
      if (actionsArray[i] === '*') {
        const result = numbersArray[n] * numbersArray[n + 1];
        expression.result = result;
      }
      n += 2;
      expressionsArray.push(expression);
    }
    return expressionsArray;
  };

  const showQuestion = (expression) => {
    console.log(`Question: ${expression}`);
  };

  const checkAnswer = (number) => {
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === number) {
      console.log('Correct!');
      return true;
    }

    if (Number(answer) !== number) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${number}.`);
      return false;
    }

    return null;
  };

  const initGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = getUserName();
    console.log(`Hello, ${userName}`);
    console.log('What is the result of the expression?');
    const numbersArray = getNumbersArray(NUMBER_ARRAY_LENGTH);
    const randomActionsArray = getRandomActionsArray(ACTIONS_ARRAY);
    const gameArray = getGameArr(numbersArray, randomActionsArray);
    for (let i = 0; i < COUNT_STEPS_GAME; i += 1) {
      showQuestion(gameArray[i].expression);
      if (checkAnswer(gameArray[i].result) === false) {
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };

  initGame();
};

export default brainEven;
