$(window).scroll(function(){
   var h = $(window).scrollTop(); 
   console.log(h);
   
   a= -1/500;
   b=115/50;
   var y= (-1/500)* h + 115/50;

  a2=-0.1/500;
  b2=1.13
  var y2 = (-0.1/500)*h+1.13
   $('.card_box').eq(0).css('opacity',y);
   $('.card_box').eq(0).css('transform',`scale(${y2})`);


})