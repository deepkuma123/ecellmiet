<!-- <?php 
include('smtp/PHPMailerAutoload.php');

if (isset($_POST["submit"])) {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $subject2 = "Regarding Your Query For E-Cell";
    $message = $_POST["message"];
    $message2 = "Dear $username, " ."\n"." Thank you for contacting E-cell MIET.\n\n Your mail has been sent successfully. We have received your query. You will be hearing from us in the next 2-3 working days.\n\n Regards\n\n E-Cell MIET.";
    $to = "deepkuma3214@gmail.com";
    $message3 = "Name: {$username} " ."\n"." Email: {$email} " ."\n"." Subject: {$subject} " ."\n"." Message: {$message}";
    
    // Create the first PHPMailer instance for the user's email
    $userMail = new PHPMailer();
    $userMail->IsSMTP(); 
    $userMail->SMTPAuth = true; 
    $userMail->SMTPSecure = 'tls'; 
    $userMail->Host = "smtp.gmail.com";
    $userMail->Port = 587; 
    $userMail->IsHTML(true);
    $userMail->CharSet = 'UTF-8';
    $userMail->Username = "deepkuma3214@gmail.com";
    $userMail->Password = "makromlaztaxgmzc";
    $userMail->SetFrom("deepkuma3214@gmail.com");
    $userMail->Subject = $subject2;
    $userMail->Body = $message2;
    $userMail->AddAddress($email);
    $userMail->SMTPOptions = array('ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => false
    ));

    // Send the user's email
    if (!$userMail->Send()) {
        echo $userMail->ErrorInfo;
    } else {
        echo 'User email sent successfully.';
    }

    // Create the second PHPMailer instance for your email
    $adminMail = new PHPMailer();
    $adminMail->IsSMTP(); 
    $adminMail->SMTPAuth = true; 
    $adminMail->SMTPSecure = 'tls'; 
    $adminMail->Host = "smtp.gmail.com";
    $adminMail->Port = 587; 
    $adminMail->IsHTML(true);
    $adminMail->CharSet = 'UTF-8';
    $adminMail->SMTPDebug = 2; 
    $adminMail->Username = "deepkuma3214@gmail.com";
    $adminMail->Password = "makromlaztaxgmzc";
    $adminMail->SetFrom("deepkuma3214@gmail.com");
    $adminMail->Subject = $subject;
    $adminMail->Body = $message3;
    $adminMail->AddAddress($to);
    $adminMail->SMTPOptions = array('ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => false
    ));

    // Send your email
    if (!$adminMail->Send()) {
        echo $adminMail->ErrorInfo;
    } else {
        echo 'Admin email sent successfully.';
    }
}
?> -->




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <?php include("./common/header.php") ?>
<!-- 
    <form action="" method="post" autocomplete="off">
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                <input type="text" name="username" class="form-control p-4" placeholder="username" 
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group col-sm-6">
                                <input type="email" name="email" class="form-control p-4" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                            <input type="text" name="subject" class="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                            <textarea name="message" class="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="text-center" >
                            <input type="submit" name="submit" class="btn btn-primary py-3 px-4" style=" background-color:#669928;" value="Send Message" type="submit" id="sendMessageButton"  />
                                
                            </div>
                        </form>

                         -->

                         <section class="Banner-area contact">
        <div class="container">
          <div class="banner-caption text-center">
            <h2>Welcome to Ecell Miet</h2>
            <h1>We are here to help to students who wants be become a entreprenuer</h1>
          </div> <!-- /.banner-caption -->
        </div> <!-- /.container -->
      </section> 
                         <div class="body">

                             <svg version="1.1" id="paper-pin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 141.5 165" xml:space="preserve">
                             <style type="text/css">
                                 .st0{fill:#C20000;}
                                 .st1{fill:#C6C6C6;}
                                 .st2{fill:#FFAA00;}
                                 .st3{fill:#FFCE00;}
                                </style>
        <g>
            <path class="st0" d="M16.4,136.7c0,0-7.9,3.9-12.6-1.7c0,0,2.3,11.2-3.8,18c0,0,12.6,2.6,12.9,12
            c0,0,9.2-8.2,17.6-4.4c0,0-3.5-6.8-0.8-14.5C29.7,146.1,18.5,149.9,16.4,136.7z"/>
            <path class="st1" d="M111.9,15.9L16.1,136.7c-4,5.1-7,15-3.3,17.9c3.7,2.9,12.7-2.3,16.7-7.3l95.8-120.7L111.9,15.9z
            "/>
            <circle class="st2" cx="96.4" cy="45.2" r="45.2"/>
            <circle class="st3" cx="96.4" cy="26.4" r="21"/>
        </g>
    </svg>
    <section class="form">
        <h1>Contact us Now!</h1>
        <div class="wrapper">
            <form action="" method="post" autocomplete="off">
                <input type="text" name="username" placeholder="username" required="required" data-validation-required-message = "Please enter your name"/>
                <input type="email" name="email" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                <input type="text" name="subject" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                <textarea name="message" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
            </div>
            <input type="submit" name="submit"  value="Send Message" type="submit" id="sendMessageButton"  />
        </form>
    </section>
    
</div>
    <?php include("./common/footer.php") ?>
    
    
    <script src="./js/script.js"></script>
</body>
</html>