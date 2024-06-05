var cardList = document.querySelectorAll('.card-item')
var cardGenBtn = document.getElementById('card-generator')
var personalMsgTextArea = document.getElementById('personalMsg')

var cardsArray = Array.from(cardList)

var selectedImgSrc 
for(var i in cardsArray){
    cardsArray[i].addEventListener('click',(function(index){
        return function (){
            //Closure - inner function can access the index param from the outer function
            var card = cardsArray[index]
            var cardRadioBtn = card.lastElementChild
            cardRadioBtn.checked = true
            selectedImgSrc = cardRadioBtn.value
        }
    })(i))//IIFE
}

    
cardGenBtn.addEventListener('click',function(){
    if(personalMsgTextArea.value && selectedImgSrc){
        window.open('popupCard.html','','width=400px; height=450px')  
        //msg Cookie
        hasCookie('msg') ? 
        updateCookie('msg',personalMsgTextArea.value,{
            path:'popupCard.html'
        }) 
        : 
        createCookie('msg',personalMsgTextArea.value,{
            path:'popupCard.html'
        })
        //imgSrc Cookie
        hasCookie('imgSrc') ?
        updateCookie('imgSrc',selectedImgSrc,{
            path:'popupCard.html'
        })
        :
        createCookie('imgSrc',selectedImgSrc,{
            path:'popupCard.html'
        })
    }else{
        if(!selectedImgSrc)
         alert('You have to select a card first.')
        if(!personalMsgTextArea.value)
            alert('You have to write a message first.')
    }
})