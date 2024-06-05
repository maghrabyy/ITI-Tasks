var newWindow
var windowInterval
function showWindow(){
    newWindow = window.open('scrollingWindow.html','','width = 600px; height = 800px')
    windowInterval = setInterval(function(){
        newWindow.scrollBy({top:100,behavior:"smooth"})
        console.log("newWindow.scrollY", newWindow.scrollY+newWindow.innerHeight )
        console.log("documentElement.scrollHeight",newWindow.document.documentElement.scrollHeight )
        if((newWindow.scrollY+newWindow.innerHeight) >= newWindow.document.documentElement.scrollHeight){
            clearInterval(windowInterval)
            setTimeout(function(){
                newWindow.close()
            },2000)
        }
    },500)


}