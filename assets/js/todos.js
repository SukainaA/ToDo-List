// Check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

});

//click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
event.stopPropagation();
//stopPropagation stops the parents elements from poping up
});

$("input[type='text']").keypress(function(e){
	//which corresponds to character code of the pressed key
if (e.which == 13) {
	//grabbing new todo text from input
var todoText = $(this).val();
$(this).val("");
//create new li and add to ul
$("ul").append("<li><span id='trashCan'><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
}
});

$("#Plus").click(function(){
   $("input[type='text']").fadeToggle();
});