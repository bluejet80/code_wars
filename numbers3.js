'use strict';

const createRandomArray = function (num) {
  // create a random Set of numbers between 1 and 100
  const setOne = new Set();
  for (let i = 0; i < num; i++) {
    setOne.add(Math.trunc(Math.random() * 100) + 1);
  }
  return setOne;
};

const apple = [...createRandomArray(10)];

console.log(apple);

//-------------------------------
// Sum all the numbers in an array after they have been doubled

const sumDoubl = function (array) {
  const arrayTwo = array.map(x => x * 2);
  let sum = 0;
  for (const item of arrayTwo) {
    sum += item;
  }
  return sum;
};

console.log(`${apple.map(x => x * 2).join(' + ')} = ${sumDoubl(apple)}`);
// prints out 68 + 144 + 80 + 26 + 152 + 32 + 122 + 64 = 688

// end of challenge

//----------------------------------
//Function that accepts an array of strings and then prints each string
// in multiple cases

const printStrCase = function (array) {
  for (const item of array) {
    console.log(item.toLowerCase());
    console.log(item.toUpperCase());
    console.log(item.replace(item[0], item[0].toUpperCase()));
  }
};

// printStrCase(['happy', 'sad', 'funny']);

// end of challenge

//-------------------------
// provided with a list (array) if integer pairs.
// The first element of the pair are how many people are getting on the bus
// The second element is how many people are getting off the bus
// Your task is to return the number of people on the bus at the end of the last stop

const pear = [
  [3, 0],
  [2, 1],
  [1, 3],
];

const number = function (busStops) {
  let people = 0;
  for (const [on, off] of busStops) {
    people += on;
    people -= off;
  }
  return people;
};

console.log(number(pear));

// this passed all the tests
// here is another way written in one line
const number1 = busStops => busStops.reduce((p, n) => p + n[0] - n[1], 0);
// here is another way

const number2 = function (busStops) {
  let busCounter = 0;
  for (let busStop of busStops) {
    busCounter += busStop[0] -= busStop[1];
  }
  return busCounter;
};

// end of challenge
//------------------------------
