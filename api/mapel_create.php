<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With, Content-type");
    header('Access-Control-Allow-Credentials:true');
    
    if(isset($_GET['kdmapel']) && isset($_GET['namamapel'])){
        if(!empty($_GET['kdmapel']) && !empty($_GET['namamapel'])){

            include "conn.inc.php";
    
            $kdmapel = $_GET['kdmapel'];
            $namamapel = $_GET['namamapel'];
        
            $query    = "insert into mapel(kdmapel, namamapel) value ('$kdmapel','$namamapel')";
    
    
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