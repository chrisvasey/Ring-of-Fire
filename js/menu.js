//DIV HIDES
$(window).load(function(){
	$(".menu").hide();
	$(".info").hide();
});


//MENU LOAD
$(window).load(function(){
	$(".menu").fadeIn('slow');
});



//Info Button
$(document).ready(function(){
	$(".infoBtn").click(function() {
		$(".menu").fadeOut('fast');
		$(".info").delay(400).fadeIn('slow');
	});
});

//Back Button
$(document).ready(function(){
	$(".back").click(function() {
		$(".info").fadeOut('fast');
		$(".menu").delay(400).fadeIn('slow');
	});
});