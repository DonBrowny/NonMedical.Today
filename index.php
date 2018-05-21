<?php

function Redirect($url, $permanent = false)
{
	header('Location: ' . $url, true, $permanent ? 301 : 302);

	exit();
}

function LogUserData($data)
{
	$myfile = fopen("nonmedical.today.log.txt", "w") or die("Unable to open file!");
	fwrite($myfile, $txt);
	fclose($myfile);
}
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$mobile = $_POST['mobile'];
		$age = $_POST['age'];
		$optradio = $_POST['optradio'];
		$from = 'form@nonmedical.byethost24.com'; 
		$to = 'mguhan.rmd@gmail.com'; 
		$subject = 'Message from Contact Demo ';
		$errName = "";
		$errEmail = "";
		$errMessage = "";
		$errHuman = "";

		$body = "From: $name\n E-Mail: $email\n Age: $age\n Gender: $optradio";
		LogUserData($body);
		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
		//Check if message has been entered
		if (!$_POST['age']) {
			$errMessage = 'Please enter your message';
		}
		if (!$_POST['optradio']) {
			$errMessage = 'Please enter your message';
		}
 
	// If there are no errors, send the email
	if (!$errNames && !$errEmail && !$errMessage && !$errHuman) {
		try{
			if (mail ($to, $subject, $body, $from)) {
				$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
			} else {
				$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
			}
			LogUserData("Mail Success")
		}
		catch(Exception $e)
		{
			LogUserData("Mail Exception:"+$e->getMessage())
		}
	}
	}
	Redirect('home.html', false);
?>