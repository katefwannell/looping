
$(document).ready(function() {

	$("form#transportation_survey").submit(function(event) {
		event.preventDefault();

		$("#work-responses").show();
		$("input:checkbox[name=work-transportation]:checked").each(function(){
			$("#work-responses").append($(this).val() + "<br>");
		});

		$("#fun-responses").show();
		$("input:checkbox[name=fun-transportation]:checked").each(function(){
			$("#fun-responses").append($(this).val() + "<br>");
		});

		$("#transportation_survey").hide();

	});
});
