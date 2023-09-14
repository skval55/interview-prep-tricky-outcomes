function guessingGame(num = null) {
  const randomNum = num || Math.floor(Math.random(99));
  let count = 0;
  let finished = false;
  return function (num) {
    count++;
    if (finished === true) return `The game is over, you already won!`;
    if (num < randomNum) return `${num} is too low!`;
    if (num > randomNum) return `${num} is too high!`;
    if (num === randomNum) finished = true;
    return `You win! You found ${num} in ${count} guesses.`;
  };
}

module.exports = { guessingGame };
