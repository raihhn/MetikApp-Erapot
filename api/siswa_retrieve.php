<?php
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With, Content-type");
        header('Access-Control-Allow-Credentials:true');

        include "conn.inc.php";

        $query= "select * from siswa";
        $result = $conn->query($query);

        $out="";
        while($rec = $result->fetch_array(MYSQLI_ASSOC)){
            if($out != ""){$out .=",";}
            $out .= '{"nis":"'. $rec["nis"]. '",';
            $out .= '"nama":"'. $rec["nama"]. '",';
            $out .= '"alamat":"'. $rec["alamat"]. '",';
            $out .= '"jen_kel":"'. $rec["jen_kel"]. '"}';
        
        }
        $out = (!empty($out)) ? '{"records":['.$out.']}':'';
        echo($out);

        $conn->close();

?>