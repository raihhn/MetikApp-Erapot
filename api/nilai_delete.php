<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
    header('Access-Control-Allow-Credentials: true');

    include "conn.inc.php";

    $kdmapel = $_GET['kdmapel'];
    $nis = $_GET['nis'];

    $query = "DELETE FROM nilai WHERE kdmapel = '$kdmapel' AND nis = '$nis'";
    $result = mysqli_query($conn, $query);

    if($result){
        echo true;
    }else{
        echo false;
    }

    $conn->close();
?>