'use strict'
const { inspect } = require('util')

//const nextCharForNumberString = str => {
//    const trimmed = str.trim()
//    const number = parseInt(trimmed)
//    const nextNumber = number + 1
//    return String.fromCharCode(nextNumber)
//}

const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `This is a Box(${x})`
})

const nextCharForNumberString = str => 
 Box(str)
 .map(s => s.trim())
 .map(s => parseInt(s))
 .map(i => i + 3)
 .map(i => String.fromCharCode(i))
 .fold(c => c.toLowerCase())

const result = nextCharForNumberString('  64  ')

console.log(result)

<<<<<<< HEAD

=======
const apple = [3,4,2,32,105]

console.table(apple)

const fruit = {
    fName: 'johnson',
    lName: 'williams',
    age: 47,
    birthPlace: 'Montego',
    work: 'brick-layer'

    }
console.table(fruit)

console.log(inspect(fruit))
>>>>>>> 917c322 (added to README.md)
