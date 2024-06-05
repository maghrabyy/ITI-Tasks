//buttons elements
var autoplayBtn = document.getElementById('autoplay-btn')
var stopBtn = document.getElementById('stop-btn')
var prevImgBtn = document.getElementById('prev-img-btn')
var nextImgBtn = document.getElementById('next-img-btn')

//img element
var shownImg = document.getElementById('shown-img')

//images list
var imgSrc = 'assets/'
var imgsList = [
    {src:imgSrc+'1.jpg',alt:'web development'},
    {src:imgSrc+'2.jpg',alt:'UI - UX design'},
    {src:imgSrc+'3.jpg',alt:'mobile development'},
    {src:imgSrc+'4.jpg',alt:'game development'},
]

//render current img
var imgIndex = 0;
function renderImg(){
    shownImg.src = imgsList[imgIndex].src
    shownImg.alt = imgsList[imgIndex].alt
}
renderImg()

//event handlers
nextImgBtn.onclick = function(e){
    prevImgBtn.disabled = false
    imgIndex++;
    renderImg()
    e.target.disabled = imgIndex === imgsList.length-1
}

prevImgBtn.onclick = function(e){
    nextImgBtn.disabled = false
    imgIndex--;
    renderImg()
    e.target.disabled = imgIndex === 0
}

var slideShowInterval
autoplayBtn.onclick = function(){
    autoplayBtn.disabled = true
    nextImgBtn.disabled = true
    prevImgBtn.disabled = true
    stopBtn.disabled = false
    slideShowInterval = setInterval(function(){
        if(imgIndex < imgsList.length-1){
            imgIndex++;
            renderImg()
        }else{
            imgIndex = 0;
            renderImg()
        }
    },2000)
}

stopBtn.onclick = function(){
    clearInterval(slideShowInterval)
    stopBtn.disabled = true
    autoplayBtn.disabled = false
    nextImgBtn.disabled = imgIndex === imgsList.length-1
    prevImgBtn.disabled = imgIndex === 0 
}