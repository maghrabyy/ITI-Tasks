var regBtn = document.getElementById('reg-btn')
var fullNameInpt = document.getElementById('fullName')
var emailInpt = document.getElementById('email')
var ageInpt = document.getElementById('age')
var genderInpt = document.getElementById('gender')

regBtn.addEventListener('click',function(){   
    if(fullNameInpt.value && emailInpt.value && ageInpt.value && genderInpt.value){
        var afterOneMonth = new Date(new Date().setMonth(new Date().getMonth()+1))
        createCookie(fullNameInpt.name,fullNameInpt.value,afterOneMonth)
        createCookie(emailInpt.name,emailInpt.value,afterOneMonth)
        createCookie(ageInpt.name,ageInpt.value,afterOneMonth)
        createCookie(genderInpt.name,genderInpt.value,afterOneMonth)
        createCookie('visted',1,afterOneMonth)
        location.assign('/infopage.html')
    } else{
        alert('You\'ve to fill the following fields.')
    }
})
