<?php 
	header("Access-Control-Allow-Origin: *");
	
	require_once('db.php');

	global $con;

	$a1 = mysqli_real_escape_string($con, $_POST['a1']);
	$a2 = mysqli_real_escape_string($con, $_POST['a2']);
	$a3 = mysqli_real_escape_string($con, $_POST['a3']); 
	$b1 = mysqli_real_escape_string($con, $_POST['b1']);
	$b2 = mysqli_real_escape_string($con, $_POST['b2']);
	$b3 = mysqli_real_escape_string($con, $_POST['b3']);
	$b4 = mysqli_real_escape_string($con, $_POST['b4']);
	$c = mysqli_real_escape_string($con, $_POST['c']);
	$d = mysqli_real_escape_string($con, $_POST['d']);
	$e = mysqli_real_escape_string($con, $_POST['e']);
	$f = mysqli_real_escape_string($con, $_POST['f']);
	$g = mysqli_real_escape_string($con, $_POST['g']);
	$h = mysqli_real_escape_string($con, $_POST['h']);
	$i = mysqli_real_escape_string($con, $_POST['i']); 
	$j = mysqli_real_escape_string($con, $_POST['j']); 
	$k = mysqli_real_escape_string($con, $_POST['k']); 
	$l = mysqli_real_escape_string($con, sha1(($_POST['l']).'-*/-*'));

	
	$sql = "SELECT lrn FROM register WHERE lrn = '$i'";
	$result = mysqli_query($con,$sql);
	if ($result->num_rows > 0) {
		echo "exist";
	}else{
		$em = "SELECT email FROM register WHERE email = '$k'";
		$res = mysqli_query($con,$em);
		if ($res->num_rows > 0) {
			echo "email";
		}else{
 			$ins = "INSERT INTO register(firstname, middlename, lastname, birthdate, birthmonth, birthyear, age, 
 					gender, status, address, school, school_add, grad_year, lrn, contact, email, password)
 					VALUES('$a1', '$a2', '$a3', '$b1', '$b2', '$b3', '$b4', '$c', '$d', '$e', '$f', '$g', '$h',
 							'$i', '$j', '$k', '$l')";
 			$ins_res = mysqli_query($con,$ins);

 			if($ins_res){
 				echo "ok";
 			}else{
 				echo "not ok";
 			}
 		} 
	} 
 ?>