<?php 
	header("Access-Control-Allow-Origin: *");
	require_once('db.php');
	global $con;

	$em = mysqli_real_escape_string($con, $_POST['em']);

	$sql = "SELECT email FROM register WHERE email = '$em'";
	$res = mysqli_query($con, $sql);
	if($res->num_rows > 0){
		echo "ok";
	}else{
		echo "not ok";
	}
 ?>