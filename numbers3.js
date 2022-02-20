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
    console.log(item.capitalize());
  }
};
