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
//Letters must be between a and m
// count the number of letters in error, show that divided by the total number of letters
const colors = new Set([
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
]);
const printErrors = function (s) {
  const printArray = s.split('');
  let error = 0;
  for (const item of printArray) {
    if (!colors.has(item)) error++;
  }
  return `${error}/${s.length}`;
};

//console.log(printErrors('aaabbbbhaijjjmwwmwmyy'));

/// Another way

function printerError(s) {
  // your code
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > 'm') {
      /// less/greater than works in the alphabet
      count++;
    }
  }
  return count + '/' + s.length;
}

// another answer using reg exp
// this solution removes the non-errors
const prtError = s => `${s.replace(/[a-m]/gi, '').length}/${s.length}`;

//Another solution w reg exp
// this solutioon matches the errors
const printsError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

//end of challenge

//-----------------------------------------------------------
//Determine whether a string of only letters is an isogram(no repeats)
// take into consideration upper and lower case letters
const dates = function (s) {
  const upper = s.toUpperCase();
  const strSet = [...new Set(upper)].join('');
  return upper === strSet || upper === '';
};

//console.log(dates('moOse'));

// another way with confusing reg exp

function isaIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

// another way compares the length of the strings
const isIsogram = str => new Set([...str.toLowerCase()]).size == str.length;

// end of challenge

//-----------------------------------------------------------

// end of challenge
