<?php
if ($_SERVER['REQUEST_METHOD'] === "GET" && isset($_GET['message'])) {
    echo "Echèc d'authentificaiton:  <br>";
    echo "Message: " . $_GET['message'];
}

?>
<h1>
    <a href="login.php">Retour au login</a>
</h1>