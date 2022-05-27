<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods");

include_once 'connection.php';
include 'artikl.php';

$data = json_decode(file_get_contents("php://input"), true);
echo $data;
$sNaziv = $data["naziv"];
$sProizvodac = $data['proizvodac'];
$sModel = $data['model'];
$sCijena = $data['cijena'];
$sKolicina = $data['kolicina'];



try
{
    $sQuery = "INSERT INTO artikli (Naziv, Proizvodac, Model, Cijena, Kolicina)
  VALUES (?, ?, ?, ?, ?)";
    $oRecord = $oConnection->prepare($sQuery);
    $oRecord->execute([$sNaziv, $sProizvodac, $sModel, $sCijena, $sKolicina]);
} catch (PDOException $pe) {
    die("Greška: Nije moguće izvršiti $sQuery. " . $pe->getMessage());
}
echo json_encode($data);

?>