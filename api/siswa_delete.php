<?php
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With, Content-type");
        header('Access-Control-Allow-Credentials:true');

        include "conn.inc.php";
        $query = "delete from siswa where nis='".$_GET['nis']."';";
        $query .= "delete from users where username='".$_GET['nis']."'";

        
    
                    

        $result = mysqli_multi_query($conn, $query);

       
        if($result){
            echo true;
        }else{
            echo false;
        }
        $conn->close();
?>
