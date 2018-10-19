$(function(){
	//输入框获得焦点
	var $defval1 = $('.all-words-1').val();
	var $defval2 = $('.all-words-2').val();
	var $defval3 = $('.all-words-3').val();
	
	$('.all-words-1').focus(function(){
		if($(this).val() == $defval1){
			$(this).attr('value','');
		}
	})
	$('.all-words-1').blur(function(){
		if($(this).val() == ''){
			$(this).val($defval1);
		}
	})
	
	$('.all-words-2').focus(function(){
		if($(this).val() == $defval2){
			$(this).attr('value','');
		}
	})
	$('.all-words-2').blur(function(){
		if($(this).val() == ''){
			$(this).val($defval2);
		}
	})
	
	$('.all-words-3').focus(function(){
		if($(this).val() == $defval3){
			$(this).attr('value','');
		}
	})
	$('.all-words-3').blur(function(){
		if($(this).val() == ''){
			$(this).val($defval3);
		}
	})
})
