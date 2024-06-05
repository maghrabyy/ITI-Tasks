
document.addEventListener('keydown',function(e){
    console.log(e)
    if(e.ctrlKey || e.shiftKey || e.altKey){
        alert(e.key + " is pressed.")
    }else{
        alert('The ASCII Code of your pressed key is ' + e.which)
    }
})


document.addEventListener('contextmenu',function(e){
    e.preventDefault()
    alert('Context Menu is disabled')
})