<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   
    <title>Solukay | Presupuestador Usuarios</title>

    <!-- GOOGLE WEB FONT -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- BASE CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
    <link href="../css/vendors.css" rel="stylesheet">

    <!-- YOUR CUSTOM CSS -->
    <link href="../css/custom.css" rel="stylesheet">
    
    <script type="text/javascript">
    function delayedRedirect(){
        window.location = "../index-4.html"
    }
    </script>
</head>

<body onLoad="setTimeout('delayedRedirect()', 8000)" style="background-color:#fff;">
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';

$mail = new PHPMailer(true);

try {

    //Recipients - main edits
    $mail->setFrom('presupuestos@solukay.com', 'Pedido de Presupuesto en Solukay');                  // Email Address and Name FROM
    $mail->addAddress('info@solukay.com', 'Presupuestador de Usuarios');                           // Email Address and Name TO - Name is optional
    $mail->addReplyTo('noreply@solukay.com', 'Mensaje del Presupuestador de Usuarios');            // Email Address and Name NOREPLY
    $mail->isHTML(true);                                                       
    $mail->Subject = 'Presu Usuarios - Mensaje';                                     // Email Subject
    
    //The email body message
    $message = "<strong>Details</strong><br />";
    $message .= "Which type of Product do you need: " . $_POST['product_opt'] . "<br />";
    $message .= "I need the following Services: <br />";
                foreach($_POST['web_services'] as $value) 
                    { 
                        $message .=   "- " .  trim(stripslashes($value)) . "<br />"; 
                    };
    
    $message .= "Total: " . $_POST['final_price'] . "<br />";

    $message .= "<br /><strong>User Details</strong><br />";
    $message .= "First and Last name: " . $_POST['first_last_name'] . "<br />";
    $message .= "Email: " . $_POST['email'] . "<br />";
    $message .= "Telephone: " . $_POST['telephone'] . "<br />";

    // Get the email's html content
    $email_html = file_get_contents('template-email.html');

    // Setup html content
    $body = str_replace(array('message'),array($message),$email_html);
    $mail->MsgHTML($body);

    $mail->CharSet = 'UTF-8'; //Force UTF for special characters

    $mail->send();

    // Confirmation/autoreplay email send to who fill the form
    $mail->ClearAddresses();
    $mail->addAddress($_POST['email']); // Email address entered on form
    $mail->isHTML(true);
    $mail->Subject    = 'Confirmation'; // Custom subject
    
    // Get the email's html content
    $email_html_confirm = file_get_contents('confirmation.html');

    // Setup html content
    $body = str_replace(array('message'),array($message),$email_html_confirm);
    $mail->MsgHTML($body);

    $mail->CharSet = 'UTF-8'; //Force UTF for special characters

    $mail->Send();

    echo '<div id="success">
            <div class="icon icon--order-success svg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                  <g fill="none" stroke="#8EC343" stroke-width="2">
                     <circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
                     <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
                  </g>
                 </svg>
             </div>
            <h4><span>Pedido de Presupuesto Recibido!</span>Gracias por tu tiempo</h4>
            <small>En poco tiempo comenzaras a recibir presupuestos en tu email</small>
        </div>';
    } catch (Exception $e) {
        echo "El mensaje no se puedo enviar. Por favor contactenos via info@solukay.com. Mailer Error: {$mail->ErrorInfo}";
    }

    
?>
<!-- END SEND MAIL SCRIPT -->    

</body>
</html>