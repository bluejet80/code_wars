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
//console.log(apple);

// using reduce to return the lowest or the highest number of the array
// just change the conditional

const useReduce1 = function (args) {
  return args.reduce(function (prev, curr, index, array) {
    return prev < curr ? prev : curr;
  });
};

//console.log(useReduce1(apple));

// using reduce to add the elements of an array

const useReduce2 = function (args) {
  return args.reduce(function (curr, prev, index) {
    return (curr = curr * index);
  });
};
//console.log(apple.slice(5));

//console.log(useReduce2(apple.slice(5)));

// end of Challenge
//
// ---------------------------------------
// Find the index of the number between two other numbers

const slide = [4,20,10]

const numBetween = function(arr) {
	const max = Math.max(...arr)
	const min = Math.min(...arr)
	console.log(max,min)
return arr.indexOf(arr.reduce(function (curr, prev){ return (curr !== max && curr !== min)?curr:prev}))
}

//console.log(numBetween(slide))
// works
//
// another solution
function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

// end of challenge
//
// -------------------------------
//
// Return only the unique values from two strings of letters

const uniqueStr = function(str1,str2) {
const apples = new Set(...[str1.split('')])
const oranges = new Set(...[str2.split('')])
const mangos = new Set([...apples,...oranges])	
const grapes = [...mangos].sort()
return grapes.join('')
}

const one = "ausheoindhfiw"
const two = "xmcndhjfnvhgdsqow"

//console.log(uniqueStr(one,two))
// worked
//
// Better version
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// I like this version aswell
function longest2(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}

// end of challenge
//
// -----------------------------
//
// next challenge
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
//
//You live in the city of Cartesia where all roads are laid out in a perfect grid. 
//You arrived ten minutes too early to an appointment,
//so you decided to take the opportunity to go for a short walk.
//The city provides its citizens with a Walk Generating App on their phones --
//everytime you press the button it sends you an array of one-letter strings
//representing directions to walk (eg. ['n', 's', 'w', 'e']).
//You always walk only a single block for each letter (direction)
//and you know it takes you one minute to traverse one city block,
//so create a function that will return true
//if the walk the app gives you will take you exactly ten minutes
//(you don't want to be early or late!)
//and will, of course, return you to your starting point. Return false otherwise.

const walk1 = ['e','s','s','w','w','e','e','n','n','w']
const walk2 = ['w','w','s','s','e','n','n','n','s','e']
const walk3 = ['w','w','w','s','e','s','n','n','s','e'] // false
const walk4 = ['w','w','s','e','s','n','n','s','e'] // false

const tripSet = function(arr){
	if (arr.length === 10) {
	let [numW,numE,numS,numN] = [0,0,0,0]
	for(const item of arr){
	switch(item){
		case 'e': numE++; break
		case 'w': numW++; break
		case 'n': numN++; break
		case 's': numS++; break
	}
	}
	return numE === numW && numN === numS}
	return false
}


//console.log(tripSet(walk3))
//worked
//
//another version
function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

//
//end of challenge
//
//----------------------------
//
//Complete the solution so that is returns true if the first arg(string)
//passed in ends with the 2nd arg(string)
function solution(str, ending){
	if(ending !== ''){
  const last = ending.length
	console.log(last)
  const match = str.slice(-last)
	console.log(match)
  return match === ending}else return true
}


console.log(solution('abc', 'bc'))

// worked
//
// another version

function solution(str, ending){
  return str.endsWith(ending);
}

// end of challenge
//
// -----------------------------
//
//https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript
//next kata
//
//How many pages in the book
//Every book has n pages with page numbers 1 to n.
//the summary is made by adding up the number of digits of all the page numbers

let fargo = ''
for(let i = 1;i<13;i++){
fargo = fargo + i
}
console.log(fargo)
console.log(fargo.length)

function bookPages(num) {
	const len = String(num).length
	const whole = Math.pow(10, len-1)
	console.log(`This is the whole ${whole}`)
	if(len === 1) {return num}
	else {
	const first = (num - (whole-1))*len
	console.log(`This is the first ${first}`)
	let sum = 0
	for(let i = len; i>1; i--) {
	sum += (9*Math.pow(10,len - 2))	
	}
	console.log(`This is the sum ${sum}`)
	return first + sum}
}

// the opposite kata
// given th esummary, how many pages does the book have?
//
function amountOfPages (summary) {
	const trees = new Map()
	const bushes = new Map()

	let pages = 0
	let leaves = 0
	for (let i = 0; pages < summary; i++) {
	pages = (9*Math.pow(10,i))*(i+1)
	leaves = 9*Math.pow(10,i)
	trees.set(i,pages)
	bushes.set(i,leaves)
	}
	console.log(trees)
	console.log(trees.size)
	console.log(bushes)
	console.log(bushes.size)
	let result = summary
	for(let i = 0; i<trees.size-1; i++) {
	result = result - trees.get(i)	
	}
	let toast = result/trees.size
	console.log(toast)
	let jelly = toast.toFixed('2')
	console.log(jelly)
	for(let i = 0; i<bushes.size; i++) {
	jelly = jelly + bushes.get(i)
	}
	return Math.trunc(jelly)
	

}

//another way of doing it
//This function just goes to show that if you are trying to solve a 
//challenge and it is getting complex, then you need to approach it 
//from a different angle. 
//In this case I was focused on the mathmatical aspect of the solution,
//Where the simple solution was to treat the whole thing like a string
//and just get the length of the string
//---------



function amountOfPages2(summary){
  let counter = 1;
  let string = '';
  
  while(string.length < summary) {
    string += counter
	console.log(string.length)
    counter++
  }
  return counter - 1
  
}

//end of challenge
//
//----------------------------------------
//given the amount of cash on hand and the initial wager
//and the number of rounds played, return the amount of money I 
//will have left after the session has concluded
//


function doubleOrNothing(cash, wager, losses){
  for(let i=1;i<losses;i++){
    wager = wager*2
      }
  console.log(wager)
  return (cash > wager)? cash - wager : "I'll pay you back later."
}

// another way

doubleOrNothing2=(a,b,c)=>(a=>a<0?"I'll pay you back later":a)(a-b*2**(c-1))

//end of challenge
//
//-----------------------------------------
//https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript
//First of four squared strings challenges
//Horiz mirror and Vert Mirror
//given string: s = "abcd\nefgh\nijkl\nmnop"
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm" 
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
