<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
header('Access-Control-Allow-Credentials: true');

include "conn.inc.php";

$query = "select * from siswa where nis = '".$_GET['nis']."'";
$result = $conn->query($query);

$out = "";
if ($rec = $result->fetch_array()) {
    if ($out != "") {$out .= ",";}
    $out .= '{"siswa_nis_update":"'. $rec["nis"]. '",';
        $out .= '"siswa_nama_update":"'. $rec["nama"]. '",';
        $out .= '"siswa_alamat_update":"'. $rec["alamat"]. '",';
        $out .= '"siswa_jenkel_update":"'. $rec["jen_kel"]. '"}';
    $out = (!empty($out)) ? '{"records":' . $out . '}' : '';
    echo ($out);
}
else {
    return false;
}
$conn->close();

?>