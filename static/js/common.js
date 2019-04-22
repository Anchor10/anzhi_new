$(function(){
    //懒加载
    $("img[data-original]").lazyload({
        threshold: 200,
        skip_invisible: false,
        failurelimit: 2000,
        effect:"fadeIn"
    })
    //返回顶部
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('#back-top').show();
        } else {
            $('#back-top').hide();
        }
    });
    $('#back-top').on('click',function(){
        $('html,body').animate({"scrollTop":0},500)
    })
})