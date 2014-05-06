window.onload = function(){
	$("#ptag").toggle();
	$("#ptag").text("hello world");
	$("#ptag").slideToggle(2500);
	$("#mydiv").fadeOut(1500,function(){
		$("#mydiv").fadeIn(1500);
	});
    $( "#datepicker" ).datepicker();
}