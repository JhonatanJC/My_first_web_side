document.addEventListener("DOMContentLoaded", function(event) {	
	/*var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.addEventListener("click", function() {
	if (thumbnailElement.className == 'small'){
		thumbnailElement.className = '';
	}
	else{
		thumbnailElement.className = 'small';
	}
	});*/
	
	var small_img = document.querySelectorAll(".small");
	small_img.forEach( element => {
		
		element.addEventListener("click", function() {
			if (element.className == 'small'){
				element.className = '';
		}
			else{
				element.className = 'small';
		}
		});


	} );

});
