<?php
class Cart
{
    public $products;
    public function addProduct($unProduit)
    {
        // $this->products[] = $unProduit;
        array_push($this->products, $unProduit);
    }

    public function getTotal()
    {
        $total = 0;
        foreach ($this->products as $prod) {
            $total += $prod->prix;
        }
        return $total;
    }

    public function __construct()
    {
        $this->products = [];
    }
}
