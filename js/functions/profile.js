$(document).ready(function(){
	displayData();
})

function displayData(){
	var email = localStorage.getItem("email");

	$.ajax({
		url: '../includes/getProfile.php',
		method: 'post',
		data: {email:email},
		dataType: 'JSON',
		success: function(data){
			$('#prof-id').text(data[0]);
			$('#prof-name').text(data[1]+" "+data[2]+" "+data[3]);
			$('#prof-nick').text(data[1]);
			$('#prof-age').text(", "+data[4]);
			$('#prof-address').text(data[5]);
			$('#prof-contact').text(data[6]);
			$('#prof-email').text(data[7]);

			$('#up-id').val(data[0]);
			$('#up-firstname').val(data[1]);
			$('#up-middlename').val(data[2]);
			$('#up-lastname').val(data[3]);
			$('#up-contact').val(data[6]);
			$('#up-email').val(data[7]);
		}
	})
}

//Update account functions
function displayUpdateData(){
	var a = $('#up-firstname').val();
	var b = $('#up-middlename').val();
	var c = $('#up-lastname').val();
	var d = $('#up-contact').val();
	var e = $('#up-email').val();

	$('#prof-name').text(a+" "+b+" "+c);
	$('#prof-nick').text(a);
	$('#prof-contact').text(d);
	$('#prof-email').text(e);
}


$(document).on('click', '#link-updateAcc', function(e){
	e.preventDefault();
	var id = $('#prof-id').text();
	$.ajax({
		url: '../includes/getAccToUpdate.php',
		method: 'post',
		data: {id:id},
		dataType: 'JSON',
		success: function(data){
			$('#up-id').val(data[0]);
			$('#up-firstname').val(data[1]);
			$('#up-middlename').val(data[2]);
			$('#up-lastname').val(data[3]);
			$('#up-contact').val(data[4]);
			$('#up-email').val(data[5]);
			$('#updateAccount-modal').modal('show');
		}
	})
})

