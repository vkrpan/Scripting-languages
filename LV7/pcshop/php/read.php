<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Content-type: text/json');
header('Content-type: application/json; charset-utf-8');
include 'connection.php';

$sQuery = "SELECT * FROM artikli";
$oRecord = $oConnection->query($sQuery);
$aArtikl = array();
while($oRow = $oRecord->fetch(PDO::FETCH_BOTH)){
    
    $tempA = new Artikl($oRow['Id'],$oRow['Naziv'], $oRow['Proizvodac'], $oRow['Model'], $oRow['Cijena'], $oRow['Kolicina']);
    array_push($aArtikl, $tempA);
}

 //var_dump($aArtikl);
echo json_encode($aArtikl);



?>