$(function(){
	$(window).resize(function(){
		var docao = $(window).height();
		$('.anhnen').css({'height':docao})
	});

	
	$('.n1').click(function(){
		$('html, body').animate({scrollTop:$('.about').offset().top},2000,"easeInOutExpo")
	})
	$('.n2').click(function(){
			$('html, body').animate({scrollTop:$('.taixuong').offset().top},2000,"easeInOutExpo")
		})
	$('.n3').click(function(){
			$('html, body').animate({scrollTop:$('.contact').offset().top},2000,"easeInOutExpo")
		})
	$('.nutxuong').click(function(){
			$('html, body').animate({scrollTop:$('.about').offset().top},2000,"easeInOutExpo")
		})
		
	
	$(window).scroll(function() {
		vitrihientai = $('html, body').scrollTop();

	if (vitrihientai > 50){
		$('.navbar-fixed-top').addClass('tienhoa');
	}
	else $('.navbar-fixed-top').removeClass('tienhoa');
})

})