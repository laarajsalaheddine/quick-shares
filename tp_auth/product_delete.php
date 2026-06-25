<?php
session_start();
if (empty($_SESSION['user'])) {
    header('Location: login.php');
    die;
}
require("db.php");
$requete = "DELETE FROM `products` WHERE `id` = :id and user_id=:user_id";
$stmt = $pdo->prepare($requete);
$stmt->execute([
    "user_id" => $_SESSION['user']["id"],
    "id" => $_GET['id'],
]);
$ligneImpacted = $stmt->rowCount();
if ($ligneImpacted !== 1) {
    echo  "<p style='color:red;'>Erreur lors d'insertion</p>";
    header("refresh: 5, url=products_list.php");
} else {
    header("Location: products_list.php");
    die;
}
