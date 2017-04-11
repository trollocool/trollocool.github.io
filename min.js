/*JS*/
$('#scroll__top').click(()=>{
	$('html').animate({scrollTop : 0},600);
});

$(document).ready(()=>{
    if($('html').scrollTop()==0){
        $('html').animate({scrollTop : $('#nav__container').outerHeight()},200);
    }
});
