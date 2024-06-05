var userFullName = document.getElementById('fullName')
var userJobTitle = document.getElementById('jobTitle')
var userEmail = document.getElementById('emailAddress')
var userGender = document.getElementById('gender')
var userAddress = document.getElementById('address')
var userMobileNum = document.getElementById('mobileNum')

var dataArray = location.search.substring(1).split('&')

var dataObj = {}
for (var i in dataArray) {
    var currentField = dataArray[i].split('=')
    dataObj[currentField[0]] = currentField[1].replaceAll('+',' ')
}

dataObj['emailaddress'] = dataObj['emailaddress'].replace('11%40','@')

userFullName.innerText += ' ' + dataObj['fullName']
userJobTitle.innerText += ' ' +  dataObj['jobTitle']
userEmail.innerText += ' ' + dataObj['emailaddress']
userGender.innerText += ' ' + dataObj['gender']
userAddress.innerText += ' ' + dataObj['address']
userMobileNum.innerText += ' [+20] ' + dataObj['mobile']

