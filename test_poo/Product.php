<?php

class Product
{
    public $nom;
    public $prix;
    public function __construct($n, $p)
    {
        $this->nom = $n;
        $this->prix = $p;
    }
}
