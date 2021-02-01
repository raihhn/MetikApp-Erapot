<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
    header('Access-Control-Allow-Credentials: true');

    if(isset($_GET['kdmapel']) && isset($_GET['nis']) && isset($_GET['absen']) && isset($_GET['tugas']) && isset($_GET['uts']) && isset($_GET['uas'])){
        if(!empty($_GET['kdmapel']) && !empty($_GET['nis']) && !empty($_GET['absen']) && !empty($_GET['tugas']) && !empty($_GET['uts']) && !empty($_GET['uas'])){
            include "conn.inc.php";

            $kdmapel = $_GET['kdmapel'];
            $nis = $_GET['nis'];
            $absen = $_GET['absen'];
            $uts = $_GET['uts'];
            $uas = $_GET['uas'];
            $tugas = $_GET['tugas'];

            $hasil1 = $absen + $uts + $uas + $tugas;
            $hasil = $hasil1/4;

            if($hasil > 79 && $hasil <= 100){
                $nilai = "A";
            }
            if($hasil > 70 && $hasil <= 79){
                $nilai = "B";
            }
            if($hasil > 60 && $hasil <= 70 ){
                $nilai = "C";
            }
            if($hasil >= 0 && $hasil <= 60 ){
                $nilai = "D";
            }
            

            $query = "UPDATE nilai SET absen = '$absen', tugas = '$tugas', uts = '$uts', uas = '$uas', grade = '$nilai' WHERE kdmapel = '$kdmapel' AND nis = '$nis'";
            $result = mysqli_query($conn, $query);

            if($result){
                echo true;
            }else{
                echo false;
            }
            $conn->close();
        }
    }
?>