<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
    header('Access-Control-Allow-Credentials: true');


    include "conn.inc.php";

    $kdmapel = $_GET['kdmapel'];
    $nis = $_GET['nis'];
    
    $query = "SELECT * FROM nilai WHERE kdmapel = '$kdmapel' AND nis = '$nis'";
    $result = $conn->query($query);

    $out = "";
    if($rs = $result->fetch_array()){
        if($out != ""){ $out .= ","; }
        $out .= '{"kdmapel":"'. $rs["kdmapel"]. '",';
        $out .= '"nis":"'. $rs["nis"]. '",';
        $out .= '"absen":"'. $rs["absen"]. '",';
        $out .= '"tugas":"'. $rs["tugas"]. '",';
        $out .= '"uts":"'. $rs["uts"]. '",';
        $out .= '"uas":"'. $rs["uas"]. '",';
        $out .= '"grade":"'. $rs["grade"]. '"}';
        
        $out = (!empty($out)) ? '{"records":'.$out.'}' : '';
        echo ($out);
    }else{
        return false;
    }
    $conn->close();
?>