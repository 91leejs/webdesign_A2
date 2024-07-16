$(function(){
    $(".main li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    }
    ,function(){
        $(".sub, .sub_bg").stop().slideUp();
    })//

    $(".p_click").click(function(){
        $(".modal, .pop").show();
    })//p click

    $(".close").click(function(){
        $(".modal, .pop").hide();
    })//close click

    var n = 0; // 0 1 2 
    setInterval(function(){
        if(n == 2){
            n = 0;
        }else{
            n++;
        }//if else
        //console.log(n);
        pos = n * (-1200) + "px";
        $(".move").animate({left : pos }, 500);
    }, 2000);
})//jQuery