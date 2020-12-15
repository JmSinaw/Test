<?php 
	require_once('db.php');
	global $con;

	$upid = $_POST['upid'];
	$fn = mysqli_real_escape_string ($con, $_POST['fn']);
	$mn = mysqli_real_escape_string ($con, $_POST['mn']);
	$ln = mysqli_real_escape_string ($con, $_POST['ln']);
	$contact = mysqli_real_escape_string ($con, $_POST['contact']);
	$em = mysqli_real_escape_string ($con, $_POST['em']);

	$qry = "SELECT firstname, middlename, lastname, contact, email FROM register WHERE id = '$upid'";
	$res = mysqli_query($con, $qry);

	while($rows = mysqli_fetch_assoc($res)){
		$User[0]=$rows['firstname'];
		$User[1]=$rows['middlename'];
		$User[2]=$rows['lastname'];
		$User[3]=$rows['contact'];
		$User[4]=$rows['email'];
	}

	if($User[0] == $fn && $User[1] == $mn && $User[2] == $ln && $User[3] == $contact && $User[4] == $em){
		echo "no changes";
	}else{
		if($User[4] != $em){
			$query = "SELECT email FROM register WHERE email = '$em'";
			$result = mysqli_query($con, $query);
			if($result->num_rows > 0){
				echo "same email";
			}else{
				$ins = "UPDATE register SET firstname = '$fn', middlename = '$mn', lastname = '$ln', contact = '$contact', email = '$em' WHERE id = '$upid'";
				$insres = mysqli_query($con, $ins);
				if($insres){
					echo "ok";
				}else{
					echo "not ok";
				}
			}
		}else{
			$ins = "UPDATE register SET firstname = '$fn', middlename = '$mn', lastname = '$ln', contact = '$contact', email = '$em' WHERE id = '$upid'";
			$insres = mysqli_query($con, $ins);
			if($insres){
				echo "ok";
			}else{
				echo "not ok";
			}
		}
	}
?>