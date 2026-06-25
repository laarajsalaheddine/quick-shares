<?php
session_start();
if (empty($_SESSION['user'])) {
    header('Location: login.php');
    die;
}
if (isset($_POST['send_ajouter'])) {
    $name = $_POST['name'];
    $category = $_POST['category'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $image = $_FILES["image"]; // array
    $category = $_POST['category'];
    $error = [];
    // echo "<pre>";
    // var_dump($image);
    // echo "</pre>";
    if ($image["error"] === 0) {
        $extension = pathinfo($image["name"], PATHINFO_EXTENSION);
        $allowedExtensions = ["jpg", "jpeg", "png"];
        $allowedSize = 6; // en Mo
        $fileSize = $image["size"] / (1024 * 1024); // conversion en Mo
        $filename = "product_image__" . time() . "." . $extension;
        $destination = "uploads/" . $filename;
        if (in_array($extension, $allowedExtensions)) {
            if ($fileSize <= $allowedSize) {
                $fileMoved = move_uploaded_file($image['tmp_name'], $destination);
                if ($fileMoved === false)
                    $error[] = "Fichier non téléchargé";
                else {
                    require("db.php");
                    $query = "INSERT INTO `products`(`user_id`, `name`, `price`, `category`, `description`, `image`) 
                            VALUES (:user_id,:name,:price,:category,:description,:image)";
                    $stmt = $pdo->prepare($query);
                    $stmt->execute(
                        [
                            "user_id" => $_SESSION['user']["id"],
                            "name" => $name,
                            "price" => $price,
                            "category" => $category,
                            "description" => $description,
                            "image" => $filename,
                        ]
                    );
                    $insertedId = $pdo->lastInsertId();
                    if (empty($insertedId)) {
                        $error[] = "Erreur lors d'insertion";
                    } else {
                        header("Location: products_list.php");
                        die;
                    }
                }
            } else {
                $error[] = "fichier trops volumineux";
            }
        } else {
            $error[] = "Extension envoyé est non autorisée";
        }
    } else {
        $error[] = "Problème d'envoi du fichier";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Ajouter un produit</title>
</head>

<body>
    <div>
        <?php
        if (!empty($error)) {
            foreach ($error as $message) {
                echo "<p style='color:red;'>$message</p>";
            }
        }
        ?>
    </div>
    <fieldset style="width: 450px;">
        <h1>Ajouter un produit</h1>

        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">

            <label for="name">Nom du produit</label><br>
            <input type="text" id="name" name="name"><br><br>

            <label for="price">Prix</label><br>
            <input type="number" id="price" name="price" step="0.01"><br><br>

            <label for="category">Catégorie</label><br>
            <select id="category" name="category">
                <option value="">-- Choisir une catégorie --</option>
                <option value="informatique">Informatique</option>
                <option value="electronique">Électronique</option>
                <option value="bureau">Bureau</option>
                <option value="autre">Autre</option>
            </select><br><br>

            <label for="description">Description</label><br>
            <textarea id="description" name="description" rows="5" cols="45"></textarea><br><br>

            <label for="image">Image du produit</label><br>
            <input type="file" id="image" name="image"><br><br>

            <button type="submit" name="send_ajouter">Ajouter</button>
            <a href="products_list.php">Retour à la liste</a>

        </form>
    </fieldset>

</body>

</html>