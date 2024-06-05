var str = prompt("Enter a string here.")

var strArr = str.split(" ")

var largestStr = '';

for(var i = 1; i < strArr.length;i++){
    if(strArr[i-1].length <= strArr[i].length)
    {
        largestStr = strArr[i]
    }
}

document.write(`<h2>the largest written string is</h2>`)
document.write(`<h1>${largestStr}</h1>`)