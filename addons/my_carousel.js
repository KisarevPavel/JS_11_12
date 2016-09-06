$(function(){
	var leftBtn = $(".carousel-arrow-left");
	var rightBtn = $(".carousel-arrow-right");
	var elementsList = $('.carousel-list');
	
	var pixelsOffset = 205;
    var currentLeftValue = 0;
	
	var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
	
	/* кнопки управления */
	leftBtn.click(function() {
		if (currentLeftValue != maximumOffset) {
			currentLeftValue += 205;
			elementsList.animate({ left : currentLeftValue + "px"}, 500);
		}
    });
	rightBtn.click(function() {
		if (currentLeftValue != minimumOffset) {
			currentLeftValue -= 205;
			elementsList.animate({ left : currentLeftValue + "px"}, 500);
		}
    });
	
	
})