//아코디언

$(document).ready(function(){
	//faq 게시판
	$(".accordio_box ol li").click(function(){
		$(".accordio_box ol li").removeClass("on");
		$(this).addClass("on");
	});
});