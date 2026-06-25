<?php
session_start();
if (empty($_SESSION['user'])) {
    header('Location: login.php');
    die;
}
require("db.php");
// requete
// prepation
//execution (passation des valeurs)
// fetchAll => liste complète (un array des lignes)
// fetch => une seule enregistrement (une ligne)

$requete = "SELECT * FROM `products` WHERE user_id=:user_id";
$stmt = $pdo->prepare($requete);
$stmt->execute([
    "user_id" => $_SESSION['user']["id"]
]);
$list = $stmt->fetchAll(PDO::FETCH_ASSOC);


?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Liste des produits</title>
    <style>
        .product-image>img {
            width: 100px;
            height: auto;
        }
    </style>
</head>

<body>

    <fieldset style="width: 1100px;">
        <a href="dashboard.php">Tableau de bord</a> |
        <a href="product_create.php">Ajouter un produit</a> |
        <a href="logout.php">Déconnexion</a>

        <br><br>

        <table border="1" cellpadding="10" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Catégorie</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <!-- boucle la liste de données -->
                <?php
                foreach ($list as $product) {
                    echo "<tr>";
                    echo "<td class='product-image'>
                        <img src='uploads/$product[image]' alt='$product[image]'>
                    </td>";
                    echo "<td>$product[name]</td>";
                    echo "<td>$product[price]</td>";
                    echo "<td>" . ucfirst($product['category']) . "</td>";
                    echo "<td>$product[description]</td>";
                    echo "<td>
                     <button onclick='deleteConfirm(this)' data-href='product_delete.php?id=$product[id]'>Supprimer</button>
                       <a href='product_edit.php?id=$product[id]'>Modifier</a>   
                    </td>";
                    echo "</tr>";
                }
                ?>
            </tbody>
        </table>
    </fieldset>

    <script>
        function deleteConfirm(elt) {
            const link = elt.parentElement.querySelectorAll("a")[0].getAttribute("data-href");
            console.log(link)
            if (confirm('Vous êtes sure ?')) {
                window.location.href = link;
            } else {
                alert("Annulation");
            }
        }
    </script>
</body>

</html>