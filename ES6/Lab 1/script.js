///////////////////////////////////////////Swapping variable values///////////////////////////////////////////
let a = 5;
let b = 10;

console.log('Before swapping.')
console.log('a: ', a);
console.log('b: ', b);

const [x,y] = [a,b]

a = y;
b = x;

console.log('After swapping.')
console.log('a: ', a);
console.log('b: ', b);

///////////////////////////////////////////Min Max///////////////////////////////////////////////////
const minMaxValue = (...nums) =>{
    return {
        maxValue: Math.max(...nums),
        minValue: Math.min(...nums)
    }
}


const minMaxResult = minMaxValue(5,10,24,2,54,38,85,27)

console.log("Max Value: ",minMaxResult.maxValue)
console.log("Min Value: ",minMaxResult.minValue)

//////////////////////////////////////////////////Array API Methods/////////////////////////////////////////////
const fruits = ["apple", "strawberry", "banana", "orange","mango"]

console.log('a) Every element is a string? ',fruits.every(elem=>typeof elem === 'string'));
console.log('b) Some of the elements starts with "a"? ',fruits.some(elem=>elem.startsWith('a')));
console.log('c) Filtered array with only elements starts with "b" or "s"',
    fruits.filter(elem=>elem.startsWith('s') || elem.startsWith('b')))
// d) generate new array using Map to modify the array elements.
const newArray = fruits.map(elem=>`I like ${elem}`)
// e) display the modified array using forEach
newArray.forEach(elem=>console.log(elem))


//////////////////////////////////Function that return only positive numbers///////////////////////////////////

const onlyPositive = arr => arr.filter(elem=>elem > 0)

console.log('1) Only Positive numbers ', onlyPositive([5,3,-2,4,-1,-8,6]))

const sumOfArr = arr => arr.reduce((a,b)=>a+b,0)

console.log('2) Sum of an array of numbers',sumOfArr([5,10,2]))

const capitalizeEachName = arr => arr.map(elem=>{
    if(typeof elem === 'string'){
        const firstLetter = elem.substring(0,1).toUpperCase()
        const remainingLetters = elem.substring(1).toLowerCase()
        return firstLetter + remainingLetters
    }
})

console.log('3) Capitalize the first letter of each name ', capitalizeEachName(['mahmoud','ali','adel','khaled']))

const isLowercase = str => str === str.toLowerCase()

console.log('4) is a string lowercase? ',isLowercase('helLo'))

const greaterInLength = (arr,len) => arr.filter(elem=>elem.length > len)

console.log('5) a new array of string which has a greater length than the specified length ',
    greaterInLength(['ali','mahmoud','omar','yasmine','abdelrahman'],5)
)