<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With, Content-type");
    header('Access-Control-Allow-Credentials:true');
    
    if(isset($_GET['nis']) && isset($_GET['nama']) && isset($_GET['alamat']) && isset($_GET['jenkel'])){
        if(!empty($_GET['nis']) && !empty($_GET['nama']) && !empty($_GET['alamat']) && !empty($_GET['jenkel'])){

            include "conn.inc.php";
    
            $siswanis = $_GET['nis'];
            $siswanama = $_GET['nama'];
            $siswaalamat = $_GET['alamat'];
            $siswajenkel = $_GET['jenkel'];
            $query    = "insert into siswa(nis, nama, alamat, jen_kel) value ('$siswanis','$siswanama','$siswaalamat','$siswajenkel')";
            $query2   = "insert into users(username, userpass,level,nis) value ('$siswanis','$siswanama','1','$siswanis')";
            
            $result = mysqli_query($conn, $query);
            $result2 = mysqli_query($conn, $query2);
            
           if($result && $result2){
               echo true;
           }else{
               echo false;
           }
           $conn->close();
        }
    }  


?>