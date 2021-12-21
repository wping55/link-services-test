$(document).ready(function() {

	$('#bluetooth-share').click(function() {
		console.log("enter bluetooth share");
	});

	$('#refresh-status').click(function() {
		console.log("enter status share");
	});

	$('#checkout').click(function() {
		console.log("enter checkout");
		$(this).hide();
		$(this).siblings('span').show();
	});

	$('.footer-link').click(function() {
		console.log("enter footer");
		$(this).addClass('active').parent().siblings().children("a").removeClass('active');
	});
})