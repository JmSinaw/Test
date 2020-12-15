$(document).ready(function(){

})

//Showing or hiding password
$(document).on('change', '#customCheck', function(e){
	e.preventDefault();
	var openPass = document.getElementById("log-pass");
	if(openPass.type == "password"){
		openPass.type = "text";
	}else{
		openPass.type = "password";
	}
})

//Login validation and processes
$('#btn-login').click(function(e){
	e.preventDefault();
	var logEmail = $('#log-email').val();
	var logPass = $('#log-pass').val();
	var checkEmail= /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

	if(logEmail == ""){
		$('#log-notif').html('<div class="alert alert-danger py-1">Email address is required!</div>');
		$('#log-email').css("border", "1px solid #ff8080");
	}else{
		if(!logEmail.match(checkEmail)){
			$('#log-notif').html('<div class="alert alert-danger py-1">Email is invalid!</div>');
			$('#log-email').css("border", "1px solid #ff8080");
		}else{
			if(logPass == ""){
				$('#log-notif').html('<div class="alert alert-danger py-1">Password is required!</div>');
				$('#log-pass').css("border", "1px solid #ff8080");
			}else{
				$.ajax({
					method: 'post',
					url: 'includes/login.php',
					data: {logEmail:logEmail, logPass:logPass},
					beforeSend: function(){
						$('#loader').show();
					},
					complete: function(){
						$('#loader').hide();
					}, 
					success: function(data){
						if(data == "not found"){
							$('#log-notif').html('<div class = "alert alert-danger py-1">Account not found. Please register!</div>');
						}	

						if(data == "not ok"){
							$('#log-notif').html('<div class = "alert alert-danger py-1">Wrong password!</div>');
							$('#log-pass').css("border", "1px solid #ff8080");
							$('#log-pass').val('');
						}

						if(data == "ok"){
							$('#login-form')[0].reset();
							localStorage.setItem("email", logEmail);
							window.location.href = "./examples/profile.php";
						}
					}
				});  
			}
		}
	}
})


//Login emain input if clicked
$('#log-email').keyup(function(){
	$('#log-notif').html('');
	$('#log-email').css("border", "1px solid #bfbfbf");
})

//Login password input if clicked
$('#log-pass').keyup(function(){
	$('#log-notif').html('');
	$('#log-pass').css("border", "1px solid #bfbfbf");
})

