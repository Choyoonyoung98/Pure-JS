var i = 0; // Start point
	var images = ['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg'];
	var time = 1000;

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
