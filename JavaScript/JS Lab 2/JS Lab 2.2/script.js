var str = prompt('Enter a string here.')
var isCaseSensitive = confirm('Do you want to apply case sensitivity?')


var reversedStr = str.split('').reverse().join('')

var reg = RegExp(str,isCaseSensitive ? '' : 'i')

var isPalindrome = reg.test(reversedStr);

document.write(`<h1>${isCaseSensitive?'[Case Senstive] ':''}${reversedStr} is ${isPalindrome? '' : 'Not'} palindrome of ${str}</h1>`)