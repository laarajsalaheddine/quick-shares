<?php
session_start();
if (isset($_POST['send'])) {
    include("db.php");
    $error = [];
    $sql = "SELECT * FROM `users` WHERE `email` = :email;";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        "email" => $_POST['email']
    ]);
    $selectedUser = $stmt->fetch(PDO::FETCH_ASSOC);
    if (password_verify($_POST['password'], $selectedUser['password'])) {
        $_SESSION['user'] = $selectedUser;
        header('Location: dashboard.php');
        exit;
    } else {
        $error[] = "les mots de passe saisi ne sont pas identiques";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
</head>

<body>

    <fieldset style="width: 310px;">
        <h1>Connexion</h1>

        <form action="login.php" method="POST">
            <label for="email">Email</label><br>
            <input type="email" id="email" name="email"><br><br>

            <label for="password">Mot de passe</label><br>
            <input type="password" id="password" name="password"><br><br>
            <button type="submit" name="send">Se connecter</button>
        </form>

        <p>
            Vous n'avez pas encore de compte ?
            <a href="#">Créer un compte</a>
        </p>
    </fieldset>

</body>

</html>