$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var date = $("#booking").val();
		$("#contact-right").html(name + "<br>" + email + "<br>" + date);
	});

	/* Przejscia przy wczytywaniu strony */
	$("p, h1, h2, h3, h4, a, i, img, form, button").hide().fadeIn(2000);
});