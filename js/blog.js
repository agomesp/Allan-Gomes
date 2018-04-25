$(document).ready(function(){
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
});
