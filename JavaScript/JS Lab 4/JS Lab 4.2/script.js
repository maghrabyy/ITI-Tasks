var marblesContainer = document.getElementById('marbles-container')

var marblesInterval
var marbleIndex = 0

function moveMarble(){
    if(marbleIndex < document.images.length-1){
        document.images[marbleIndex].src = 'assets/marble1.jpg' 
        document.images[marbleIndex+1].src = 'assets/marble2.jpg'
        marbleIndex++
    }
    else{
        marbleIndex = 0
        document.images[0].src = 'assets/marble2.jpg' 
        document.images[document.images.length-1].src = 'assets/marble1.jpg'
    }
}

marblesInterval = setInterval(moveMarble,1000)


marblesContainer.onmouseover = function(){
    clearInterval(marblesInterval)
}

marblesContainer.onmouseleave = function(){
    marblesInterval = setInterval(moveMarble,1000)
}