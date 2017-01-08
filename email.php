<?php

$error = ""
$title = "Hey Aiman! Someone gave you feedback!<br>"

    if ($_POST) {
        
        
        
        if (!$_POST["feedback-message"]) {
            
            $error .= "The content field is required.<br>";
            
        }
        
        $emailTo = "aimanuslim@gmail.com";
        $subject = $title;
        $content = $_POST['feedback-message'];
        $headers = "From Anonymous";
        
        if (mail($emailTo, $subject, $content, $headers)) {
                
                $successMessage = '<div class="alert alert-success" role="alert">Your feedback was sent, thanks for your time!</div>';
                
                
            } else {
                
                $error = '<div class="alert alert-danger" role="alert"><p><strong>Your message couldn\'t be sent - please try again later</div>';
                
                
            }