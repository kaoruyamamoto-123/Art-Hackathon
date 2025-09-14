let obj = [];
let count = 0;
let time = 0;
let pause = true;
let date1 = Date.now();
let mouse_move = {};
let chik = 0;
let ball = 0;


function drow(){
    for(let value in obj){      
        obj[value].f0();
        obj[value].f1();
    }
}        
    (function($) {
        $(window).on("load", function() {
          $("a[rel='m_PageScroll2id']").mPageScroll2id();
          scrollSpeed: 900;
          scrollingEasing: "easeInOutQuint";
        });
    })(jQuery);
      
