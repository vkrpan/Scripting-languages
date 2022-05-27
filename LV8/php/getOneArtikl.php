<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include 'connection.php';
include 'artikl.php';

$sQuery = "SELECT * FROM artikli where Id=".$_GET['ID'];
$oRecord = $oConnection->query($sQuery);
$oArtikl = array();
while($oRow = $oRecord->fetch(PDO::FETCH_BOTH)){
  $oArtikl [] = $oRow;
}
echo json_encode($oArtikl);
?>