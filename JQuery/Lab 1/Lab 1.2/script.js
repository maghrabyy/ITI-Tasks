let prevTab;
$('.tab').on('click',function(){
    const tabIndex = Array.from($('.tab')).indexOf(this)
    $($(this)).addClass('active')
    $('.content').addClass('active')
    $(prevTab).removeClass('active')
    prevTab = $(this)
    $('.content').text(`Tab ${tabIndex+1}`)
})