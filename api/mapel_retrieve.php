<?php
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With, Content-type");
        header('Access-Control-Allow-Credentials:true');

        include "conn.inc.php";

        $query= "select * from mapel";
        $result = $conn->query($query);

        $out="";
        while($rec = $result->fetch_array(MYSQLI_ASSOC)){
            if($out != ""){$out .=",";}
            $out .= '{"kdmapel":"'. $rec["kdmapel"]. '",';
            $out .= '"namamapel":"'. $rec["namamapel"]. '"}';
           
        
        }
        $out = (!empty($out)) ? '{"records":['.$out.']}':'';
        echo($out);

        $conn->close();

?>