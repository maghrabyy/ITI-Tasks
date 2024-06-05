var num = 0;
var numsArray = []
do{
    num = prompt(isNaN(num)? 'Enter numbers only!' : 'Enter a number.')
    if(!isNaN(num)){   
        numsArray.push(num)
    }
}while(numsArray.length < 3)


console.log(numsArray)

document.write(`<h1><span style="color: red;">Sum of three values </span>${numsArray[0]} + ${numsArray[1]} + ${numsArray[2]} = ${+numsArray[0] + +numsArray[1] + +numsArray[2]}</h1>`)
document.write(`<h1><span style="color: red;">Multiplication of three values </span>${numsArray[0]} x ${numsArray[1]} x ${numsArray[2]} = ${+numsArray[0] * +numsArray[1] * +numsArray[2]}</h1>`)
document.write(`<h1><span style="color: red;">Division of three values </span>${numsArray[0]} / ${numsArray[1]} / ${numsArray[2]} = ${+numsArray[0] / +numsArray[1] / +numsArray[2]}</h1>`)