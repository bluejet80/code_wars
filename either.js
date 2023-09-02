'use strict'

//const Either = Right || Left

const Right = x =>
({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f,g) => g(x),
    inspect: () => `Right(${x})`
})

const Left = x =>
({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f,g) => f(x),
    inspect: () => `Left(${x})`
})


const fromNullable = x =>
  x != null ? Right(x) : Left(null)


// part 3 another example
//

// First the imperative version 

const concatUniq = (x, ys) => { // if the value does not exit in the array, add it
    const found = ys.filter(y => y === x)[0] // if it finds a like value it returns true 
    return found ? ys : ys.concat(x)

    }

// then the declarative

const concatUniq2 = (x, ys) => 
    fromNullable(ys.filter(y => y === x)[0])
    .fold(() => ys.concat(x), y => ys)


const apple = [2, 9, 3, 11, 26]
console.log(concatUniq(11, apple))
console.log(concatUniq2(11, apple))










// Part 2
//

const fs = require('fs')

// first we get rid of the try catch

const tryCatch = f => {
    try {
        return Right(f())
        
    } catch(e) {
        return Left(e)
        }
    }

//const getPort = () => {
//    try{
//        const str = fs.readFileSync('config.son')
//        const config = JSON.parse(str)
//        return config.port
//        } catch(e) {
//            return 3000
//            }
//}

const getPort = () => 
        tryCatch(() => fs.readFileSync('config.json'))
        .chain(c => tryCatch(() => JSON.parse(c)))
        .fold(e => 3000,
              c => c.port)
    


const result = getPort()

console.log(result)

////Part 1
//const result = Right(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x)
//
//console.log(result) 
//
//// find color function
//
//const findColor = name => {
//    const found = ({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name] // this is like Object[name]
//    return found ? Right(found) : Left(null)
//}
//
//const result2 = findColor('purple')
//                .map(c => c.slice(1))
//                .fold(e => 'no color',
//                      c => c.toUpperCase())
//
//console.log(result2)
//// Now to move this null chcking to its own function we will refactor this as
////
//
//const fromNullable = x =>
//  x != null ? Right(x) : Left(null)
//
//const findColor2 = name => 
//    fromNullable({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name])
//
//
//const result3 = findColor('purple')
//                .map(c => c.slice(1))
//                .fold(e => 'no color',
//                      c => c.toUpperCase())
//
//
//
//
