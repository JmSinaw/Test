<?php 
	header("Access-Control-Allow-Origin: *");
	
	require_once('db.php');
	global $con;

	$removeid = $_POST['removeid'];

	$sql = "DELETE FROM register WHERE id = '$removeid'";
	$res = mysqli_query($con, $sql);

	if($res){
		echo "ok";
	}
 ?>