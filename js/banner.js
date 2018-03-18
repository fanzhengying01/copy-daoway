$(function(){
  $('.slide-list li').eq(0).show();
  $('.bn .bn-list').mousedown(function() {
    clearInterval(timer)
    $(this).addClass('on').siblings().removeClass('on')
    var index = $(this).index();
    i = index;
    $('.slide-list li').eq(index).fadeIn(500).siblings().fadeOut(500)
  }).mouseup(function(){
    timer=setInterval(play,2000);
  })
  $('.slide-list li').mouseenter(function(){
    clearInterval(timer)
  }).mouseout(function () {
    timer=setInterval(play,2000);
  })

  // 自动轮播
    var i = 0;
    var play = function(){
    i++;
    i = i > 2 ? 0 : i;
    $('.bn .bn-list').eq(i).addClass('on').siblings().removeClass('on')
    $('.slide-list li').eq(i).fadeIn(500).siblings().fadeOut(500);
  }
    var timer = setInterval(play,3000)

  // 头部显示
  var $top = $('header').height()
  $(window).scroll(function(){
    var $scrollTop = $(window).scrollTop()
    console.log($scrollTop)
    if($top<$scrollTop){
      $('header').addClass('header')
    }else{
      $('header').removeClass('header')
    }

  })

})