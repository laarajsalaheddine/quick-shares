<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    echo "<pre>";
    var_dump($_GET);
    echo "</pre>";
    if (isset($_GET['success'])) {
    ?>
        <div class="recap">
            <p>
                Nom: <?php echo $_GET['nom']; ?>
            </p>
            <p>
                Prenom: <?php echo $_GET['prenom']; ?>
            </p>
            <p>
                Age: <?php echo $_GET['age']; ?>
            </p>
            <p>
                E-mail: <?php echo $_GET['email']; ?>
            </p>
             <p>
                Message: <?php echo $_GET['success']; ?>
            </p>
        </div>

    <?php
    }
    ?>
    <div class="container">
        <h2>Formulaire de candidature</h2>
        <form action="traitement.php" method="POST" enctype="multipart/form-data">
            <label>Nom :</label>
            <input type="text" name="nom"><br><br>

            <label>prenom :</label>
            <input type="text" name="prenom"><br><br>

            <label>Age :</label>
            <input type="number" name="age"><br><br>

            <label>E-mail :</label>
            <input type="email" name="email"><br><br>

            <label>cv :</label>
            <input type="file" name="cv"><br><br>

            <button type="submit" name="send" value="send">
                envoyer la condidature
            </button>

        </form>
    </div>

</body>

</html>