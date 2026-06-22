<?php
try {
    $host="localhost";
    $dbname="auth_app";
     $user="root";
     $pass="";
    $pdo =new PDO(
        "mysql:host=$host;dbname=$dbname",
        $user,
        $pass 
    );
} catch (Exception $e) {
    echo "<pre>";
    print_r($e->getMessage());
    echo "</pre>";
}
