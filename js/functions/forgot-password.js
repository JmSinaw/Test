$(document).ready(function(){
	
})

//Showing or hiding password
$(document).on('change', '#customCheck', function(e){
	e.preventDefault();
	var openPass1 = document.getElementById("forgot-newpass");
	var openPass2 = document.getElementById("forgot-retnewpass");
	if(openPass1.type == "password" && openPass2.type == "password"){
		openPass1.type = "text";
		openPass2.type = "text";
	}else{
		openPass1.type = "password";
		openPass2.type = "password";
	}
})

$(document).on('click', '#forgot-next', function(e){
	e.preventDefault();
	var em = $('#forgot-email').val();
	var regexemail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

	if(em == ""){
		$('#forgot-notif').html('<div class="alert alert-danger py-1">Please enter your email!</div>');
		$('#forgot-email').css("border", "1px solid #ff8080");
	}else{
		if(!em.match(regexemail)){
			$('#forgot-notif').html('<div class="alert alert-danger py-1">Invalid email!</div>');
			$('#forgot-email').css("border", "1px solid #ff8080");
			$('#forgot-email').val('');
		}else{
			$.ajax({
				url: '../includes/forgot-getemail.php',
				method: 'post',
				data: {em:em},
				success: function(data){
					if(data == "ok"){
						$('#forgot-next').hide();
						$('#forgot-emaildiv').hide();
						$('#forgot-resetpass').show();
						$('#forgot-newpassdiv').show();
					}

					if(data == "not ok"){
						$('#forgot-notif').html('<div class="alert alert-danger py-1">Email not found. Please register!</div>');
					}
				}
			})
		}
	}
})

$('#forgot-email').keyup(function(){
	$('#forgot-notif').html('');
	$('#forgot-email').css("border", "1px solid #bfbfbf");
})

$(document).on('click', '#forgot-resetpass', function(e){
	e.preventDefault();
	var em = $('#forgot-email').val();
	var newpass = $('#forgot-newpass').val();
	var retnewpass = $('#forgot-retnewpass').val();
	function test(){
		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test($('#forgot-newpass').val());
	}

	if(newpass == ""){
		$('#forgot-notif').html('<div class="alert alert-danger py-1">Please enter new password!</div>');
		$('#forgot-newpass').css("border", "1px solid #ff8080");
	}else{
		if(test() == false){
			$('#forgot-notif').html("<div class='alert alert-danger py-1'>Password must contain:<br>Minimum of 8 characters length.<br>At least 1 upper case & 1 lower case.<br>At least 1 number & 1 special character.</div>");
			$('#forgot-newpass').css("border", "1px solid #ff8080");
		}else{
			if(retnewpass == ""){
				$('#forgot-notif').html('<div class="alert alert-danger py-1">Please retype new password!</div>');
				$('#forgot-retnewpass').css("border", "1px solid #ff8080");
			}else{
				if(newpass != retnewpass){
					$('#forgot-notif').html('<div class="alert alert-danger py-1">Password do not match!</div>');
					$('#forgot-retnewpass').css("border", "1px solid #ff8080");
				}else{
					$.ajax({
						url: '../includes/forgot-resetpassword.php',
						method: 'post',
						data: {em:em, newpass:newpass},
						success: function(data){
							if(data == "ok"){
								$('#forgot-notif').html('<div class="alert alert-success py-1">Password changed successfuly!</div>');
								$('#forgot-resetpass').hide();
								$('#forgot-ok').show();
								$('#forgot-form')[0].reset();
							}

							if(data == "not ok"){
								$('#forgot-notif').html('<div class="alert alert-danger py-1">An error occured in changing your password!</div>');
								$('#forgot-resetpass').hide();
								$('#forgot-ok').show();
							}
						}
					})
				}
			}
		}
	}
})

$('#forgot-newpass').keyup(function(){
	$('#forgot-notif').html('');
	$('#forgot-newpass').css("border", "1px solid #bfbfbf");
})

$('#forgot-retnewpass').keyup(function(){
	$('#forgot-notif').html('');
	$('#forgot-retnewpass').css("border", "1px solid #bfbfbf");
})

