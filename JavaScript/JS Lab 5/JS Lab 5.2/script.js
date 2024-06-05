var msgForm = document.getElementById('msg-form')
var userInput = document.getElementById('user-input')

msgForm.addEventListener('submit',function(e){
    var isConfirmed = confirm('Are you sure you want to submit this message?')
    if(!isConfirmed){
        e.preventDefault()
    }
})

var noDataEvent = new Event('noData')

var inputTimeout = setTimeout(function(){
        userInput.dispatchEvent(noDataEvent)
},10000)

userInput.addEventListener('keydown',function(){
    clearInterval(inputTimeout)
})

userInput.addEventListener('noData',function(){
    msgForm.submit()
})
