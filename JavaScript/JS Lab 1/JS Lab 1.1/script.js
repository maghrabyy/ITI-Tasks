var userMsg = prompt("Enter your message here")

for(var i = 1; i <= 6;i++){
    document.write('<h'+i+'>' + userMsg + ' #' + i +'</h'+i+'>')
}