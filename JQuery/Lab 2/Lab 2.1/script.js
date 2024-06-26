const imgsSrcList = Array.from($('.imgs-container img')).map(img => $(img).attr("src"));
let currentIndex;
const lastIndex = imgsSrcList.length-1

function setPreviewImg(src,alt){
    $('.slide-show img').attr("src",src)
    $('.slide-show img').attr("alt",alt)
}

$('.imgs-container img').on("click",function(){
    const selectedImgSrc = $($(this)).attr('src');
    const selectedImgAlt = $($(this)).attr('alt');
    $('.img-preview').css("visibility","visible");
    setPreviewImg(selectedImgSrc,selectedImgAlt)
    currentIndex = imgsSrcList.indexOf($(".slide-show img").attr("src"))
})

$('.slide-show .prevBtn').on("click",()=>{
    if(currentIndex > 0){
        currentIndex--
        setPreviewImg(imgsSrcList[currentIndex],imgsSrcList[currentIndex])
    }else{
        currentIndex = lastIndex;
        setPreviewImg(imgsSrcList[currentIndex],imgsSrcList[currentIndex])
    }
})

$('.slide-show .nextBtn').on("click",()=>{
    if(currentIndex < lastIndex){
        currentIndex++
        setPreviewImg(imgsSrcList[currentIndex],imgsSrcList[currentIndex])
    }else{
        currentIndex = 0;
        setPreviewImg(imgsSrcList[currentIndex],imgsSrcList[currentIndex])
    }
})

$(".overlay").on("click",()=>{
    $('.img-preview').css("visibility","hidden");
})

