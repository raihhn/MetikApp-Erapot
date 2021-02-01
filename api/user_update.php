<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
header('Access-Control-Allow-Credentials: true');

if (isset($_GET['name']) && isset($_GET['pass'])) {

    if (!empty($_GET['name']) && !empty($_GET['pass'])) {

        include "conn.inc.php";

        $username = $_GET['name'];
        $userpass = $_GET['pass'];

        $query = "update users set username='$username', userpass='$userpass' where userid = '" . $_GET['id'] . "'";
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