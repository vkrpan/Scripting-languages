<?php

$host = 'localhost';
$dbname = 'pcshop';
$username = 'root';
$password = '';

try
{
    $oConnection = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
} catch (PDOException $pe) {
    die("Povezivanje s bazom podataka nije uspjelo $dbname :" . $pe->getMessage());
}
