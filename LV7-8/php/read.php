<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');


include 'connection.php';
include 'artikl.php';

$sQuery = "SELECT * FROM artikli";
$oRecord = $oConnection->query($sQuery);
$oArtikli = array();
while ($oRow = $oRecord->fetch(PDO::FETCH_BOTH)) {
    $id = $oRow['Id'];
    $naziv = $oRow['Naziv'];
    $proizvodac = $oRow['Proizvodac'];
    $model = $oRow['Model'];
    $cijena = $oRow['Cijena'];
    $kolicina = $oRow['Kolicina'];

    $oArtikl = new Artikl($id, $naziv, $proizvodac, $model, $cijena, $kolicina);
    array_push($oArtikli, $oArtikl);
}

echo json_encode($oArtikli);
