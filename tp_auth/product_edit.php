<?php
session_start();
if (empty($_SESSION['user'])) {
    header('Location: login.php');
    die;
}
if (isset($_GET['id'])) {
    require("db.php");
    $requete = "SELECT * FROM `products` WHERE user_id=:user_id and id=:product_id";
    $stmt = $pdo->prepare($requete);
    $stmt->execute([
        "user_id" => $_SESSION['user']["id"],
        "product_id" => $_GET['id'],
    ]);
    $product = $stmt->fetch(PDO::FETCH_ASSOC);
    if (empty($product)) {
        die("Current user didn't create this product");
    }
}

if (isset($_POST['id']) && isset($_POST['send_modifier'])) {
    $name = $_POST['name'];
    $category = $_POST['category'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $image = $_FILES["image"]; // array
    $category = $_POST['category'];
    $error = [];
    $imageExits = false;
    $filename = null;
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
                else
                    $imageExits = true;
            } else {
                $error[] = "fichier trops volumineux";
            }
        } else {
            $error[] = "Extension envoyé est non autorisée";
        }
    } else {
        $error[] = "Problème d'envoi du fichier";
    }

    // par défaut
    require("db.php");
    $query = "UPDATE `products` SET `name`= :name,
            `price`=:price
            ,`category`=:category,
            `description`=:description,
            `image`= COALESCE(:image, `image`)
            WHERE `id` = :id";

    $stmt = $pdo->prepare($query);
    $stmt->execute(
        [
            "id" => $_POST["id"],
            "name" => $name,
            "price" => $price,
            "category" => $category,
            "description" => $description,
            "image" => $filename
        ]
    );

    $ligneImpacted = $stmt->rowCount();
    if ($ligneImpacted !== 1) {
        $error[] = "Erreur lors d'insertion";
    } else {
        header("Location: products_list.php");
        die;
    }
}



?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Ajouter un produit</title>
    <style>
        .product-image>img {
            width: 100px;
            height: auto;
        }
    </style>
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
            <input type="hidden" id="id" name="id" value="<?php echo empty($product['id']) ? "" : $product['id']; ?>">
            <label for="name">Nom du produit</label><br>
            <input type="text" id="name" name="name" value="<?php echo empty($product['name']) ? "" : $product['name']; ?>"><br><br>

            <label for="price">Prix</label><br>
            <input type="number" id="price" name="price" step="0.01" value="<?php echo empty($product['price']) ? "" : $product['price']; ?>"><br><br>

            <label for="category">Catégorie</label><br>
            <select id="category" name="category">
                <option value="">-- Choisir une catégorie --</option>
                <option value="informatique" <?php echo empty($product['category']) && strtolower($product['category']) === "informatique" ? "selected" : ""; ?>>Informatique</option>
                <option value="electronique" <?php echo empty($product['category']) && strtolower($product['category']) === "electronique" ? "selected" : ""; ?>>Électronique</option>
                <option value="bureau" <?php echo empty($product['category']) && strtolower($product['category']) === "bureau" ? "selected" : ""; ?>>Bureau</option>
                <option value="autre" <?php echo empty($product['category']) && strtolower($product['category']) === "autre" ? "selected" : ""; ?>>Autre</option>
            </select><br><br>

            <label for="description">Description</label><br>
            <textarea id="description" name="description" rows="5" cols="45"><?php echo empty($product['descritpion']) ? "" : $product['descritpion']; ?></textarea><br><br>

            <label for="image">Image du produit</label><br>
            <div class="product-image">
                <img src="<?php echo empty($product['image']) ? "" : "uploads/" . $product['image']; ?>" alt="<?php echo $product['image']; ?>">
            </div>
            <input type="file" id="image" name="image"><br><br>

            <button type="submit" name="send_modifier">Modifier</button>
            <a href="products_list.php">Retour à la liste</a>

        </form>
    </fieldset>

</body>

</html>