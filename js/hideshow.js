$(document).ready(function(){

	// ### HIDE SHOW ### //

	// Bindings
	var hideShowTrigger = $("[data-role='hideShowTrigger']");
	var hideShowTarget = $("[data-role='hideShowTarget']");

	// On trigger click
	hideShowTrigger.click(function(event){
		$(this).toggleClass("open");
		$(this).next(hideShowTarget).slideToggle("slow");
	});

});