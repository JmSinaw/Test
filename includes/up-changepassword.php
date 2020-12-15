<?php 
	header("Access-Control-Allow-Origin: *");
	
	require_once('db.php');
	global $con;

	$passid = $_POST['passid'];
	$upnewpass = mysqli_real_escape_string($con, sha1(($_POST['upnewpass']).'-*/-*'));

	$qry = "SELECT password FROM register WHERE id = '$passid'";
	$result = mysqli_query($con, $qry);
	while($rows = mysqli_fetch_assoc($result)){
		$User_data[0]=$rows['password'];
	}
	if($User_data[0] == $upnewpass){
		echo "same";
	}else{
		$sql = "UPDATE register SET password = '$upnewpass' WHERE id = '$passid'";
		$res = mysqli_query($con, $sql);

		if($res){
			echo "ok";
		}else{
			echo "not ok";
		}
	}
 ?>