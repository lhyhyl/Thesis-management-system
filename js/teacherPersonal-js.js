$(function(){
	$('.user').hover(function(){
		$('.user-ul').show();
	},function(){
		$('.user-ul').hide();
		
	})
	
	$(".submit").click(function(){
		if(confirm("确定修改吗？") == true){
			return true;
		}else{
			return false;
		}
	})
	
	$(".delete input").click(function(){
		if(confirm("确定删除吗？") == true){
			return true;
		}else{
			return false;
		}
	})
})