<?php
if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST['poll'])) {
    extract($_POST);
    $listNv = [
        "4ZERT" => "Avancé",
        "sdfg1" => "Intermidiaire",
        "2cvc" => "Débutant",
        "3rty" => "Final Boss"
    ];
    echo "Langauge preferé: " . $langauge . "<br>";
    echo "Niveau :" . $listNv[$niveau] . "<br>";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        label {
            display: block;
        }
    </style>
</head>

<body>
    <form action="" method="POST">
        <label>
            <input checked type="radio" name="langauge" value="php">
            PHP
        </label>

        <label>
            <input type="radio" name="langauge" value="python">
            Python
        </label>

        <label>
            <input type="radio" name="langauge" value="javascript">
            Javascript
        </label>

        <label>
            <input type="radio" name="langauge" value="java">
            Java
        </label>
        <label>
            <select name="niveau" id="niveau">
                <option value="">--Choisir un niveau--</option>
                <option value="4ZERT">Avancé</option>
                <option value="sdfg1">Intermidiaire</option>
                <option value="2cvc">Débutant</option>
                <option value="3rty">Final Boss</option>
            </select>

        </label>

        <input type="submit" value="Poll" name="poll">
    </form>
</body>

</html>