<?php


$error = "";
$title = "Hey Aiman! Someone gave you feedback!";

    if ($_POST) {
        
        
//        echo $_POST['message'];
        
        
        $emailTo = "aimanuslim@gmail.com";
        if($_POST['title']){
            $subject = $_POST['title'];
        } else {
            $subject = $title;   
        }        
        $content = $_POST['message']."\n\nContact's Email: ".$_POST['contact'];
        $headers = "From Anonymous";

        mail($emailTo, $subject, $content, $headers);
    }
?>
