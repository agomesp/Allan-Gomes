<?php

$mail = new PHPMailer();

$mail->From     = $_POST['email'];
$mail->FromName = $_POST['name'];
$mail->addReplyTo($_POST['email'], "Reply Address");
$mail->Subject  = $_POST['subject'];
$mail->Body     = $_POST['message'];

if($mail->send()) {
    // Success! Redirect to a thank you page. Use the
    // POST/REDIRECT/GET pattern to prevent form resubmissions
    // when a user refreshes the page.
  
    header('Location: http://allangomes.com/', true, 303);
    exit;
} 
else {
    echo "Mailer Error: " . $mail->ErrorInfo;
}