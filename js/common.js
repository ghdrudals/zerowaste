$(document).ready(function(){
    $(".rwd_box_txt").siblings().hide()

    $(".line").on("click",function(){
        $(".rwd_box").css("display","block")
        $(".line").find("img").attr("src","./img/x.png")
        $(".line").attr("class","xicon")
    })

    $(".xicon").on("click",function(){
        $(".rwd_box").css("display","none")
        $(".xicon").find("img").attr("src","./img/x.png")
        $(".xicon").attr("class","line")
    })

    $(".rwd_box_txt").on("click",function(){

        $(this).siblings().slideToggle()
        $(this).parent().siblings().children("h1").siblings().slideUp()
    })


}) //jquery end