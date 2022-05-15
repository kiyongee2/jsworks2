// 메뉴 동작 스크립트
let isOver1 = false;

function goHide(){
    for(var i = 1; i <= 4; i++){
        if(!isOver1){
            $(".gnb_depth2_" + i).stop().fadeOut('fast');
        }
    }
}

$(document).ready(function(){

    $(".openAll1").mouseover(function(){
        if(parseInt($('header').css('width')) > 800){
            $('.gnb_depth2_1').fadeIn('fast');
            isOver1 = true;
        }
    });

    $(".openAll2").mouseover(function(){
        if(parseInt($('header').css('width')) > 800){
            $('.gnb_depth2_2').fadeIn('fast');
            isOver1 = true;
        }
    });

    $(".openAll3").mouseover(function(){
        if(parseInt($('header').css('width')) > 800){
            $('.gnb_depth2_3').fadeIn('fast');
            isOver1 = true;
        }
    });

    $(".openAll4").mouseover(function(){
        if(parseInt($('header').css('width')) > 800){
            $('.gnb_depth2_4').fadeIn('fast');
            isOver1 = true;
        }
    });
});

$(document).ready(function(){
    for(var i = 1; i <= 4; i++){
        $(".openAll" + i).mouseout(function(){
            isOver1 = false;
            setTimeout(goHide, 200)
        });
    }
});