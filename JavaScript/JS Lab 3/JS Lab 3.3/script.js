var newWindow
var windowInterval

function showWindow(){
    newWindow = window.open('typingWindow.html','','width = 500px; height = 500px;')
    var charIndex = 0;
    str = 'Hello there, My name is Mahmoud Elmaghraby, I\'m a JS developer and ITI Student.';
    windowInterval = setInterval(function(){
        newWindow.document.write(str[charIndex])
        charIndex++
        if(charIndex > str.length-1){
            clearInterval(windowInterval)
            setTimeout(function(){
                newWindow.close()
            }, 2000);
        }
    },100)
}