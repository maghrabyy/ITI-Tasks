const colorSelector = document.getElementById("colorSelector")
const changeColorBtn = document.getElementById("changeColorBtn")

const canvas = document.getElementById("myCanvas")

const ctx = canvas.getContext("2d")


changeColorBtn.addEventListener("click",()=>{
    strokeColor = colorSelector.value
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
    drawCircle(colorSelector.value)
})


const drawCircle = (color)=>{
    for(let i = 0; i < 500; i++){
        const randX = Math.floor(Math.random()*canvas.clientWidth)
        const randY = Math.floor(Math.random()*canvas.clientHeight)
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.arc(randX+15,randY+15,15,0,2*Math.PI,true)
        ctx.stroke()
    }
}

drawCircle(colorSelector.value)