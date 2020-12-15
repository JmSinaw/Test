<?php 
	header("Access-Control-Allow-Origin: *");
	require_once('db.php');

	global $con;

	$email = mysqli_real_escape_string($con, $_POST['logEmail']);
	$password = mysqli_real_escape_string($con, sha1(($_POST['logPass']).'-*/-*'));

	$qry = "SELECT email FROM register WHERE email = '$email'";
	$res = mysqli_query($con, $qry);
	if ($res->num_rows > 0){
		$log = "SELECT email, password FROM register WHERE email = '$email' AND password = '$password'";
		$result = mysqli_query($con, $log);
		if ($result->num_rows > 0){
			echo "ok";
		}else{
			echo "not ok";
		}
	}else{
		echo "not found";
	}
 ?>