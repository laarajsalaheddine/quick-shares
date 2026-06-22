<?php
if (isset($_POST['send'])) {
    include("db.php");
    $error = [];
    $messageSuccess  = null;
    if ($_POST['password'] === $_POST['confirm_password']) {
        $sql = "SELECT `email` FROM `users`";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $userEmails = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (!in_array($_POST['email'], $userEmails)) {
            $hashedPassword = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $query2 = "INSERT INTO `users`
                    ( `full_name`, `email`, `password`) 
                    VALUES (:fname,:email,:password)";
            $stmt = $pdo->prepare($query2);
            $stmt->execute(
                [
                    "fname" => $_POST['nom'],
                    "email" => $_POST['email'],
                    "password" => $hashedPassword,

                ]
            );
            $insertedId = $pdo->lastInsertId();
            if (empty($insertedId)) {
                $error[] = "Error d'ajout";
            } else {
                $messageSuccess = 'Ajouté avec succès';
            }
        } else {
            $error[] = "Le user exist deja";
        }
    } else {
        $error[] = "les mots de passe saisi ne sont pas identiques";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Créer un compte</title>
</head>

<body>
    <?php
    if (!empty($error)) {
        foreach ($error as $message) {
            echo "<div>$message</div>";
        }
    }

    if (!empty($messageSuccess)) {
        echo "<div style='color:green;'>$messageSuccess</div>";
    }
    ?>
    <fieldset style="width: 250px;">
        <h1>Créer un compte</h1>

        <form action="register.php" method="post">
            <label for="nom">Nom complet</label><br>
            <input type="text" id="nom" name="nom"><br><br>

            <label for="email">Email</label><br>
            <input type="email" id="email" name="email"><br><br>

            <label for="password">Mot de passe</label><br>
            <input type="password" id="password" name="password"><br><br>

            <label for="confirm_password">Confirmation du mot de passe</label><br>
            <input type="password" id="confirm_password" name="confirm_password"><br><br>

            <button type="submit" name="send">S'inscrire</button>
        </form>

        <p>
            Vous avez déjà un compte ?
            <a href="#">Se connecter</a>
        </p>
    </fieldset>

</body>

</html>