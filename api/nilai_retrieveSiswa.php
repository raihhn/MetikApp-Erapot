<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
    header('Access-Control-Allow-Credentials: true');

    include "conn.inc.php";

    $query = "SELECT DISTINCT siswa.nama, siswa.nis, nilai.nis FROM nilai 
                JOIN siswa ON nilai.nis = siswa.nis";
    $result = $conn->query($query);

    $out = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)){
        if($out != ""){ $out .= ","; }
        $out .= '{"nis":"'. $rs["nis"]. '",';
        $out .= '"nama":"'. $rs["nama"]. '"}';
    }
    $out = (!empty($out)) ? '{"records":['.$out.']}' : '';
    echo ($out);

    $conn->close();
?>