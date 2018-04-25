$(document).ready(function(){

	$("#img-logo").css("margin-top", "-40px");
	$("#front-page").css("opacity", "1");

	$("#front-page span").css({"border-bottom":"solid 2px #32bfab", "visibility":"visible"});

	// $("body").css({"background":"url('img/background.jpg') center center fixed"});

	// $('body').fadeTo('slow', 0.3, function()
	// {
 //   		$(this).css('background-image', 'url("img/background2-0.jpg") fixed');
	// }).fadeTo('slow', 1);


	$(".li-main1").mouseover(function(){
		$(".icon-monitor").css({"visibility":"visible", "margin-left":"0px", "opacity":"1"});
	}).mouseout(function(){
		$(".icon-monitor").css({"visibility":"hidden", "margin-left":"-50px", "opacity":"0"});
	});

	$(".li-main2").mouseover(function(){
		$(".icon-person").css({"visibility":"visible", "margin-left":"0px", "opacity":"1"});
	}).mouseout(function(){
		$(".icon-person").css({"visibility":"hidden", "margin-left":"-50px", "opacity":"0"});
	});

	$(".li-main3").mouseover(function(){
		$(".icon-mail").css({"visibility":"visible", "margin-left":"0px", "opacity":"1"});
	}).mouseout(function(){
		$(".icon-mail").css({"visibility":"hidden", "margin-left":"-50px", "opacity":"0"});
	});

	$(".li-main4").mouseover(function(){
		$(".icon-blog").css({"visibility":"visible", "margin-left":"0px", "opacity":"1"});
	}).mouseout(function(){
		$(".icon-blog").css({"visibility":"hidden", "margin-left":"-50px", "opacity":"0"});
	});

	// $(".li-main1").mouseover(function(){
	// 	$("#hr-nav").css({"visibility":"visible", "width":"60px", "margin-left":"17px"});
	// }).mouseout(function(){
	// 	$("#hr-nav").css({"visibility":"hidden", "width":"1px"});
	// });

	// $(".li-main2").mouseover(function(){
	// 	$("#hr-nav").css({"visibility":"visible", "width":"60px", "margin-left":"101px"});
	// }).mouseout(function(){
	// 	$("#hr-nav").css({"visibility":"hidden", "width":"1px"});
	// });

	// $(".li-main3").mouseover(function(){
	// 	$("#hr-nav").css({"visibility":"visible", "width":"80px", "margin-left":"185px"});
	// }).mouseout(function(){
	// 	$("#hr-nav").css({"visibility":"hidden", "width":"1px"});
	// });

	// $(".li-main4").mouseover(function(){
	// 	$("#hr-nav").css({"visibility":"visible", "width":"49px", "margin-left":"286px"});
	// }).mouseout(function(){
	// 	$("#hr-nav").css({"visibility":"hidden", "width":"1px"});
	// });


	$('a[href*=#container-works]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});

	$('a[href*=#container-about]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});

	$('a[href*=#container-footer]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});

	var ativado = 1;

	$('.seta-direita-work1').on('click', function(){
		if (ativado == 1) {
			$('#work-img2').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('#work-img1').css({"visibility":"hidden", "margin-left":"20%", "opacity":"0"});
	    	$('.kuziq-mobile2').css({"visibility":"visible", "margin-left":"65%", "opacity":"1"});
	    	$('.kuziq-mobile').css({"visibility":"hidden", "left":"75%", "opacity":"0"});
	    	$('#bolinha-2').css('background-position', '-12px');
	    	$('#bolinha-1').css('background-position', '0px');
	    	ativado = 2;
		}else{
			$('#work-img2').css({"visibility":"hidden", "margin-left":"-60%", "opacity":"0"});
	    	$('#work-img1').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('.kuziq-mobile2').css({"visibility":"hidden", "margin-left":"-22%", "opacity":"0"});
	    	$('.kuziq-mobile').css({"visibility":"visible", "left":"65%", "opacity":"1"});
	    	$('#bolinha-1').css('background-position', '-12px');
	    	$('#bolinha-2').css('background-position', '0px');
	    	ativado = 1;
		};

	// $('.seta-direita-work1').on('click', function(){     
	//     $('#work-img2').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	//     $('#work-img1').css({"visibility":"hidden", "margin-left":"60%", "opacity":"0"});

	//     $('.seta-direita-work1').on('click', function(){
	//     	$('#work-img2').css({"visibility":"hidden", "margin-left":"-60%", "opacity":"0"});
	//     	$('#work-img1').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	//     });

	});

	$('.seta-esquerda-work1').on('click', function(){
		if (ativado == 1) {
			$('#work-img2').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('#work-img1').css({"visibility":"hidden", "margin-left":"20%", "opacity":"0"});
	    	$('.kuziq-mobile2').css({"visibility":"visible", "margin-left":"65%", "opacity":"1"});
	    	$('.kuziq-mobile').css({"visibility":"hidden", "left":"75%", "opacity":"0"});
	    	$('#bolinha-2').css('background-position', '-12px');
	    	$('#bolinha-1').css('background-position', '0px');
	    	ativado = 2;
		}else{
			$('#work-img2').css({"visibility":"hidden", "margin-left":"-60%", "opacity":"0"});
	    	$('#work-img1').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('.kuziq-mobile2').css({"visibility":"hidden", "margin-left":"-22%", "opacity":"0"});
	    	$('.kuziq-mobile').css({"visibility":"visible", "left":"65%", "opacity":"1"});
	    	$('#bolinha-1').css('background-position', '-12px');
	    	$('#bolinha-2').css('background-position', '0px');
	    	ativado = 1;
		};
	});


	$('#bolinha-1').mouseover(function(){
		$('#bolinha-1').css('background-position', '-12px');
	}).mouseout(function(){
		if (ativado == 2) {
			$('#bolinha-1').css('background-position', '0px');
		};
	});

	$('#bolinha-2').mouseover(function(){
		$('#bolinha-2').css('background-position', '-12px');
	}).mouseout(function(){
		if (ativado == 1) {
			$('#bolinha-2').css('background-position', '0px');
		};
		
	});

	if (ativado == 1) {
		$('#bolinha-1').css('background-position', '-12px');
	}else{
		$('#bolinha-2').css('background-position', '-12px');
	};

	$('#bolinha-1').on('click', function(){
		if (ativado == 2) {
			$('#work-img2').css({"visibility":"hidden", "margin-left":"-60%", "opacity":"0"});
	    	$('#work-img1').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('.kuziq-mobile2').css({"visibility":"hidden", "margin-left":"-22%", "opacity":"0"});
	    	$('.kuziq-mobile').css({"visibility":"visible", "left":"65%", "opacity":"1"});
	    	$('#bolinha-1').css('background-position', '-12px');
	    	$('#bolinha-2').css('background-position', '0px');
	    	ativado = 1;
		};
	});

	$('#bolinha-2').on('click', function(){
		if (ativado == 1) {
			$('#work-img2').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('#work-img1').css({"visibility":"hidden", "margin-left":"20%", "opacity":"0"});
	    	$('.kuziq-mobile2').css({"visibility":"visible", "margin-left":"65%", "opacity":"1"});
	    	$('.kuziq-mobile').css({"visibility":"hidden", "left":"75%", "opacity":"0"});
	    	$('#bolinha-2').css('background-position', '-12px');
	    	$('#bolinha-1').css('background-position', '0px');
	    	ativado = 2;
		};
	});


	var ativado2 = 1;

	$('.seta-direita-work2').on('click', function(){
		if (ativado2 == 1) {
			$('#work2-img2').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('#work2-img1').css({"visibility":"hidden", "margin-left":"20%", "opacity":"0"});
	    	$('#bolinha-work2-2').css('background-position', '-12px');
	    	$('#bolinha-work2-1').css('background-position', '0px');
	    	ativado2 = 2;
		}else{
			$('#work2-img2').css({"visibility":"hidden", "margin-left":"-60%", "opacity":"0"});
	    	$('#work2-img1').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('#bolinha-work2-1').css('background-position', '-12px');
	    	$('#bolinha-work2-2').css('background-position', '0px');
	    	ativado2 = 1;
		};

	});

	$('.seta-esquerda-work2').on('click', function(){
		if (ativado2 == 1) {
			$('#work2-img2').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('#work2-img1').css({"visibility":"hidden", "margin-left":"20%", "opacity":"0"});
	    	$('#bolinha-work2-2').css('background-position', '-12px');
	    	$('#bolinha-work2-1').css('background-position', '0px');
	    	ativado2 = 2;
		}else{
			$('#work2-img2').css({"visibility":"hidden", "margin-left":"-60%", "opacity":"0"});
	    	$('#work2-img1').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('#bolinha-work2-1').css('background-position', '-12px');
	    	$('#bolinha-work2-2').css('background-position', '0px');
	    	ativado2 = 1;
		};
	});


	$('#bolinha-work2-1').mouseover(function(){
		$('#bolinha-work2-1').css('background-position', '-12px');
	}).mouseout(function(){
		if (ativado2 == 2) {
			$('#bolinha-work2-1').css('background-position', '0px');
		};
	});

	$('#bolinha-work2-2').mouseover(function(){
		$('#bolinha-work2-2').css('background-position', '-12px');
	}).mouseout(function(){
		if (ativado2 == 1) {
			$('#bolinha-work2-2').css('background-position', '0px');
		};
		
	});

	if (ativado2 == 1) {
		$('#bolinha-work2-1').css('background-position', '-12px');
	}else{
		$('#bolinha-work2-2').css('background-position', '-12px');
	};

	$('#bolinha-work2-1').on('click', function(){
		if (ativado2 == 2) {
			$('#work2-img2').css({"visibility":"hidden", "margin-left":"-60%", "opacity":"0"});
	    	$('#work2-img1').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('#bolinha-work2-1').css('background-position', '-12px');
	    	$('#bolinha-work2-2').css('background-position', '0px');
	    	ativado2 = 1;
		};
	});

	$('#bolinha-work2-2').on('click', function(){
		if (ativado2 == 1) {
			$('#work2-img2').css({"visibility":"visible", "margin-left":"10%", "opacity":"1"});
	    	$('#work2-img1').css({"visibility":"hidden", "margin-left":"20%", "opacity":"0"});
	    	$('#bolinha-work2-2').css('background-position', '-12px');
	    	$('#bolinha-work2-1').css('background-position', '0px');
	    	ativado2 = 2;
		};
	});


});
