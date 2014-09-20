//DIV HIDES
$(window).load(function(){
	$(".menu").hide();
	$(".rules").hide();
	$(".info").hide();
});


//MENU LOAD
$(window).load(function(){
	$(".menu").fadeIn('slow');
});

//Rules Button
$(document).ready(function(){
	$(".rulesBtn").click(function() {
		$(".menu").fadeOut('fast');
		$(".rules").delay(400).fadeIn('slow');
	});
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
		$(".rules").fadeOut('fast');
		$(".info").fadeOut('fast');
		$(".menu").delay(400).fadeIn('slow');
	});
});