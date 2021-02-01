<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
header('Access-Control-Allow-Credentials: true');

include "conn.inc.php";

$query = "select * from mapel where kdmapel = '".$_GET['kdmapel']."'";
$result = $conn->query($query);

$out = "";
if ($rec = $result->fetch_array()) {
    if ($out != "") {$out .= ",";}
        $out .= '{"mapel_kd_update":"'. $rec["kdmapel"]. '",';
        $out .= '"mapel_nama_update":"'. $rec["namamapel"]. '"}';
    $out = (!empty($out)) ? '{"records":' . $out . '}' : '';
    echo ($out);
}
else {
    return false;
}
$conn->close();

?>