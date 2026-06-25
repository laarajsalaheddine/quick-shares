<?php
try {
    $pdo = new PDO(
        "mysql:host=localhost;dbname=auth_app",
        "root",
        ""
    );
} catch (Exception $e) {
    echo "<pre>";
    print_r($e->getMessage());
    echo "</pre>";
}
