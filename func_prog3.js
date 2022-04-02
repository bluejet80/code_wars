// To begin with we have these functions that we will be refactoring
// with our Box object in a more functional programmming style. 

// Here is our box object once again

const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`,
    add: f => Box(f(x)),
    print: f => console.log(f(x))
})


// here are the functions in their beginning state

//const moneyToFloat = str =>
//    parseFloat(str.replace(/\$/g,''))
//
//refactored function

const moneyToFloat = str =>
    Box(str)
    .map(s => s.replace(/\$/g,''))
    .map(r => parseFloat(r))

//A big goal of what this has done is to unnest the 
//previously nested function of str.replace()

//const percentToFloat = str => {
//    const replaced = str.replace(/\%/g,'')
//    const number = parseFloat(replaced)
//    return number * 0.01
//}

const percentToFloat = str => 
    Box(str.replace(/\%/g,''))
    .map(replaced => parseFloat(replaced))
    .map(number => number * 0.01)

// each time the result of the last gets passed to the next

//const applyDiscount = (price, discount) => {
//    const cost = moneyToFloat(price)
//    const savings = percentToFloat(discount)
//    const answer =  cost - cost * savings
//    return `${price} - ${discount} = $${answer.toFixed(2)}`
//}

const applyDiscount = (price, discount) => 
    moneyToFloat(price)
    .fold(cost => 
     percentToFloat(discount)
     .fold(savings =>
         cost - cost * savings))




const result = applyDiscount('$5.00','20%')
console.log(result)


const addEm = (x) => x * x

const multi = (x) =>
    Box(x)
    .add(x => addEm(x))
    .add(x => addEm(x))
    .add(x => addEm(x))
    .add(x => addEm(x))
    .add(x => x.toString())
    .print(x => x.split(''))

multi(8)


const casePrice = (x) =>
    Box(x)
    .add(x => x * 1.3)
    .add(c => c * .80)
    .add(x => x * 1.08)
    .print(x => x.toFixed(2))


casePrice(130.55)
casePrice(270.72)
casePrice(96.38)

const figs = [4,3,29,100]

const walker = x => 
    x.map(x => x * 3.14)
    .filter(x => x < 100)
    .map(x => console.log(`The answer is ${x} melons.`))

walker(figs)

const sayYes = x =>
    x.map(x => 


