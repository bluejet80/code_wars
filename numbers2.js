'use strict';
//------------------------------------
// add numbers in series 1 + 1/4 + 1/7 + 1/10 + 1/13...
// return 1.25 two decimal places

const addIter = function (num) {
  if (num === 1) {
    return Number(num).toFixed(2);
  } else if (num === 2) {
    return (0.25 + Number(addIter(num - 1))).toFixed(2);
  } else {
    const num1 = 1.0 / (4.0 + 3.0 * (num - 2));
    //console.log(num1);
    return (num1 + Number(addIter(num - 1))).toFixed(2);
  }
};

// console.log(addIter(1));
// console.log(addIter(2));
// console.log(addIter(38));
// console.log((1 / 10).toFixed(2));

// This failed at the really high numbers

const seriesSum = function (n) {
  if (n <= 1) {
    return n.toFixed(2);
  } else {
    let num = 1;
    for (let i = n - 2; i >= 0; i--) {
      num += 1 / (4.0 + 3.0 * i);
    }
    return num.toFixed(2);
  }
};

// console.log(seriesSum(0));
// console.log(seriesSum(1));
// console.log(seriesSum(2));
// console.log(seriesSum(39));

// this one WORKED!!

// much better way

function series(n) {
  for (var s = 0, i = 0; i < n; i++) {
    // when n is 0 loop doesnt even run
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

// console.log(series(0));
// console.log(series(1));
// console.log(series(2));
// console.log(series(3));

// another way using an array???
function seriesII(n) {
  return Array(n)
    .fill(0)
    .map((e, i) => 3 * i + 1)
    .reduce((s, e) => s + 1 / e, 0)
    .toFixed(2);
}

/// end of challenge

// ---------------------------------------------
//In this simple assignment you are given a number and have to make it negative.
//But maybe the number is already negative?

const makeNeg = function (n) {
  let m = Math.abs(n);
  return m - m * 2;
};

console.log(makeNeg(1));
console.log(makeNeg(-5));
console.log(makeNeg(0));
console.log(makeNeg(0.12));

console.log(Math.abs(-5));

// much simpler way and the fastest

function makeNeg1(num) {
  return num <= 0 ? num : -num;
}

// another variation

function makeNeg2(num) {
  return -Math.abs(num);
}
