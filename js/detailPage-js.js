$(function(){
	$(".sure input").click(function(){
		if(confirm("确定选择该论题吗？") == true){
			return true;
		}else{
			return false;
		}
	})
})