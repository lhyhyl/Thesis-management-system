$(function(){
	var $text = $('.text-title').val();
	
	$('.text-title').focus(function(){
		if($(this).val() == $text){
			$(this).attr('value','');
		}
	})
	$('.text-title').blur(function(){
		if($(this).val() == ''){
			$(this).val($text);
		}
		
	
	})
	
	$(".isTrue").click(function(){
		if(confirm("确定选择该论题吗？") == true){
			return true;
		}else{
			return false;
		}
	})
	
//	$('.button-title').click(function(){
//		$('.feedback').toggle(600);
//	})
	
	
	
	//设置查重相关
//	var check = false;
	$(".button-title").click(function(){
		if(confirm("确定查重？") == true){
			$(".isTrue").removeAttr('disabled')
						.removeClass("elsecss");
		}else{
			$(".isTrue").attr('disabled','true')
						.addClass("elsecss");
						
		}
	})
})

		function judge(){
			
			var $jpan = $('#js-span').html();
			if($jpan == true){
				$(".isTrue").removeAttr('disabled')
						.removeClass("elsecss");
			}else{
				$(".isTrue").attr('disabled','true')
						.addClass("elsecss");
			}
		}
