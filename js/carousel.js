$(document).ready(function(){

	// ### SIMPLE CAROUSEL ### //

	// Settings

	// Bindings
	var rightButton = $("[data-role='rightButton']");
	var leftButton = $("[data-role='leftButton']");
	var carouselWrapper = $("[data-role='carouselWrapper']");
	var itemContainer = $("[data-role='itemContainer']");
	var item = $("[data-role='carouselItem']");

	// Size setting
	itemContainer.width(item.length * item.width());
	itemContainer.height(item.height());
	carouselWrapper.height(item.height());

	// Insert last li item before first
	item.first().before(item.last());

	// Set indent from left for itemContainer
	itemContainer.css("left", - item.width() + "px");

	// Click left
	leftButton.click(function(event){
		event.preventDefault();

		// Rebind itemContainer
		var itemContainer = $("[data-role='itemContainer']");
		var item = $("[data-role='carouselItem']");

		// Calc left indent
		var leftIndent = parseInt(itemContainer.css("left"),10) + item.width();

		// Animate, add last item before first and position
		itemContainer.animate({"left":leftIndent}, function(){
			item.first().before(item.last());
			itemContainer.css("left", - item.width() + "px");
		});

	});

	// Click right
	rightButton.click(function(event){
		event.preventDefault();

		// Rebind itemContainer
		var itemContainer = $("[data-role='itemContainer']");
		var item = $("[data-role='carouselItem']");

		// Calc left indent
		var leftIndent = parseInt(itemContainer.css("left"),10) - item.width();

		// Animate, add last item before first and position
		itemContainer.animate({"left":leftIndent}, function(){
			item.last().after(item.first());
			itemContainer.css("left", - item.width() + "px");
		});

	});

});