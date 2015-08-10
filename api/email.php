<?php

	$to      = 'pedro.cls93@gmail.com';
	$subject = 'Contact from personal page by'.$_POST["name"];
	$message = $_POST["message"];
	$headers = 'From: '.$_POST['email']."\r\n";    

	mail($to, $subject, $message, $headers);
	echo "Email sent";
	$success[] = array('success' => array(  'code' => 200,
                                    'reason' => "Email sent successfully"));
	echo json_encode($success);
	return;
?>