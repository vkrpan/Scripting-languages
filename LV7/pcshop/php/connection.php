<?php
include 'classes.php';
$oConfiguration = new Configuration("127.0.0.1", "pcshop", "root", "");
try{
    $oConnection = new PDO("mysql:host=$oConfiguration->Host;dbname=$oConfiguration->dbName", $oConfiguration->username, $oConfiguration->password);
    // echo 'Uspješno spojeno na bazu!';
}
catch(PDOException $e){
    die("Povezivanje na bazu nije uspjelo! ".$e->getMessage());
}
?>