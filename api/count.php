<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');

include "conn.inc.php";

$query = "SELECT (SELECT COUNT(*)FROM   mapel) AS mapel,(SELECT COUNT(*)FROM   siswa) as siswa";
$result = $conn->query($query);

$out = "";

if ($rs = $result->fetch_array()) {
    $out .= '{"total_mapel":"'.$rs["mapel"].'",';
    $out .= '"total_siswa":"'.$rs["siswa"].'"}';
    $out = (!empty($out)) ? '{"records":'.$out.'}' : '';
    echo($out);
} else {
    return false;
}

$conn->close();
?>