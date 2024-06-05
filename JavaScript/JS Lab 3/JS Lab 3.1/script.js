var newWindow
var windowInterval

function showWindow(){
    if(!windowInterval){
        newWindow = window.open('popscreen.html','','width = 200px; height = 200px;')
        var direction = 10
    
        windowInterval = setInterval(function(){
            var newWindowHeight = newWindow.screenY + newWindow.innerHeight;
            var parentWindowHeight = window.innerHeight
            newWindow.focus()
            if (newWindowHeight >= parentWindowHeight || newWindow.screenY <= 0){
                direction = -direction;
            }
            newWindow.moveBy(direction,direction)
        },100)     
    }
}

function closeWindow(){
    clearInterval(windowInterval)
    windowInterval = null
    newWindow.close()
}