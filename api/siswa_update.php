<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['nis']) && isset($_GET['nama']) && isset($_GET['alamat']) && isset($_GET['jenkel'])) {

    if (!empty($_GET['nis']) && !empty($_GET['nama']) && !empty($_GET['alamat']) && !empty($_GET['jenkel'])) {

        include "conn.inc.php";

        $siswanis = $_GET['nis'];
        $siswanama = $_GET['nama'];
        $siswaalamat = $_GET['alamat'];
        $siswajenkel = $_GET['jenkel'];

        $query = "update siswa set nama='$siswanama', alamat='$siswaalamat', jen_kel='$siswajenkel' where nis = '" . $_GET['nis'] . "'";
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