$(document).ready(function(){
 //jQuery time

//add '.ready' to form when user focuses on it
$("#email").focus(function(){
	$("#cuboid form").addClass("ready");
})
//remove '.ready' when user blus away but only if there is no content
$("#email").blur(function(){
	if($(this).val() == "")
		$("#cuboid form").removeClass("ready");
})

//If the user is typing something make the arrow green/.active
$("#email").keyup(function(){
	//this adds .active class only if the input has some text
	$(".submit-icon").toggleClass("active", $(this).val().length > 0);
})

//on form submit remove .ready and add .loading to the form
$("#cuboid form").submit(function(){
	$(this).removeClass("ready").addClass("loading");
	//finish loading in 3s
	setTimeout(complete, 3000);
	//prevent default form submisson
	return false;
})
function complete()
{
	$("#cuboid form").removeClass("loading").addClass("complete");
}
//reset/refresh functionality
$(".reset-icon").click(function(){
	$("#cuboid form").removeClass("complete");
})




});