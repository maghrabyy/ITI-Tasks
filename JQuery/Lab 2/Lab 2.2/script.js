const homePage = $(".sidebar-item")[0]
$(".content").text(`${$(homePage).text()} Page`)

$(".showSidebarBtn").on("click",()=>{
    $(".sidebar").css({"transform":"translateX(0)"});
    $('.overlay').css("display",'block')
})

const closeSidebar = ()=>{
    $('.overlay').css("display",'none')
    $(".sidebar").css({"transform":"translateX(-100%)"});
}

$(".overlay").on("click",closeSidebar)

$(".sidebar-item").on("click",function(){
    const pageIndex = Array.from($(".sidebar-item")).indexOf(this)
    const selectedPage = $(".sidebar-item")[pageIndex];
    closeSidebar()
    $(".content").animate({"opacity":0},500,()=>{
        $(".content").animate({"opacity":100},1000).text(`${$(selectedPage).text()} Page`)
    })
})