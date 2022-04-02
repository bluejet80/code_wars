'use strict'



// with shared state, the order in which funciton calls are made
// changes the result of the funciton calls.

const x = {
    val: 43
}

const x1 = () => x.val += 1;

const x2 = () => x.val *= 2;

x1()
x2()

console.log(x.val)

// This next example is exactly the same, execpt...

const y = {
    val:2
}

const y1 = () => y.val += 1
const y2 = () => y.val *= 2

// The order of the function calls are reversed



y2()
y1()

console.log(y.val)


//The point is that the order in which the functions we called changed
//the outcome of the value because of a shared state. 
//


//Now we will avoid shared state
//

const m = {
    val: 30
}

const m1 = x => Object.assign({}, x, {val: x.val + 1})

const m2 = x => Object.assign({}, x, {val: x.val * 2})

console.log(m1(m2(m)).val)

const n = {
    val: 30
}

// Since there are no dependencies on outside variables
// we don't need different functions to operate on different
// variables.
//
// Because the functions don't mutate, you can call these
// functions as many times as you want, in any order, without
// changing the result of the other function calls
//

console.log(m1(m2(n)).val)

