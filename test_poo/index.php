<?php
$styles = [
    "width" => "80%",
    "max-height" => "80vh",
    "min-height" => "80vh",
    "margin" => "0px auto",
    "border" => "1px solid #000",
    "border-radius" => "8px"
];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            <?php
            foreach ($styles as $c => $v) {
                echo  "$c:$v;\n";
            }
            ?>
        }
    </style>
</head>

<body>
    <div class="container">
        <pre>

        <?php
        echo "<h1>Racine / root de mon site</h1>";

        include "Product.php";
        include "Cart.php";
        

        $pannier = new Cart();
        $p1 = new Product("Souris", 150);

        $pannier->addProduct(
            $p1
        );

        $pannier->addProduct(
            new Product("Clavier", 1000)
        );

        $pannier->addProduct(
            new Product("Ecran", 1500)
        );

        print_r($pannier);
        echo "<h1>Le total est: " . $pannier->getTotal() . "</h1>";

        ?>

        <pre>
    </div>
</body>

</html>