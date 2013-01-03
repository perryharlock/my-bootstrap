$(document).ready(function(){

	// ### TABBED CONTENT ### //

	// Bindings
	var tabTrigger = $("[data-role='tabTrigger']");
	var tabTarget = $("[data-role='tabTarget']");

	// Add active classes to first elements
	tabTrigger.first().addClass("active");
	tabTarget.first().addClass("active");

	// On tab trigger click
	tabTrigger.click(function(event){
		event.preventDefault();

		// Remove all active classes
		tabTrigger.removeClass("active");
		tabTarget.removeClass("active");

		// Make clicked trigger active
		$(this).addClass("active");

		// Make relevenat target active	
		var target = $(this).attr("href");
		$(target).addClass("active");
	});

});