/*JS*/


$(document).ready(()=>{
	$('#scroll__top').click(()=>{
		$('html').animate({scrollTop : $('#nav__container').outerHeight()},600);
	});
    	if($('html').scrollTop()==0){
        	$('html').animate({scrollTop : $('#nav__container').outerHeight()},200);
    	}
});
