'use strict'

const getChar = a => String.fromCharCode(a)


const displayChar = function() {
    for(let i = 97; i < 123 ; i++){
        console.log(getChar(i))
        }
    }

//displayChar()

const addOne = function(a) {
    a.unshift(a.pop())
    console.log(a)
    }

const apple = 'abcde'.split('')

console.log(addOne(apple))
const arr = []
const listOne = function(num){
    const start = 97
        for( let j = start; j < start + num ; j++) {
            arr.push(getChar(j))
                }
            console.log(arr.join(' '))
        for( let i = 1 ; i < num ; i++) {
            arr.push(arr.shift())
            console.log(arr.join(' '))
            }
    }
listOne(4)

//That worked!
//Need to add catch for 0
