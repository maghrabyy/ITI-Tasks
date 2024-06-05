var topIcon = document.getElementById('top')
var firstIcon = document.getElementById('icon1')
var secondIcon = document.getElementById('icon2')
var container = document.querySelector('.container')
var toggleBtn = document.getElementById('toggle-btn')
var resetBtn = document.getElementById('reset-btn')
var firstIconInfo = document.getElementById('icon1-info')
var secondIconInfo = document.getElementById('icon2-info')

function initialLeftOffset(){    
    var firstIconLOffset = 0
    var secondIconLOffset = container.clientWidth-secondIcon.clientWidth
    firstIconInfo.innerText = '<img id="icon1" src="assets/icon1.gif" ' + 'style="left ' + firstIconLOffset + 'px"/>'
    secondIconInfo.innerText = '<img id="icon2" src="assets/icon2.gif" ' + 'style="left ' + secondIconLOffset + 'px"/>'
}
initialLeftOffset()

var bottom = 0
var goUp = true
function topIconBounce(){
    if(goUp){
        topIcon.style.bottom = bottom++ + 'px'
       if(topIcon.offsetTop == 0){
        goUp = false
       } 
    }else{
        topIcon.style.bottom = bottom-- + 'px'
        if(topIcon.offsetTop == container.clientHeight-topIcon.clientHeight){
            goUp = true
        }
    }
}

var left = 0
var goRight = true
function firstIconBounce(){
    firstIconInfo.innerText = '<img id="icon1" src="assets/icon1.gif" ' + 'style="left ' + firstIcon.offsetLeft + 'px"/>'
    if(goRight){
        firstIcon.style.left = left++ + 'px'
        if(firstIcon.offsetLeft == container.clientWidth-firstIcon.clientWidth){
            goRight = false
        }
    }else{
        firstIcon.style.left = left-- + 'px'
        if(firstIcon.offsetLeft == 0){
            goRight = true
        }
    }
}

var right = 0
var goLeft = true
function secondIconBounce(){
    secondIconInfo.innerText = '<img id="icon2" src="assets/icon2.gif" ' + 'style="left ' + secondIcon.offsetLeft + 'px"/>'
    if(goLeft){
        secondIcon.style.right = right++ + 'px'
        if(secondIcon.offsetLeft == 0){
            goLeft = false
        }
    }else{
        secondIcon.style.right = right-- + 'px'
        if(secondIcon.offsetLeft == container.clientWidth-secondIcon.clientWidth){
            goLeft = true
        }
    }
}

var isStarted = false
var goTopInterval
var goRightInterval 
var goLeftInterval 
toggleBtn.addEventListener('click',function(e){
 if(!isStarted){
    isStarted = true
    e.target.innerText = 'stop'
    goTopInterval = setInterval(topIconBounce,10)
    goRightInterval = setInterval(firstIconBounce,10)
    goLeftInterval = setInterval(secondIconBounce,10)
 }else{
    isStarted = false
    e.target.innerText = 'start'
    clearInterval(goTopInterval)
    clearInterval(goRightInterval)
    clearInterval(goLeftInterval)
 }
})

resetBtn.addEventListener('click',function(){
    initialLeftOffset()
    isStarted = false
    topIcon.style.bottom = 0;
    firstIcon.style.left = 0;
    secondIcon.style.right = 0;
    left = 0, right = 0, bottom = 0;
    clearInterval(goTopInterval)
    clearInterval(goRightInterval)
    clearInterval(goLeftInterval)
})