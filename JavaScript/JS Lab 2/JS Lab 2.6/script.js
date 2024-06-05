var num = 0;
var numsArray = []
do{
    num = prompt(isNaN(num)? 'Enter numbers only!' : 'Enter a number.')
    if(!isNaN(num)){    
        numsArray.push(num)
    }
}while(numsArray.length < 5)

    var ascNums = numsArray.slice('').sort((a,b)=>a-b)
    var descNums = numsArray.slice('').sort(function(a,b){
        return b-a
    })

    document.write(`<h1><span style="color: red;">The values you've entered: </span> ${numsArray[0]}, ${numsArray[1]}, ${numsArray[2]}, ${numsArray[3]}, ${numsArray[4]}</h1>`)
    document.write(`<h1><span style="color: red;">Ascending Order: </span>${ascNums[0]}, ${ascNums[1]}, ${ascNums[2]}, ${ascNums[3]}, ${ascNums[4]}</h1>`)
    document.write(`<h1><span style="color: red;">Descending Order Order: </span>${descNums[0]}, ${descNums[1]}, ${descNums[2]}, ${descNums[3]}, ${descNums[4]}</h1>`)