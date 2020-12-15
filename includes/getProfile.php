<?php 
	header("Access-Control-Allow-Origin: *");
	require_once('db.php');
	global $con;

	$email = $_POST['email'];

	$qry = "SELECT id, firstname, middlename, lastname, age, address, contact, email FROM register WHERE email = '$email'";
 	$res = mysqli_query($con, $qry);

	while($rows = mysqli_fetch_assoc($res)){
		$User_data[0]=$rows['id'];
		$User_data[1]=$rows['firstname'];
		$User_data[2]=$rows['middlename'];
		$User_data[3]=$rows['lastname'];
		$User_data[4]=$rows['age'];
		$User_data[5]=$rows['address'];
		$User_data[6]=$rows['contact'];
		$User_data[7]=$rows['email'];
	}
	echo json_encode($User_data);
 ?>