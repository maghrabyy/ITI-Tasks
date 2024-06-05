var bearImg = document.getElementById('header').firstElementChild
var containerDiv = document.querySelector('.center')
var listItems = document.getElementById('nav')


bearImg.addEventListener('click',function(e){
    containerDiv.insertAdjacentElement('beforeend',e.target.cloneNode())
    listItems.style.listStyle = 'circle inside'
})