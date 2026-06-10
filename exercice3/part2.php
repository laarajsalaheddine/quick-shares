<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST['ajouter-cmt'])) {
    $error = [];
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];
    $isEmpty = empty($nom) && empty($email) && empty($comment);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $isEmpty = false;
    }
    if ($isEmpty) {
        // catcher l'error
        $error[] = "Données non valide";
    } else {
        // Traitement principale
        if (isset($_SESSION['commentaire'])) {
            array_push($_SESSION['commentaire'], [
                "nom" => $nom,
                "email" => $email,
                "comment" => $comment
            ]);
        } else {
            $_SESSION['commentaire'] = [];
        }
    }
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prtie 2</title>
    <style>
        label,
        textarea,
        input {
            display: block;
        }

        .container {
            width: 80%;
            margin: 5px auto;
            padding: 5px;
            border: 1px solid #000;
            border-radius: 8px;
        }

        .action-btn {
            display: inline-block;
            padding: 8px 12px;
            margin: 2px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            cursor: pointer;
            border: none;
            font-size: 14px;
        }

        .action-btn:hover {
            background-color: #0056b3;
        }

        .action-btn.btn-edit {
            background-color: #ffc107;
            color: #212529;
        }

        .action-btn.btn-edit:hover {
            background-color: #e0a800;
        }

        .action-btn.btn-view {
            background-color: #17a2b8;
        }

        .action-btn.btn-view:hover {
            background-color: #117a8b;
        }

        .action-btn.btn-delete {
            background-color: #dc3545;
        }

        .action-btn.btn-delete:hover {
            background-color: #bd2130;
        }
    </style>
</head>

<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <label for="">
            Nom
            <input type="text" name="nom">
        </label>
        <label for="">
            Email
            <input type="text" name="email">
        </label>
        <label for="commentaire">
            Commentaire
        </label>
        <textarea name="comment" id="commentaire" rows="6"></textarea>
        <button type="submit" name="ajouter-cmt">
            Ajouter
        </button>
    </form>

    <div class="container">
        <h3>liste commenatires</h3>
        <table border="1">
            <thead>
                <th>Nom</th>
                <th>Email</th>
                <th>Commentaire</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <?php
                foreach ($_SESSION['commentaire'] as $cmt) {
                    echo "<tr>
                        <td>$cmt[nom]</td>
                        <td>$cmt[email]</td>
                        <td>$cmt[comment]</td>
                        <td>
                            <a href='javascript:void(0)' class='action-btn btn-edit'>Modifier</a>
                            <a href='javascript:void(0)' class='action-btn btn-view'>Voir</a>
                            <a href='javascript:void(0)' class='action-btn btn-delete'>Supprimer</a>
                        </td>
                    </tr>";
                }
                ?>
            </tbody>
        </table>
    </div>
</body>

</html>