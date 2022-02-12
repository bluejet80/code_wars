'use strict';

////// sort a number in a descending order

// there are a couple of ways of doing this.

// first is by using the sort method

const descendNumber = function (number) {
  const numArray = Array.from(number.toString()).sort().reverse();
  return Number(numArray.join(''));
};

//console.log(descendNumber(5946127984));

// the other is to use a sorting algorithm

/// code waiting...

/// end of challenge

//-----------------------------------------------------------
////// Convert number to reversed array of digits

const reverseArray = function (n) {
  const numArray = Array.from(n.toString()).reverse();
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = Number(numArray[i]);
  }
  return numArray;
};

//console.log(reverseArray(2837461));

// another better way

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

// another way

function tryTwo(n) {
  return (n + '').split('').map(Number).reverse();
}

//console.log(digitize(1287345));

// end of challenge

//-----------------------------------------------------------
// Given an array of integers your solution should find the smallest integer
// Assume that the supplied array will not be empty

function smallestNum(array) {
  let n = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= n) n = array[i];
  }
  return n;
}

// a way better way

function findSmallest(args) {
  return Math.min(...args);
}

// another way using the reduce method
function findSmallestInt(args) {
  return args.reduce(function (prev, curr, index, array) {
    return prev < curr ? prev : curr;
  });
}

// another way that Im not too certain of ...
// so this is what I thought I was doing with just the sort method

function findSmaller(args) {
  args.sort(function (a, b) {
    return a - b;
  });
  return args[0];
}
// end of challenge

//-----------------------------------------------------------

//end of challenge
