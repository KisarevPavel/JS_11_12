(function($){
	$.fn.carousel = function(){
		
		var block = $(this);
		
		var control_block = '<div class="controls">' + 
				'<div class="carousel-arrow-left">Left</div>' +
				'<div class="carousel-arrow-right">Right</div>' + 
			'</div>';
			
		block.append(control_block);
		
		var leftBtn = $(".carousel-arrow-left");
		var rightBtn = $(".carousel-arrow-right");
		var elementsList = $('.carousel-list');
		
		var pixelsOffset = 205;
		var currentLeftValue = 0;
		
		var elementsCount = elementsList.find('li').length;
		var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
		var maximumOffset = 0;
		
	
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
		
		
		return this;
		};
		
})(jQuery);






