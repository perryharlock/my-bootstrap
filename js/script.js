$(document).ready(function(){

	// ### SIMPLE CAROUSEL ### //

	// Settings

	// Bindings
	var rightButton = $("[data-role='rightButton']");
	var leftButton = $("[data-role='leftButton']");
	var carouselWrapper = $("[data-role='carouselWrapper']");
	var itemContainer = $("[data-role='itemContainer']");
	var item = $("[data-role='carouselItem']");

	// Calcs and size setting
	var numberImages = item.length;
	var itemWidth = item.width();
	var itemHeight = item.height();

	itemContainer.width(numberImages * itemWidth);
	itemContainer.height(itemHeight);
	carouselWrapper.height(itemHeight);

	// Insert last li item before first
	item.first().before(item.last());

	// Set indent from left for itemContainer
	itemContainer.css("left", - itemWidth + "px");

	// Click left
	leftButton.click(function(event){
		event.preventDefault();

		// Rebind itemContainer
		var itemContainer = $("[data-role='itemContainer']");

		// Calc left indent
		var leftIndent = parseInt(itemContainer.css("left")) + itemWidth;

		// Animate, add last item before first and position
		itemContainer.animate({"left":leftIndent}, function(){
			item.first().before(item.last());
			itemContainer.css("left", - itemWidth + "px")
		});

	});

	// Click right
	rightButton.click(function(event){
		event.preventDefault();

		// Rebind itemContainer
		var itemContainer = $("[data-role='itemContainer']");

		// Calc left indent
		var leftIndent = parseInt(itemContainer.css("left")) - itemWidth;

		// Animate, add last item before first and position
		itemContainer.animate({"left":leftIndent}, function(){
			item.last().after(item.first());
			itemContainer.css("left", - itemWidth + "px");
		});	
		
	});

});