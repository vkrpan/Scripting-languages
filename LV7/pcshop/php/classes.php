<?php

class Configuration{
    public $Host;
    public $dbName;
    public $username;
    public $password;

    function __construct($host, $dbName, $username, $password){
        $this->Host = $host;
        $this->dbName = $dbName;
        $this->username = $username;
        $this->password = $password;

    }
}

class Artikl{
    public $Id;
    public $Naziv;
    public $Proizvodac;
    public $Model;
    public $Cijena;
    public $Kolicina;

    function __construct($id, $naziv, $proizvodac, $model, $cijena, $kolicina){
        $this->Id = $id;
        $this->Naziv = $naziv;
        $this->Proizvodac = $proizvodac;
        $this->Model = $model;
        $this->Cijena = $cijena;
        $this->Kolicina = $kolicina;
    }
}
?>