var cardItems = document.querySelectorAll('.card-item')
var gameoverDiv = document.querySelector('.game-over')
var replayBtn = document.getElementById('replay-btn')

var imgSrcList = [1,2,3,4,5,6]
var shuffledImgList
function imgListShuffle(){
    var firstHalf = imgSrcList.slice().sort(() => 0.5 - Math.random())
    var secondHalf = imgSrcList.slice().sort(() => 0.5 - Math.random())
    shuffledImgList = firstHalf.concat(secondHalf)
}
imgListShuffle()

var firstSelection
var secondSelection 

var prevItem
var freeze = false;
cardItems.forEach((item,index,items)=>{
    item.addEventListener('click',()=>{
        if(!freeze){
            if(!firstSelection && item.src === location.href+'assets/Moon.gif' ){
                firstSelection = {itemIndex:shuffledImgList[index],imgSrc:'assets/'+shuffledImgList[index]+'.gif'}
                item.src = firstSelection.imgSrc
                prevItem = item
            }
            if(firstSelection && item.src === location.href+'assets/Moon.gif' ){
                secondSelection = {itemIndex:shuffledImgList[index],imgSrc:'assets/'+shuffledImgList[index]+'.gif'}
                item.src = secondSelection.imgSrc
            }
        }
        if(firstSelection && secondSelection){
            freeze = true
            if(firstSelection.itemIndex !== secondSelection.itemIndex){
                setTimeout(function(){
                    freeze = false
                    item.src = 'assets/Moon.gif'
                    prevItem.src = 'assets/Moon.gif'
                },1000)
            }else{
                freeze = false
                
            }
            firstSelection = null
            secondSelection = null
        }
        if(Array(...items).every(item=>item.src !== location.href+'assets/Moon.gif')){
            gameoverDiv.style.display = 'block'            
        }
    })
})

replayBtn.onclick = function(){
    imgListShuffle()
    firstSelection = null
    secondSelection = null
    prevItem = null
    freeze = false;
    gameoverDiv.style.display = 'none'            
    cardItems.forEach(item=>
        item.src = location.href+'assets/Moon.gif'
    )   
}