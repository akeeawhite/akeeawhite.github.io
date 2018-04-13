var imagecount;
var total;

imagecount = 1;
total = 3;

/* Automated slider function */

window.setInterval( function photoAuto( x ){
    var image = document.getElementById('slide_img');
 	imagecount = imagecount + 1; 
	
	if(imagecount > 3){ imagecount = 1;}
	
	if(imagecount < 1){ imagecount = 3;}
	
	image.src="images/slide"+ imagecount +".jpg"
	
 },4000);

/* end of slider automated function  */

/* click slider function */
function photo( x ){
    var image = document.getElementById('slide_img');
 	imagecount = imagecount + x; 
	
	if(imagecount > 3){ imagecount = 1;}
	
	if(imagecount < 1){ imagecount = 3;}
	

	image.src="slide"+ imagecount +".jpg"
	
 }

/* End click slider function */