$(document).on('click', '#btn-updateAccount', function(e){
	e.preventDefault();
	var upid = $('#up-id').val();
	var fn = $('#up-firstname').val();
	var mn = $('#up-middlename').val();
	var ln = $('#up-lastname').val();
	var contact = $('#up-contact').val();
	var em = $('#up-email').val();
	var regex = /^[a-zA-Z Ññ]+$/;
	var regexnum = /^[0-9 ]+$/;
	var regexemail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

	if(fn == ""){
		checkFirstname();
	}else{
		if(!fn.match(regex)){
			checkFistnameChar();
		}else{
			if(mn == ""){
				checkMiddlename();
			}else{
				if(!mn.match(regex)){
					checkMiddlenameChar();
				}else{
					if(ln == ""){
						checkLastname();
					}else{
						if(!ln.match(regex)){
							checkLastnameChar();
						}else{
							if(contact == ""){
								checkContact();
							}else{
								if(!contact.match(regexnum)){
									checkContactChar();
								}else{
									if(em == ""){
										checkEmail();
									}else{
										if(!em.match(regexemail)){
											checkValidEmail();
										}else{
											$.ajax({
												url: '../includes/update-account.php',
												method: 'post',
												data: {upid:upid, fn:fn, mn:mn, ln:ln, contact:contact, em:em},
												success: function(data){
												
													if(data == "ok"){
														displayUpdateData();
														$('#update-form')[0].reset();
														$('#up-accountnotif').html('<div class = "alert alert-success py-1">Account updated successfuly!</div>');
														$('#btn-updateAccount').hide();
													}

													if(data == "no changes"){
														$('#up-accountnotif').html('<div class = "alert alert-success py-1">You did not change any data!</div>');	
													}

													if(data == "same email"){
														$('#up-accountnotif').html('<div class = "alert alert-danger py-1">Email already being used!</div>');	
													}

													if(data == "not ok"){
														$('#up-accountnotif').html('<div class = "alert alert-success py-1">Error updating data!</div>');	
													} 
												}
											})
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
})

$('#updateAcc-close').click(function(){
	$('#up-accountnotif').html('');
	$('#btn-updateAccount').show();
	$('#up-firstname').css("border", "1px solid #bfbfbf");
	$('#up-middlename').css("border", "1px solid #bfbfbf");
	$('#up-lastname').css("border", "1px solid #bfbfbf");
	$('#up-contact').css("border", "1px solid #bfbfbf");
	$('#up-email').css("border", "1px solid #bfbfbf");
})

function checkFirstname(){
	$('#up-accountnotif').html('<div class="alert alert-danger py-1">Firstname is required!</div>');
	$('#up-firstname').css("border", "1px solid #ff8080");
}

function checkFistnameChar(){
	$('#up-accountnotif').html('<div class="alert alert-danger py-1">Invalid character detected in firstname!</div>');
	$('#up-firstname').css("border", "1px solid #ff8080");
	$('#up-firstname').val('');
}

function checkMiddlename(){
	$('#up-accountnotif').html('<div class="alert alert-danger py-1">Middlename is required!</div>');
	$('#up-middlename').css("border", "1px solid #ff8080");
}

function checkMiddlenameChar(){
	$('#up-accountnotif').html('<div class="alert alert-danger py-1">Invalid character detected in middlename!</div>');
	$('#up-middlename').css("border", "1px solid #ff8080");
	$('#up-middlename').val('');
}

function checkLastname(){
	$('#up-accountnotif').html('<div class="alert alert-danger py-1">Lastname is required!</div>');
	$('#up-lastname').css("border", "1px solid #ff8080");
}

function checkLastnameChar(){
	$('#up-accountnotif').html('<div class="alert alert-danger py-1">Invalid character detected in lastname!</div>');
	$('#up-lastname').css("border", "1px solid #ff8080");
	$('#up-lastname').val('');
}

function checkContact(){
	$('#up-accountnotif').html("<div class='alert alert-danger py-1'>Contact number is required!</div>");
	$('#up-con').css("border", "1px solid #ff8080");
}

function checkContactChar(){
	$('#up-accountnotif').html("<div class='alert alert-danger py-1'>Numeric character is required for contact number!</div>");
	$('#up-con').css("border", "1px solid #ff8080");
	$('#up-con').val();
}

function checkEmail(){
	$('#up-accountnotif').html("<div class='alert alert-danger py-1'>Email Address is required!</div>");
	$('#up-email').css("border", "1px solid #ff8080");
}

function checkValidEmail(){
	$('#up-accountnotif').html("<div class='alert alert-danger py-1'>Invalid email!</div>");
	$('#up-email').css("border", "1px solid #ff8080");
	$('#up-email').val("");
}

$('#up-firstname').keyup(function(){
	$('#up-accountnotif').html('');
	$('#up-firstname').css("border", "1px solid #bfbfbf");
})

$('#up-middlename').keyup(function(){
	$('#up-accountnotif').html('');
	$('#up-middlename').css("border", "1px solid #bfbfbf");
})

$('#up-lastname').keyup(function(){
	$('#up-accountnotif').html('');
	$('#up-lastname').css("border", "1px solid #bfbfbf");
})

$('#up-contact').keyup(function(){
	$('#up-accountnotif').html('');
	$('#up-contact').css("border", "1px solid #bfbfbf");
})

$('#up-email').keyup(function(){
	$('#up-accountnotif').html('');
	$('#up-email').css("border", "1px solid #bfbfbf");
})
//End of Update account functions

//Change password functions
$(document).on('click', '#changepass-link', function(e){
	e.preventDefault();
	$('#updatePassword-modal').modal('show');
})

//Showing or hiding password
$(document).on('change', '#customCheck', function(e){
	e.preventDefault();
	var openPass1 = document.getElementById("up-oldpass");
	var openPass2 = document.getElementById("up-newpass");
	var openPass3 = document.getElementById("up-retnewpass");
	if(openPass1.type == "password" && openPass2.type == "password" && openPass3.type == "password"){
		openPass1.type = "text";
		openPass2.type = "text";
		openPass3.type = "text";
	}else{
		openPass1.type = "password";
		openPass2.type = "password";
		openPass3.type = "password";
	}
})

$(document).on('click', '#btn-upnext', function(e){
	e.preventDefault();
	var passid = $('#prof-id').text();
	var upoldpass = $('#up-oldpass').val();
	if(upoldpass == ""){
		$('#uppass-notif').html('<div class="alert alert-danger py-1">Please enter old password!</div>');
		$('#up-oldpass').css("border", "1px solid #ff8080");
	}else{
		$.ajax({
			url: '../includes/up-getpassword.php',
			method: 'post',
			data: {passid:passid, upoldpass:upoldpass},
			success: function(data){
				if(data == "ok"){
					$('#upoldpass-con').hide();
					$('#btnupnext-div').hide();
					$('#btnupnewpass-div').show();
					$('#newpass-inputsdiv').show();
				}

				if(data == "not ok"){
					$('#uppass-notif').html('<div class="alert alert-danger py-1">Wrong password!</div>');
					$('#up-oldpass').css("border", "1px solid #ff8080");
				}

				if(data == "no changes"){
					$('#up-accountnotif').html('<div class = "alert alert-success py-1">You did not change any data!</div>');	
				}

				if(data == "same email"){
					$('#up-accountnotif').html('<div class = "alert alert-danger py-1">Email already being used!</div>');	
				}

				if(data == "not ok"){
					$('#up-accountnotif').html('<div class = "alert alert-success py-1">Error updating data!</div>');	
				} 
			}
		});
	}
})

$('#up-oldpass').keyup(function(){
	$('#uppass-notif').html('');
	$('#up-oldpass').css("border", "1px solid #bfbfbf");
})

$('#updatePass-close').click(function(){
	$('#uppass-notif').html('');
	$('#up-oldpass').css("border", "1px solid #bfbfbf");
	$('#up-newpass').css("border", "1px solid #bfbfbf");
	$('#up-retnewpass').css("border", "1px solid #bfbfbf");
	$('#upoldpass-con').show();
	$('#btnupnext-div').show();
	$('#btnupnewpass-div').hide();
	$('#newpass-inputsdiv').hide();
	$('#btn-updatePassword').show();
	$('#uppass-form')[0].reset();
})

$(document).on('click', '#btn-updatePassword', function(e){
	e.preventDefault();
	var passid = $('#prof-id').text();
	var upnewpass = $('#up-newpass').val();
	var upretnewpass = $('#up-retnewpass').val();
	function test(){
		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test($('#up-newpass').val());
	}

	if(upnewpass == ""){
		$('#uppass-notif').html('<div class="alert alert-danger py-1">Please enter new password!</div>');
		$('#up-newpass').css("border", "1px solid #ff8080");
	}else{
		if(test() == false){
			$('#uppass-notif').html("<div class='alert alert-danger py-1'>Password must contain:<br>Minimum of 8 characters length.<br>At least 1 upper case & 1 lower case.<br>At least 1 number & 1 special character.</div>");
			$('#up-newpass').css("border", "1px solid #ff8080");
		}else{
			if(upretnewpass == ""){
				$('#uppass-notif').html('<div class="alert alert-danger py-1">Please retype new password!</div>');
				$('#up-retnewpass').css("border", "1px solid #ff8080");
			}else{
				if(upnewpass != upretnewpass){
					$('#uppass-notif').html('<div class="alert alert-danger py-1">Password do not match!</div>');
				}else{
					$.ajax({
						url: '../includes/up-changepassword.php',
						method: 'post',
						data: {passid:passid, upnewpass:upnewpass},
						success: function(data){
							if(data == "ok"){
								$('#uppass-notif').html('<div class="alert alert-success py-1">Password changed successfuly!</div>');
								$('#btn-updatePassword').hide();
								$('#uppass-form')[0].reset();
							}

							if(data == "not ok"){
								$('#uppass-notif').html('<div class="alert alert-danger py-1">An error occured in changing your password!</div>');
								$('#btn-updatePassword').hide();
							}

							if(data == "same"){
								$('#uppass-notif').html('<div class = "alert alert-success py-1">You did not change your password!</div>');	
							}
						}
					})
				}
			}
		}
	}
})

$('#up-newpass').keyup(function(){
	$('#uppass-notif').html('');
	$('#up-newpass').css("border", "1px solid #bfbfbf");
})

$('#up-retnewpass').keyup(function(){
	$('#uppass-notif').html('');
	$('#up-retnewpass').css("border", "1px solid #bfbfbf");
})
//End of Change password functions


//Remove password functions
$(document).on('click', '#removeaccount-link', function(e){
	$('#deleteuser-modal').modal('show');
})

$(document).on('click', '#btn-removeaccount', function(e){
	var removeid = $('#prof-id').text();

	$.ajax({
		url: '../includes/remove-account.php',
		method: 'post',
		data: {removeid:removeid},
		success: function(data){
			if(data == "ok"){
				window.location.href = "../index.php";
			}
		}
	})
})

