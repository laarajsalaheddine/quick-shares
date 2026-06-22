<?php
session_start();
if(empty($_SESSION['user'])){
    header('Location: login.php');
    die;
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
    <h1>Bienvenue, <?php echo $_SESSION['user']["full_name"]; ?></h1>
    <a href="logout.php">Logout</a>
    
</body>
</html>