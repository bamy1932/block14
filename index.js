// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    sum += num;
  }
  return sum;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  return getSum(numbers) / numbers.length;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  const returnMin = [100];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num < returnMin) {
      returnMin.pop();
      returnMin.push(num);
    }
  }
  return returnMin;
  // TODO
}
const returnMin = getMin(numbers);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  const returnMax = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num > returnMax) {
      returnMax.pop();
      returnMax.push(num);
    }
  }
  return returnMax;
  // TODO
}
const returnMax = getMax(numbers);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
const getRange = (numbers) => {
  const returnRange = returnMin + `-` + returnMax;
  return returnRange;
  // TODO
};
const returnRange = getRange(numbers);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const returnEvens = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
      returnEvens.push(num);
    }
  }
  return returnEvens;
  // TODO
}

const returnEvens = getEvens(numbers);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const returnOdds = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if ((num + 1) % 2 === 0) {
      returnOdds.push(num);
    }
  }
  return returnOdds;
  // TODO
}

const returnOdds = getOdds(numbers);

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
