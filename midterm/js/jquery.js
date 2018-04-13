
  	var imageCount = 1;
	 $('.left').click(function(){
		 imageCount++;
		 var image = 'images/slide'+ imageCount+'.jpg';
	 $("#slide_img").attr('src',image);	
	});


