$(window).load(function(){

	// Bindings
	var rightButton = $("[data-role='rightButton']");
	var leftButton = $("[data-role='leftButton']");
	var carouselWrapper = $("[data-role='carouselWrapper']");
	var itemContainer = $("[data-role='itemContainer']");
	var item = $("[data-role='carouselItem']");

	// Calcs
	var numberImages = item.length;
	var imageWidth = parseInt(item.width());
	var imageHeight = item.height();

	// Set widths and heights of elements
	itemContainer.width(numberImages * imageWidth);
	itemContainer.height(imageHeight);
	carouselWrapper.height(imageHeight);

	// Insert last li item before first
	item.first().before(item.last());

	// Set indent from left for itemContainer
	itemContainer.css('left', - imageWidth + 'px');

	// Click left
	leftButton.click(function(event){
		event.preventDefault();
		var itemContainer = $("[data-role='itemContainer']");
		var leftIndent = parseInt(itemContainer.css('left')) + imageWidth;

		itemContainer.animate({'left':leftIndent}, function(){
			item.first().before(item.last());
			itemContainer.css('left', - imageWidth + 'px')
		});

	});

	// Click right
	rightButton.click(function(event){
		event.preventDefault();
		var itemContainer = $("[data-role='itemContainer']");
		var leftIndent = parseInt(itemContainer.css('left')) - imageWidth;

		itemContainer.animate({'left':leftIndent}, function(){
			item.last().after(item.first());
			itemContainer.css('left', - imageWidth + 'px')
		});	
		
	});


});