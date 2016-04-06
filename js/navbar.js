$(document).ready(function(){
	$(".nav li").click(function(){
		$(".nav li").removeClass("active");
		$(".nav li").find("ul").hide();
		$(this).addClass("active");
		$(this).find("ul").show();
	});
});