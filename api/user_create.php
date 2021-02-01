<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With, Content-type");
    header('Access-Control-Allow-Credentials:true');

    if(isset($_GET['name']) && isset($_GET['pass'])){
        if(!empty($_GET['name']) && !empty($_GET['pass'])){
    
            include "conn.inc.php";
    
            $username = $_GET['name'];
            $userpass = $_GET['pass'];
            $query    = "insert into users(username, userpass,level) value ('$username','$userpass','0')";
    
    
            $result = mysqli_query($conn, $query);
            
           if($result){
               echo true;
           }else{
               echo false;
           }
           $conn->close();
        }
    }  


?>