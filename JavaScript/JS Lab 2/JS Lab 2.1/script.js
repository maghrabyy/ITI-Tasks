var str = prompt('Enter a string.')//mahhmoud
var char = prompt('Enter a character from the previous string.')//h
var charCaseSensitivity = confirm('Do you want to apply case sensitivity in the chosen character?')// ok => True

var charCount = 0;

var reg = RegExp(char,charCaseSensitivity ? '' : 'i') // case insensitive 

for(var i = 0; i < str.length; i++){
    if(reg.test(str[i])){ // h index  m - > false
        charCount++;
    }
}

document.write('<h1>there are ' + '('+ char +  ') written ' + charCount + ' times</h1>')