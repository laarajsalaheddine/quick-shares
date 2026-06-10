<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    if (isset($_SESSION['email']) && isset($_SESSION['password']) ) {
        header("location: profile.php");
        exit;
    }else{
        header("location: login.php");
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Home page</h1>
</body>
</html>