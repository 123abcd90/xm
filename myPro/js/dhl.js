var isAnimated = false;

$(document).ready(function(){

    //on() 添加监听  "所要监听的事件" function(){}当监听到事件后执行的方法
    $(window).on("scroll",function(){
        //this代表window scrollTop()向上滑动的距离
        if($(this).scrollTop() > 40){
            $(".top_header_nav").addClass("fixed");
            //如果动画执行过
            if(!isAnimated){
                $(".top_header_nav").css("top","-67px");//每次要执行动画之前都将top值设为-40px
                $(".top_header_nav").animate({"top":"0px"},1000);
                isAnimated = true;
            }
        }else{
            isAnimated = false;
            $(".top_header_nav").removeClass("fixed");
        }
    })

});
