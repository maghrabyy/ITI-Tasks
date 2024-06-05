class Rectangle{
    constructor(w,h){
     this.width = w
     this.height = h   
    }

    getWidth(){
        return this.width
    }
    getHeight(){
        return this.height
    }
    getArea(){
        return this.getWidth() * this.getHeight()
    }
    getPerimeter(){
        return (this.getWidth() + this.getHeight()) * 2
    }

    displayReactangleInfo(){
        return {
            Height:this.getHeight(),
            Width:this.getWidth(),
            Area:this.getArea(),
            Perimeter:this.getPerimeter()
        }
    }
}

var heightInpt = document.getElementById('Height')
var widthInpt = document.getElementById('Width')
var displayRectBtn = document.getElementById('display-btn')
var rectInfo = document.getElementById('rectangle-info')
var rectW = document.getElementById('rect-w')
var rectH = document.getElementById('rect-h')
var rectA = document.getElementById('rect-a')
var rectP = document.getElementById('rect-p')
rectInfo.style.display = 'none'


displayRectBtn.addEventListener('click',function(){
    rectInfo.style.display = 'block'
    var rect = new Rectangle(parseInt(widthInpt.value),parseInt(heightInpt.value))

    rectW.innerText = rect.getWidth()
    rectH.innerText = rect.getHeight()
    rectA.innerText = rect.getArea()
    rectP.innerText = rect.getPerimeter()
})