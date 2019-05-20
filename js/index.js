$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".tabdl dd").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('dd').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })
    $(".nav1 dd").each(function(index){
        $(this).click(function(){
            $(".nav2 dd").removeClass('on');
            $(".zgMs2").hide()
            $(this).addClass('on').siblings('dd').removeClass('on');
             $(".zgMs1").hide().eq(index).fadeIn(200);
        })
    })
    $(".nav2 dd").each(function(index){
        $(this).click(function(){
            $(".nav1 dd").removeClass('on');
            $(".zgMs1").hide()
            $(this).addClass('on').siblings('dd').removeClass('on');
             $(".zgMs2").hide().eq(index).fadeIn(200);
        })
    })
    $('.imdown a').click(function(){
        $('.form').fadeIn();
        $('.cover').fadeIn();
    })
    $('.forClose').click(function(){
        $('.form').hide();
        $('.cover').hide();
    })
})