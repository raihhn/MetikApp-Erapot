<?php
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With, Content-type");
        header('Access-Control-Allow-Credentials:true');
        
        include "conn.inc.php";
        $query = "delete from mapel where kdmapel='".$_GET['kdmapel']."'";

        $result = mysqli_query($conn, $query);
        if($result){
            echo true;
        }else{
            echo false;
        }
        $conn->close();
?>