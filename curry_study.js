'use strict'

// this is an example of currying
//

const red = function(east) {
    console.log(`Hello my name is ${east}`)
    return function(west){
        console.log(`Hi, ${east}, my name is ${west}`)
        }
       }
red('jarett')('mark')

//Another example

let sum = a => b => a + b

console.log(sum(23)(12))

