<?php

    if(isset($_POST['email']) && $_POST['email'] != '') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $email_subject = "New message";
        $email_body = "You have received a new message from $name.\n".
                            "Here is the message:\n $message";
        
        $headers = "From: ".$email;
        $to = "kshitijdhar12@gmail.com";

        if(mail($to,$email_subject,$email_body,$headers)) {
            echo "<h1> Message sent successfully. Thank you! </h1>";
        } else {
            echo "<h2> There seems to be a problem..Try later.</h2>";
        }
    }
?>