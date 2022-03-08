'use strict';

const frisbee = [4, 2, 3, 8, 7, 1];

const createRandomArray = function (num) {
  // create a random Set of numbers between 1 and 100
  const setOne = new Set();
  for (let i = 0; i < num; i++) {
    setOne.add(Math.trunc(Math.random() * 25) + 1);
  }
  return setOne;
};

const apple = [...createRandomArray(10)];
console.log(apple);

// using reduce to return the lowest or the highest number of the array
// just change the conditional

const useReduce1 = function (args) {
  return args.reduce(function (prev, curr, index, array) {
    return prev < curr ? prev : curr;
  });
};

console.log(useReduce1(apple));

// using reduce to add the elements of an array

const useReduce2 = function (args) {
  return args.reduce(function (curr, prev, index) {
    return (curr = curr * index);
  });
};
console.log(apple.slice(5));

console.log(useReduce2(apple.slice(5)));
