$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			 $(".success-send").addClass("visibll"); 
             $(".overlay_f").addClass("visibll"); 
		});
		return false;
	});

});
