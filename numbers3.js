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
//write a function that takes as an argument a sequence and
//retuns a list of items without any duplicate elements next
// to each other, preserving the original order of the elements
//example uniqueInOrder('AAAABBBCCDAABBB') == ['A','B','C','D','A','B']
// first parse the input
// if input is an array then skip parsing
const uniqueInOrder = function (seq) {
  const beans = [];
  let corn;
  for (let i = 0; i < seq.length; i++) {
    if (corn === seq[i]) {
      continue;
    } else {
      beans.push(seq[i]);
    }
    corn = seq[i];
  }
  return beans;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// this worked
// better versions to follow

// more concise
function uniqueInOrder1(it) {
  var result = [];
  var last;

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }

  return result;
}

// even fewer lines of code
const uniqueInOrder2 = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

// another one
const uniqueInOrder3 = function (iterable) {
  return [].filter.call(iterable, function (a, i) {
    return iterable[i - 1] !== a;
  });
};

// arrow function
const uniqueInOrder4 = d => [...d].filter((x, i, a) => x != a[i + 1]);

//one more iteration
const uniqueInOrder5 = function (iterable) {
  var res = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) res.push(iterable[i]);
  }
  return res;
};

//end of challenge
/////////////////////////

//---------------------------
//Write a function that takes a number as input and 
//returns the sum of the digits of the number

const addDigits = function (number) { // convert a number into an array of digits.
	const arr = `${number}`.split('').map(Number) 
		let total = 0
	for(const item of arr){
		if(item) total += item }
	return total
}
console.log(addDigits(1234))
// That worked
//
// Here is another way to do it with less lines
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}
//This is the way I wanted to do it but I couldnt get it.
//
//Here is an example with the ForEach function
function sumDigits1(number) {
  var str_num = "" + number;
  
  var result = 0;
  str_num.split('').forEach(function(el) {
    var digit = parseInt(el);
    if(isNaN(digit)) {
      return;
    }
    
    result += digit;
  });
  
  return result;
}
//End of Challenge
//
//----------------------------
// Write a function that takes a list of strings and returns something like this:
// number(['a','b','c']) // => ['1: a','2: b','3: c']

const lineNumber0 = (str) => str.map(x => `${str.indexOf(x) + 1}: ${x}`)

console.log(lineNumber0(['a','','c']))
//didnt work because the array items are not unique


const lineNumber1 = function(array) {
	let lineNum = 1
	const newArr = []
	for (const item of array) {
		newArr.push(`${lineNum}: ${item}`)
		lineNum++
	}
	return newArr
}

console.log(lineNumber1(['a','a','','b']))
// This worked 
// I was really close on the first one but I didnt understand the map method enough
//
// The one liner

const number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

// end of challenge
//
// ------------------------------
//

