<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Content-type: text/json');
header('Content-type: application/json; charset-utf-8');
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);
$naziv = $data['Naziv'];
$proizvodac = $data['Proizvodac'];
$model = $data['Model'];
$cijena = $data['Cijena'];
$kolicina = $data['Kolicina'];

try{
    $sQuery = "INSERT INTO artikl (Naziv, Proizvodac, Model, Cijena, Kolicina) VALUES (?,?,?,?,?)";
    $oRecord = $oConnection->prepare(($sQuery));
    $oRecord->execute([$naziv,$proizvodac, $model, $cijena, $kolicina]);
}
catch(PDOException $e){
    die("Greška, nije moguće izvršiti $sQuery " . $e->getMessage());
}
json_encode($data);
?>