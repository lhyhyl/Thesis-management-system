$(function() {
	$(".input4").click(function() {
		alert("你未选择");
	})
//	var con = false;
	$(".input8").click(function() {
		
		if(document.getElementById("stu-myfile2").value == null || document.getElementById("stu-myfile2").value == "") {
			
			alert("请选择文件");
			return false;
		}
		return true;
	})
	$(".input9").click(function() {
		
		if(document.getElementById("stu-myfile").value == null || document.getElementById("stu-myfile").value == "") {

			alert("请选择文件");
			return false;
		}
		return true;
		
	})
})