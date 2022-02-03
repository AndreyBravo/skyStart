<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('dasda', 'aaaaa');
$mail->addAddress('klopipa@gmail.com');
$mail->Subject = 'SkyStart';

$body = '<h1>Встречайте письмо</h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p>Name: ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
    $body .= '<p>Email: ' . $_POST['email'] . '</p>';
}


if (!empty($_FILES['file']['tmp_name'])) {
   $filePath = __DIR__ ."/files/". $_FILES['file']['name'];
   if(copy($_FILES['file']['tmp_name'],$filePath)){
       $fileAttach = $filePath;
       $mail->addAttachment($fileAttach);
   }
}
$mail->Body = $body;

if (!$mail->send()) {
    $massage = 'Error';
} else {
    $massage = 'done';
}

$response = ['message' => $massage];
header('Content-type: application/json');
echo json_encode($response);
