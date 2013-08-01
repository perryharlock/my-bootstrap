;(function () {

	var currentRow, currentRowVal, oldRow,

	selectors = {
		editControl: '[data-role="edit-control"]',
		cancelControl: '[data-role="cancel-control"]',
		saveControl: '[data-role="save-control"]',
		description: '.description',
		controlRow: '.control-row',
		editControls: '.edit-controls',
		button: '.edit-controls button'
	};

	//click handlers
	$(document).on('click', selectors.editControl, function (event){
		event.preventDefault();
		getCurrentRowDetails($(this));
		oldRow = $(this).parents(selectors.controlRow).find(selectors.description).html();
		currentRow.html('<input type="text" value="' + currentRow.html() + '"/>');
		classToggler($(this));
		toggleHidden($(selectors.editControls));
		toggleHidden($(this).parents(selectors.editControls));
	});

	function toggleHidden ($target) {
		$target.toggleClass('hidden');
	}

	$(document).on('click', selectors.cancelControl, function (event){
		event.preventDefault();
		currentRow.html(oldRow);
		classToggler($(this));
		showEditControl();
	});

	$(document).on('click', selectors.saveControl, function (event){
		event.preventDefault();
		getCurrentRowDetails($(this));
		// save to backend function would go here
		currentRow.html(currentRowVal);
		classToggler($(this));
		showEditControl();
		$(this).parents(selectors.controlRow).addClass('saved');
	});

	// functions
	function classToggler(el){
		el.parents(selectors.editControls).toggleClass('active');
		el.parent().children(selectors.button).toggleClass('hidden');
	}

	function showEditControl (){
		$(selectors.editControl).removeClass('hidden');
		$(selectors.editControls).removeClass('hidden');
	}

	function getCurrentRowDetails (el) {
		currentRow = el.parents(selectors.controlRow).find(selectors.description);
		currentRowVal = el.parents(selectors.controlRow).find('input').val();
	}
}());