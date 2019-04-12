
$(function () {
    var i = 0;//图片下标的位置
    var clone = $("#carousel_big_pic #pic li").first().clone();//克隆第一张图片
    $("#carousel_big_pic #pic").append(clone);//复制到列表最后
    var size = $("#carousel_big_pic #pic img").size();//获取当前元素的个数
    // console.log(size);
    for (var j = 0; j < size-1; j++) {
        $("#carousel_big_pic #list").append("<li></li>");
    }
    $("#carousel_big_pic #list li").first().addClass("on");
    /*自动轮播*/
    var t = setInterval(function () { i++; move();},2000);
    /*鼠标悬停事件*/
    $("#carousel_big_pic").hover(function () {
        clearInterval(t);//鼠标悬停时清除定时器
    },function(){
        t=setInterval(function(){i++;move();},2000)
    });
    /*鼠标滑入原点事件*/
    $("#carousel_big_pic #list li").hover(function () {
        var index = $(this).index();//获取当前li索引值
        i = index;
        $("#carousel_big_pic #pic").stop().animate({ left: -index * 1920 }, 1500);//先停止移动，当鼠标移到下一个li在调用动画来移动
        $(this).addClass("on").siblings().removeClass("on");
    });
    /*向左按钮*/
    $("#carousel_big_pic .btn_l").click(function () {
        i++;
        move();
    })
    /*向右按钮*/
    $("#carousel_big_pic .btn_r").click(function () {
        i--;
        move();
    })
    /*移动事件*/
    //var i=0;
    //i++;
    //i--;
    function move() {
        if (i == size) {//到克隆的那个元素时候,也就是最后一张图片
            $("#carousel_big_pic #pic").css({ left: 0 });
            i = 1;
        }
        if (i == -1) {//第一张图片情况
            $("#carousel_big_pic #pic").css({ left: -(size - 1) * 1920 });
            i = size - 2;
        }
        $("#carousel_big_pic #pic").animate({ left: -i * 1920 }, 1500);//满足以上任意一条条件执行此动画
    
        if (i == size - 1) {//为.num下的li添加样式style
            $("#carousel_big_pic #list li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $("#carousel_big_pic #list li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
    });