<?php 
	header("Access-Control-Allow-Origin: *");
	require_once('db.php');
	global $con;

	$em = $_POST['em'];
	$newpass = mysqli_real_escape_string($con, sha1(($_POST['newpass']).'-*/-*'));

	$sql = "UPDATE register SET password = '$newpass' WHERE email = '$em'";
	$res = mysqli_query($con, $sql);

	if($res){
		echo "ok";
	}else{
		echo "not ok";
	}
 ?>