$(document).ready(function(e){
	$('#reg-age').attr('disabled', true).css('background', 'transparent');
})

//Showing or hiding password
$(document).on('change', '#customCheck', function(e){
	e.preventDefault();
	var openPass1 = document.getElementById("reg-pass");
	var openPass2 = document.getElementById("reg-retPass");
	if(openPass1.type == "password" && openPass2.type == "password"){
		openPass1.type = "text";
		openPass2.type = "text";
	}else{
		openPass1.type = "password";
		openPass2.type = "password";
	}
})

$(document).on('click', '#btn-next', function(e){
	e.preventDefault();
	var fn = $('#reg-firstname').val();
	var mn = $('#reg-middlename').val();
	var ln = $('#reg-lastname').val();
	var ex = $('#reg-extension').val();
	var regexnum = /^[0-9 ]+$/;
	var regex = /^[a-zA-Z Ññ]+$/;

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
							$('#form-one').hide();
							$('#form-two').show();
						}
					}
				}
			}
		}
	}
})

$(document).on('click', '#btn1-back', function(e){
	e.preventDefault();
	$('#form-one').show();
	$('#form-two').hide();
})

$(document).on('click', '#btn2-next', function(e){
	e.preventDefault();
	var b1 = $('#reg-birthdate').val();
	var b2 = $('#reg-birthmonth').val();
	var b3 = $('#reg-birthyear').val();
	var b4 = $('#reg-age').val();
	var c = $('#reg-gender').val();
	var d = $('#reg-status').val();
	var e = $('#reg-address').val();
	var regex = /^[a-zA-Z Ññ]+$/;
	var regexnum = /^[0-9 ]+$/;

	if(b1 == ""){
		checkBirthDate();							
	}else{
		if(b1 < 1 || b1 > 31){
			checkBirthDateValid();	
		}else{
			if(!b1.match(regexnum)){
				checkBithdateChar();
			}else{
				if(b2 == "Birth Month"){
					checkBirthMonth();
				}else{
					if(b3 == ""){
						checkBirthYear();	
					}else{
						if(!b3.match(regexnum)){
							checkBirthYearChar();
						}else{
							if(b3 < 1909 || b3 > 2021){
								checkBirthYearValid();
							}else{
								if(c == "Gender"){
									checkGender();
								}else{
									if(d == "Civil Status"){
										checkStatus();	
									}else{
										if(e == ""){
											checkAddress();	
										}	else{
											$('#form-three').show();
											$('#form-two').hide();
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

function checkBirthDate(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Birthdate is required!</div>');
	$('#reg-birthdate').css("border", "1px solid #ff8080");
}

function checkBirthDateValid(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Invalid date number in birthdate!</div>');
	$('#reg-birthdate').css("border", "1px solid #ff8080");
	$('#reg-birthdate').val('');
}

$(document).on('click', '#btn2-back', function(e){
	e.preventDefault();
	$('#form-three').hide();
	$('#form-two').show();
})

$(document).on('click', '#btn3-next', function(e){
	e.preventDefault();
	var f = $('#reg-school').val();
	var g = $('#reg-schooladd').val();
	var h = $('#reg-gradyear').val();
	var i = $('#reg-lrn').val();
	var regexnum = /^[0-9 ]+$/;

	if(f == ""){
		checkSchool();																											
	}else{
		if(g == ""){
			checkSchoolAdd();
		}else{
			if(h == ""){
				checkGradYear();
			}else{
				if(!h.match(regexnum)){
					checkGradYearChar();
				}else{
					if(h < 1990 || h > 2020){
						checkGradYearValid();	
					}else{
						if(i == ""){
							checkLRN();
						}else{
							if(!i.match(regexnum)){
								checkLRNChar();
							}else{			
								$('#form-three').hide();
								$('#form-four').show();		
							}							
						}																
					}		
				}		
			}											
		}											
	}
})

$(document).on('click', '#btn3-back', function(e){
	e.preventDefault();
	$('#form-three').show();
	$('#form-four').hide();
})

//Button register if clicked and do the passing of values to php file using ajax..
$(document).on('click', '#btn-reg', function(e){
	var a1 = $('#reg-firstname').val();
	var a2 = $('#reg-middlename').val();
	var a3 = $('#reg-lastname').val();
	var b1 = $('#reg-birthdate').val();
	var b2 = $('#reg-birthmonth').val();
	var b3 = $('#reg-birthyear').val();
	var b4 = $('#reg-age').val();
	var c = $('#reg-gender').val();
	var d = $('#reg-status').val();
	var e = $('#reg-address').val();
	var f = $('#reg-school').val();
	var g = $('#reg-schooladd').val();
	var h = $('#reg-gradyear').val();
	var i = $('#reg-lrn').val();
	var j = $('#reg-con').val();
	var k = $('#reg-email').val();
	var l = $('#reg-pass').val();
	var l2 = $('#reg-retPass').val();
	var regexnum = /^[0-9 ]+$/;
	var regexemail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

	function test(){
		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test($('#reg-pass').val());
	}

	if(j == ""){
		checkContact();			
	}else{
		if(!j.match(regexnum)){
			checkContactChar();				
		}else{
			if(k == ""){
				checkEmail()	
			}else{
				if(!k.match(regexemail)){
					checkValidEmail();
				}else{
					if(l == ""){
						checkPassword();
					}else{
						if(test() == false){
							checkStrongPass();
						}else{
							if(l2 == ""){
								checkRetPass()
							}else{
								if(l != l2){
									checkMatchPass();
								}else{
									$.ajax({
										method: 'post',
										url: '../includes/register.php',
										data: {a1:a1, a2:a2, a3:a3,
													 b1:b1, b2:b2, b3:b3, b4:b4,
													 c:c, d:d, e:e, f:f, g:g, h:h,
													 i:i, j:j, k:k, l:l},
										beforeSend: function(){
											$('#loader').show();
										},
										complete: function(){
											$('#loader').hide();
										}, 
										success: function(data){
										
											if(data == "exist"){
												$('#reg-notif').html('<div class = "alert alert-danger">Account already exist. Login now!</div>');	
											}else{
												$('#reg-notif').html('');	
											}

											if(data == "email"){
												$('#reg-notif').html('<div class = "alert alert-danger">Email already taken! Try another one.</div>');	
												$('#reg-email').css("border", "1px solid #ff8080");
												$('#reg-email').val("");
											}else{
												$('#reg-notif').html('');	
											}
										
											if(data == "ok"){
												$('#reg-notif').html('<div class = "alert alert-success">Registration successful. Login now to check your account!</div>');
												$('#form-reg')[0].reset();
												$('#btn3-back').hide();
												$('#btn-reg').hide();
												$('#btn-ok').show();
											} 

											if(data == "not ok"){
												$('#reg-notif').html('<div class = "alert alert-danger">Database error! Something went wrong in saving your data.</div>');
												$('#btn3-back').hide();
												$('#btn-reg').hide();
												$('#btn-ok').show();
											} 
										}
									});  
								}
							}
						}
					}
				}
			}
		}
	}
}) 

function checkFirstname(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Firstname is required!</div>');
	$('#reg-firstname').css("border", "1px solid #ff8080");
}

function checkFistnameChar(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Invalid character detected in firstname!</div>');
	$('#reg-firstname').css("border", "1px solid #ff8080");
	$('#reg-firstname').val('');
}

function checkMiddlename(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Middlename is required!</div>');
	$('#reg-middlename').css("border", "1px solid #ff8080");
}

function checkMiddlenameChar(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Invalid character detected in middlename!</div>');
	$('#reg-middlename').css("border", "1px solid #ff8080");
	$('#reg-middlename').val('');
}

function checkLastname(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Lastname is required!</div>');
	$('#reg-lastname').css("border", "1px solid #ff8080");
}

function checkLastnameChar(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Invalid character detected in lastname!</div>');
	$('#reg-lastname').css("border", "1px solid #ff8080");
	$('#reg-lastname').val('');
}

function checkAddress(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Address is required!</div>');
	$('#reg-address').css("border", "1px solid #ff8080");
}

function checkBithdateChar(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Numeric character is required for birth date!</div>');
	$('#reg-birthdate').css("border", "1px solid #ff8080");
	$('#reg-birthdate').val('');
}



function checkBirthMonth(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Please select birth month!</div>');
	$('#reg-birthmonth').css("border", "1px solid #ff8080");
}

function checkBirthYear(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Birth year is required!</div>');
	$('#reg-birthyear').css("border", "1px solid #ff8080");
}

function checkBirthYearChar(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Numeric character is required for birth year!</div>');
	$('#reg-birthyear').css("border", "1px solid #ff8080");
	$('#reg-birthyear').val('');
}

function checkBirthYearValid(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Year range from 1909-2021 only!</div>');
	$('#reg-birthyear').css("border", "1px solid #ff8080");
	$('#reg-birthyear').val('');
}

function checkGender(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Please select gender!</div>');
	$('#reg-gender').css("border", "1px solid #ff8080");
}

function checkStatus(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Please select civil status!</div>');
	$('#reg-status').css("border", "1px solid #ff8080");
}

function checkSchool(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Please enter name of school you graduated in high school!</div>');
	$('#reg-school').css("border", "1px solid #ff8080");
}

function checkSchoolAdd(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Please enter the address of school you graduated in high school!</div>');
	$('#reg-schooladd').css("border", "1px solid #ff8080");	
}

function checkGradYear(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Please enter the year you graduated in high school!</div>');
	$('#reg-gradyear').css("border", "1px solid #ff8080");		
}

function checkGradYearChar(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Numeric character is required for the year of your graduation!</div>');
	$('#reg-gradyear').css("border", "1px solid #ff8080");
	$('#reg-gradyear').val('');
}

function checkGradYearValid(){
	$('#reg-notif').html('<div class="alert alert-danger py-1">Year of graduation must in range from 1990-2020!</div>');
	$('#reg-gradyear').css("border", "1px solid #ff8080");
	$('#reg-gradyear').val('');
}

function checkLRN(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Learner's Reference Number required!</div>");
	$('#reg-lrn').css("border", "1px solid #ff8080");
}

function checkLRNChar(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Numeric character only for Learner's Reference Number!</div>");
	$('#reg-lrn').css("border", "1px solid #ff8080");		
	$('#reg-lrn').val("");
}

function checkContact(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Contact number is required!</div>");
	$('#reg-con').css("border", "1px solid #ff8080");
}

function checkContactChar(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Numeric character is required for contact number!</div>");
	$('#reg-con').css("border", "1px solid #ff8080");
	$('#reg-con').val();
}

function checkEmail(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Email Address is required!</div>");
	$('#reg-email').css("border", "1px solid #ff8080");
}

function checkValidEmail(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Invalid email!</div>");
	$('#reg-email').css("border", "1px solid #ff8080");
	$('#reg-email').val("");
}

function checkPassword(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Password is required!</div>");
	$('#reg-pass').css("border", "1px solid #ff8080");
}

function checkStrongPass(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Password must contain:<br>Minimum of 8 characters length.<br>At least 1 upper case & 1 lower case.<br>At least 1 number & 1 special character.</div>");
	$('#reg-pass').css("border", "1px solid #ff8080");
}

function checkRetPass(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Please retype your password!</div>");
	$('#reg-retPass').css("border", "1px solid #ff8080");
}

function checkMatchPass(){
	$('#reg-notif').html("<div class='alert alert-danger py-1'>Password do not match!</div>");
	$('#reg-retPass').css("border", "1px solid #ff8080");
}
//Firstname input field if clicked
$('#reg-firstname').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-firstname').css("border", "1px solid #bfbfbf");
})

//Middlename input field if clicked
$('#reg-middlename').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-middlename').css("border", "1px solid #bfbfbf");
})

//Lastname input field if clicked
$('#reg-lastname').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-lastname').css("border", "1px solid #bfbfbf");
})

//Address input field if clicked
$('#reg-address').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-address').css("border", "1px solid #bfbfbf");
})

// This function use to calculate age
function calculate(){
	var year = $('#reg-birthyear').val();
	var month = $('#reg-birthmonth').val();
	var day = $('#reg-birthdate').val();
	var currentDate = month+" "+day+", "+year;

  var bd = new Date(currentDate);
  var bdMonth  = bd.getMonth()+1;
  var bdDate = bd.getDate();
  var bdYear = bd.getFullYear();

  var today_date = new Date();
  var date_now = today_date.getDate();
  var month_now = today_date.getMonth()+1;
  var year_now = today_date.getFullYear();
  // You need to treat the cases where the year, month or day hasn't arrived yet.
  var count_age = 0;
  if(month_now > bdMonth){
  	count_age = year_now - bdYear;
  }else if(month_now == bdMonth){
  	if(date_now >= bdDate){
  		count_age = year_now - bdYear;
  	}else{
  		count_age = (year_now - bdYear)-1;
  	}
  }else{
  	count_age = (year_now - bdYear)-1;
  }
  $('#reg-age').val(count_age);
}

//Birth date input field if clicked
$('#reg-birthdate').keyup(function(){
	$('#reg-notif').html('');
  $('#reg-birthdate').css("border", "1px solid #bfbfbf");

  if($('#reg-birthdate').val() != "" && $('#reg-birthyear').val() != "" && $('#reg-birthmonth').val() != 0){
  	if($('#reg-birthdate').val().match(/^[0-9]+$/) && $('#reg-birthyear').val().match(/^[0-9]+$/)){
  		if($('#reg-birthdate').val() <= 31 && $('#reg-birthdate').val() > 0){
  			if($('#reg-birthyear').val() <= 2021 && $('#reg-birthyear').val() >= 1909){
  				calculate();
  			}else{
  				$('#reg-age').val('');
  			}
  		}else{
  			$('#reg-age').val('');
  		}
  	}else{
  		$('#reg-age').val('');
  	}
  }else{
  	$('#reg-age').val('');
  }
}) 

// Birth month select option if clicked
$('#reg-birthmonth').change(function(){
	$('#reg-notif').html('');
  $('#reg-birthmonth').css("border", "1px solid #bfbfbf");

  if($('#reg-birthmonth').val() != 0 && $('#reg-birthyear').val() != "" && $('#reg-birthdate').val() != ""){
  	if($('#reg-birthdate').val().match(/^[0-9]+$/) && $('#reg-birthyear').val().match(/^[0-9]+$/)){
  		if($('#reg-birthdate').val() <= 31 && $('#reg-birthdate').val() > 0){
  			if($('#reg-birthyear').val() <= 2021 && $('#reg-birthyear').val() >= 1909){
  				calculate();
  			}else{
  				$('#reg-age').val('');
  			}
  		}else{
  			$('#reg-age').val('');
  		}
  	}else{
  		$('#reg-age').val('');
  	}
  }else{
  	$('#reg-age').val('');
  }
})


// Birth year input field if clicked
$('#reg-birthyear').keyup(function(){
	$('#reg-notif').html('');
  $('#reg-birthyear').css("border", "1px solid #bfbfbf");

	if($('#reg-birthyear') != "" && $('#reg-birthmonth').val()!= 0 && $('#reg-birthdate').val()!= ""){
		if($('#reg-birthdate').val().match(/^[0-9]+$/) && $('#reg-birthyear').val().match(/^[0-9]+$/)){
			if($('#reg-birthdate').val() <= 31 && $('#reg-birthdate').val() > 0){
				if($('#reg-birthyear').val() <= 2021 && $('#reg-birthyear').val() >= 1909){
					calculate();
				}else{
					$('#reg-age').val('');
				}
			}else{
				$('#reg-age').val('');
			}
		}else{
			$('#reg-age').val('');
		}
	}else{
		$('#reg-age').val('');
	}
})

//Gender select option if clicked
$('#reg-gender').change(function(){
	$('#reg-notif').html('');
	$('#reg-gender').css("border", "1px solid #bfbfbf");
})

//Civil Status select option if clicked
$('#reg-status').change(function(){
	$('#reg-notif').html('');
	$('#reg-status').css("border", "1px solid #bfbfbf");
})

//School graduated input field if clicked
$('#reg-school').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-school').css("border", "1px solid #bfbfbf");
})

//School address input field if clicked
$('#reg-schooladd').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-schooladd').css("border", "1px solid #bfbfbf");
})

//Year graduated input field if clicked
$('#reg-gradyear').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-gradyear').css("border", "1px solid #bfbfbf");
})

//LRN input field if clicked
$('#reg-lrn').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-lrn').css("border", "1px solid #bfbfbf");
})

//Contact input field if clicked
$('#reg-con').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-con').css("border", "1px solid #bfbfbf");
})

//Email address input field if clicked
$('#reg-email').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-email').css("border", "1px solid #bfbfbf");
})

//Password input field if clicked
$('#reg-pass').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-pass').css("border", "1px solid #bfbfbf");
})

//Retype Password input field if clicked
$('#reg-retPass').keyup(function(){
	$('#reg-notif').html('');
	$('#reg-retPass').css("border", "1px solid #bfbfbf");
})