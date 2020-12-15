<?php 

	//$con = mysqli_connect('sql111.epizy.com', 'epiz_26829176', 'Yj5UEOGVC3o', 'epiz_26829176_badiang');

	//$con = mysqli_connect('sql204.epizy.com', 'epiz_27464053', 'r49hioAy4s', 'epiz_27464053_mydatabase');

	$con = mysqli_connect('localhost', 'root', '', 'mydatabase');
 	if(!$con){
 		die('Please check your connection'.mysqli_error());
 	}
 ?>
