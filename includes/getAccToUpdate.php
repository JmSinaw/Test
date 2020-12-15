<?php 
	header("Access-Control-Allow-Origin: *");
	require_once('db.php');

	global $con;

	$id = $_POST['id'];

	$qry = "SELECT id, firstname, middlename, lastname, contact, email FROM register WHERE id = '$id'";
 	$res = mysqli_query($con, $qry);

	while($rows = mysqli_fetch_assoc($res)){
		$User_data[0]=$rows['id'];
		$User_data[1]=$rows['firstname'];
		$User_data[2]=$rows['middlename'];
		$User_data[3]=$rows['lastname'];
		$User_data[4]=$rows['contact'];
		$User_data[5]=$rows['email'];
	}
	echo json_encode($User_data); 
 ?>