// $(function(){
//     $('.web-nav').on('mouseover',function(){
//         $(this).addClass('on')
//         $(this).children('.nav-box').show()
//     })
//     $('.web-nav,nav-box').on('mouseout',function(){
//         $(this).removeClass('on')
//         $(this).children('.nav-box').hide()
//     })
// })

$(function(){
    // 推荐游戏
    $(".ul-tab1").on("mouseover","li",function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".ul-pic1").eq($(this).index()).show().siblings().hide();
    })
    // 文章资讯切换
    $("#new-article").on("click",".model-head i",function(){
        $(this).addClass("cur").siblings("i").removeClass("cur");
        $("#new-article").find(".model-body").hide();
        $("#new-article").find(".model-body").eq($(this).index()).show();
    })

    //轮播图
    $(".swiper-container").hover(function(){
        $(this).find(".swiper-button-prev").show();
        $(this).find(".swiper-button-next").show();
    },function(){
        $(this).find(".swiper-button-prev").hide();
        $(this).find(".swiper-button-next").hide();
    })
    var swiper1 = new Swiper('#swiper1', {
        autoplay: {
            delay: 3000,
        },
        // loop:true,
        pagination: {
            el: '#pagination1',
            clickable :true,
        },
        navigation: {
            nextEl: '#next1',
            prevEl: '#prev1',
        },
    })
    var swiper2 = new Swiper('#swiper2', {
        autoplay: {
            delay: 3000,
        },
        // loop:true,
        pagination: {
            el: '#pagination2',
            clickable :true,
        }
    })
    //floor2 tab
    $('.g-ivtab-top').on('mouseover','ul li',function(){
        $(this).addClass('m-hover').siblings().removeClass('m-hover');
        $('.g-tab-con').eq($(this).index()).show().siblings().hide();
    })
    //公益服tab
    $('.game-nav').on('mouseover','a',function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('.game-list').eq($(this).index()).show().siblings('.game-list').hide();
    })
    //游戏攻略tab
    $('.m-intr-recomd-tabtn').on('mouseover','a',function(){
        $(this).addClass('m-desktop-hover').siblings('a').removeClass('m-desktop-hover');
        $('.m-intr-list').eq($(this).index()).show().siblings('.m-intr-list').hide();
    })
    // ROM刷机tab
    $('.rom-nav').on('mouseover','a',function(){
        $(this).addClass('hover').siblings('a').removeClass('hover');
        $('.rom-list').eq($(this).index()).show().siblings('.rom-list').hide();
    })
})