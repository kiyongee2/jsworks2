$(document).ready( function() {
	//top을 클릭하면 header로 이동(라이브러리 포함)
	$('a.s_point').smoothScroll();

	// 스크롤하여 내려와 top버튼이 보이도록 함.
	if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	else $('.to_top').removeClass('hide');
	$(window).scroll( function() {
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	  else $('.to_top').removeClass('hide');
	});

	//goHide() 함수 - fadeOut() 설정
	let isOver1 = false;  //상위 메뉴 상태 변수
	let isOver2 = false;  //하위 메뉴 상태 변수

	function goHide() {
		for(var i = 1; i <= 4; i++){
			if(!isOver1 && !isOver2)
				$('.gnb_depth2_' + i).fadeOut('fast');
		}
	}

	//상위메뉴 마우스오버, 탭 클릭
	$('.openAll1').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )$('.gnb_depth2_1').fadeIn('fast');
		isOver1 = true;
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )$('.gnb_depth2_1').fadeIn('fast');
		isOver1 = true;
	}).mouseout(function(){
		setTimeout(goHide, 300);
		isOver1 = false;
	}).blur(function(){
		setTimeout(goHide, 300);
		isOver1 = false;
	});	
	//서브메뉴
	$(".gnb_depth2_1").mouseover(function(){
		isOver2 = true;
	}).focus(function(){
		isOver2 = true;
	}).mouseout(function(){
		isOver2 = false;
		setTimeout(goHide, 300);
	}).blur(function(){
		isOver2 = false;
		setTimeout(goHide, 300);
	});

	$('.openAll2').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )$('.gnb_depth2_2').fadeIn('fast');
		isOver1 = true;
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )$('.gnb_depth2_2').fadeIn('fast');
		isOver1 = true;
	}).mouseout(function(){
		isOver1 = false;
		setTimeout(goHide, 300);
	}).blur(function(){
		isOver1 = false;
		setTimeout(goHide, 300);
	});	
	//서브메뉴
	$(".gnb_depth2_2").mouseover(function(){
		isOver2 = true;
	}).focus(function(){
		isOver2 = true;
	}).mouseout(function(){
		setTimeout(goHide, 300);
		isOver2 = false;
	}).blur(function(){
		isOver2 = false;
		setTimeout(goHide, 300);
	})

	$('.openAll3').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )$('.gnb_depth2_3').fadeIn('fast');
		isOver1 = true;
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )$('.gnb_depth2_3').fadeIn('fast');
		isOver1 = true;
	}).mouseout(function(){
		setTimeout(goHide, 300);
		isOver1 = false;
	}).blur(function(){
		setTimeout(goHide, 300);
		isOver1 = false;
	});		
	//서브메뉴
	$(".gnb_depth2_3").mouseover(function(){
		isOver2 = true;
	}).focus(function(){
		isOver2 = true;
	}).mouseout(function(){
		setTimeout(goHide, 300);
		isOver2 = false;
	}).blur(function(){
		isOver2 = false;
		setTimeout(goHide, 300);
	})

	$('.openAll4').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )$('.gnb_depth2_4').fadeIn('fast');
		isOver1 = true;
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )$('.gnb_depth2_4').fadeIn('fast');
		isOver1 = true;
	}).mouseout(function(){
		setTimeout(goHide, 300);
		isOver1 = false;
	}).blur(function(){
		setTimeout(goHide, 300);
		isOver1 = false;
	});
	//서브메뉴
	$(".gnb_depth2_4").mouseover(function(){
		isOver2 = true;
	}).focus(function(){
		isOver2 = true;
	}).mouseout(function(){
		setTimeout(goHide, 300);
		isOver2 = false;
	}).blur(function(){
		isOver2 = false;
		setTimeout(goHide, 300);
	})

	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){
		$('header').addClass('on');
		$('header .header_cont').slideDown('fast');
		$('header .header_area .header_cont .closePop').show();			
		// $("body").bind('touchmove', function(e){e.preventDefault()});
	});
	$('header .header_cont .closePop').click(function(){
		$('.header_cont').slideUp('fast');
		$('header').removeClass('on');
		// $("body").unbind('touchmove');
	});
});

$(document).ready(function(){
    // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
    $(window).resize(function() {
        if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show();
    }); 
    
    // 프로그램 소개 - 더보기/접기 작동
	$(".program_list li .btn_more a").click(function(){
		if($(this).parent().parent().find(".subtxt").css("display")=="none"){
			$(this).parent().parent().find(".subtxt").css("display", "inline");
			$(this).text("접기");
		}else{
			$(this).parent().parent().find(".subtxt").css("display", "none");
			$(this).text("더보기");
		}
	});
   
});
