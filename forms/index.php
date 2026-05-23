<?php
// GET
// POST
// SERVER
// SESSION
// COOKIES
// FILES

echo  "<pre>";
var_dump($_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF']);
var_dump($_SERVER['REQUEST_METHOD']);
// print_r($_GET);
// print_r($_POST);
// print_r($_SERVER);
print_r($_FILES["photoDeProfile"]);
echo  "</pre>";

// sleep(2);
header("location: c.php?abc=qkjsdhfkjqsd");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Racine</title>
</head>
<body>
    
</body>
</html>
