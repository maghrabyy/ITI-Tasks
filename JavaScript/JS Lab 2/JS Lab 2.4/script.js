var nameReg = /^[a-zA-Z]+$/
var name = 'name'
do {
     name = prompt(!nameReg.test(name) ? 'Invalid name: no numbers are allowed!' :'Enter your name here.')
} while (!nameReg.test(name));

var phoneReg = /^[0-9]{8}$/
var phoneNum = '12345678'
do {
    phoneNum = prompt(!phoneReg.test(phoneNum) ? 'Invalid phone number' :'Enter your phone number here here.')
} while (!phoneReg.test(phoneNum));


var mobileNumReg = /^(010|011|012|015)[0-9]{8}$/
var mobileNum = '01234567890'
do {
    mobileNum = prompt(!mobileNumReg.test(mobileNum) ? 'Invalid mobile number' :'Enter your mobile number here here.')
} while (!mobileNumReg.test(mobileNum));


var emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var email = 'abc@xyz.com'
do {
    email = prompt(!emailReg.test(email) ? 'Invalid email address' :'Enter your email address here here.')
} while (!emailReg.test(email));


var colorReg = /^(red|green|blue)$/i
var chosenColor = 'red'
do {
    chosenColor = prompt(!colorReg.test(chosenColor) ? 'Invalid color' :'Choose a color to display data (Red - Green - Blue).')
} while (!colorReg.test(chosenColor));



document.write(`<h1><span style='color: ${chosenColor}'>Username:</span> ${name}</h1>`)
document.write(`<h1><span style='color: ${chosenColor}'>Phone Number:</span> ${phoneNum}</h1>`)
document.write(`<h1><span style='color: ${chosenColor}'>Mobile Number:</span> ${mobileNum}</h1>`)
document.write(`<h1><span style='color: ${chosenColor}'>Email Address:</span> ${email}</h1>`)