<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
    header('Access-Control-Allow-Credentials: true');

    include "conn.inc.php";

    $nis = $_GET['nis'];

    $query = "SELECT nilai.grade, siswa.nama, mapel.namamapel, nilai.nis, 
                nilai.kdmapel FROM nilai JOIN siswa ON 
                nilai.nis=siswa.nis JOIN mapel ON 
                nilai.kdmapel=mapel.kdmapel WHERE nilai.nis = '$nis'";
    $result = $conn->query($query);

    $out = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)){
        if($out != ""){ $out .= ","; }
        $out .= '{"nis":"'. $rs["nis"]. '",';
        $out .= '"nama":"'. $rs["nama"]. '",';
        $out .= '"grade":"'. $rs["grade"]. '",';
        $out .= '"kdmapel":"'. $rs["kdmapel"]. '",';
        $out .= '"namamapel":"'. $rs["namamapel"]. '"}';
        
    }
    $out = (!empty($out)) ? '{"records":['.$out.']}' : '';
    echo ($out);

    $conn->close();
?>