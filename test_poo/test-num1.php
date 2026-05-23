<?php
echo "<h1>Demo POO</h1>";

// ======= POO

/*
déclaration d'une classe
    - Defintion des attributs et leur accessibilitées
    - defintion des méthodes
    - hériter d'une classe parent
    - Implementer dune interface
Création des instances
manipulation des objets crééss
*/

class Person
{
    // public, private et protected, 
    private string $nom;
    public int $age;

    public function getNom()
    {
        return $this->nom;
    }
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    public function getAge()
    {
        return $this->age;
    }
    public function setAge($age)
    {
        $this->age = $age;
    }


    // les méthdodes magique
    // méthdoes spécifique au PHP qui s'execute lorsqu'on déclanche une action sur la classe

    public function __construct($age, $nom)
    {
        $this->nom = $nom;
        $this->age = $age;
        echo "<h3>Contructeur s'excute pour: $this->nom<h3>";
    }

    // public function __destruct()
    // {
    //     echo "<h3>Destroying this instace of $this->nom .....<h3>";
    // }

    public function __get($kahzdkjhfsd)
    {
        echo "<p>Getting for: $kahzdkjhfsd </p>";
    }

    public function __toString()
    {
        return "Nom: $this->nom <br> Age: $this->age <br>";
    }
}



class Stagaire extends Person
{
    private $filiere;
    public function getFiliere()
    {
        return $this->filiere;
    }
    public function setFiliere($filiere)
    {
        $this->filiere = $filiere;
    }
    public function __construct($age, $nom, $filiere = "Dev")
    {
       parent::__construct($age, $nom);
       $this->filiere = $filiere;
    }
}

$p1 = new Person(18, "Lamin Yamal");
$stagiaire = new Stagaire(38, "Leo Messi", "Infra Digital");

echo  "<pre>";
print_r($p1);
print_r($stagiaire);

echo  "</pre>";

// $p2 = new Person(38, "Leo Messi");
// $p3 = new Person(40, "Cristiano Ronaldo");


// unset($p1);



