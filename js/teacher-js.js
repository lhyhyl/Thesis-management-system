$(function(){
//	$('form:not(.form1,.form2)').hover(function(){
//		$(this).children('input').addClass('hover');
//	},function(){
//		$(this).children('input').removeClass('hover');
//	})
	
	var $text1 = $('.text1').val();
	var $text2 = $('.text2').val();
	var $text3 = $('.text3').val();
	
	$('.text1').focus(function(){
		if($(this).val() == $text1){
			$(this).attr('value','');
		}
	})
	$('.text1').blur(function(){
		if($(this).val() == ''){
			$(this).val($text1);
		}
	})
	
	$('.text2').focus(function(){
		if($(this).val() == $text2){
			$(this).attr('value','');
		}
	})
	$('.text2').blur(function(){
		if($(this).val() == ''){
			$(this).val($text2);
		}
	})
	
	$('.text3').focus(function(){
		if($(this).val() == $text3){
			$(this).attr('value','');
		}
	})
	$('.text3').blur(function(){
		if($(this).val() == ''){
			$(this).val($text3);
		}
	})
})