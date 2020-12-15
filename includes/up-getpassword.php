<?php 
	header("Access-Control-Allow-Origin: *");
	
	require_once('db.php');
	global $con;

	$passid = $_POST['passid'];
	$upoldpass = mysqli_real_escape_string($con, sha1(($_POST['upoldpass']).'-*/-*'));

	$sql = "SELECT password FROM register WHERE id = '$passid' AND password = '$upoldpass'";
	$res = mysqli_query($con, $sql);
	if($res->num_rows > 0){
		echo "ok";
	}else{
		echo "not ok";
	}
 ?>