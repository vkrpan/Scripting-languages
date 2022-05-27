<?php

class Artikl
{
    public $id = "";
	public $Naziv = "";
	public $Proizvodac = "";
	public $Model = "";
	public $Cijena = "";
	public $Kolicina = "";

	public function __construct($id, $naziv, $proizvodac, $model, $cijena, $kolicina)
	{
        $this->id = $id;
			$this->Naziv = $naziv;
			$this->Proizvodac = $proizvodac;
			$this->Model = $model;
			$this->Cijena = $cijena;
			$this->Kolicina = $kolicina;
	}
}
?>