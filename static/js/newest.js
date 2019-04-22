$(function(){
    var mySwiper = new Swiper('#swiper1', {
        autoplay: {
            disableOnInteraction: false,
          },
        // loop:true,
        slidesPerView : 12,
        slidesPerGroup : 1,
        navigation: {
            nextEl: '#next',
            prevEl: '#prev',
          },
    })
    // 导航tab切换
    $('.nav-list').on('click','p',function(){
        $(this).addClass('on').siblings('p').removeClass('on');
        $('.con-list').eq($(this).index()).show().siblings('.con-list').hide();
    })
})