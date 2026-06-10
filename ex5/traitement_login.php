<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST['login'])) {
    extract($_POST);
    if ($_SESSION['email'] === $email && $_SESSION['password'] === $password) {
        header("location: profil.php");
        exit;
    }else{
        header("location: connexion-echouee.php?message=Login echoué");
        exit;
    }
}
