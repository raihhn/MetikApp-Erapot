<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['kdmapel']) && isset($_GET['namamapel'])) {

    if (!empty($_GET['kdmapel']) && !empty($_GET['namamapel'])) {

        include "conn.inc.php";

        $kdmapel = $_GET['kdmapel'];
        $namamapel = $_GET['namamapel'];

        $query = "update mapel set kdmapel='$kdmapel', namamapel='$namamapel' where kdmapel = '" . $_GET['kdmapel'] . "'";
        $result = mysqli_query($conn, $query);

        if ($result) {
            echo TRUE;
        } else {
            echo FALSE;
        }
        $conn->close();
    }
}
?>