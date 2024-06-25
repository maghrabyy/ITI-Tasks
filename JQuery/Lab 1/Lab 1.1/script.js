const nameInput = $('#nameInpt')
const addNameButton = $('.addNameBtn')
const namesList = $('.namesList')

addNameButton.on('click',()=>{
    if(nameInput.val().length > 0){
        const index = $('.nameItem').length
        const nameDiv = '<div class="nameItem"></div>';
        const nameSpan = `<span>${nameInput.val()}</span>`;
        const deleteNameSpan = '<span class="deleteName">Delete</div>';
        namesList.append(nameDiv)
        $($('.nameItem')[index]).html(`${nameSpan} ${deleteNameSpan}`)
        nameInput.val('')
    }else{
        alert('You\'ve to input a name first.')
    }
})

namesList.on('click','.deleteName',function(){
    $(this).parent().remove()
})