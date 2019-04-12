$(function() {
    $('.images .item:first, .control span:first, .title p:first').addClass('active');
    var index = 1, // 设置初始index为1  避免定时器第一次调用index=0没有任何动作多用3秒
        len = $('.images .item').length;

    function autoPlay() {
        // 注意：index++是指执行完后再自增1，所以index=0时，eq(index++)最开始是eq(0);
        $('.images .item').removeClass('active').eq(index++).addClass('active');
        // 此时index已经+1了
        $('.title p').removeClass('active').eq(index - 1).addClass('active');
        $('.control span').removeClass('active').eq(index - 1).addClass('active');
        // 当index自增到len,也就是超出图片的数量时，归零.
        if (index == len) {
            index = 0;
        }
    }
    // 定时器会循环触发函数autoPlay
    loop = setInterval(autoPlay, 4500);

    $('.control span').hover(
        function() {
            index = $(this).index();
            autoPlay();
            clearInterval(loop); // 清楚定时器，停止自动轮播
        },
        function() {
            loop = setInterval(autoPlay, 4500); // 启动定时器
        });
});