<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fichier A</title>
</head>

<body>
    <form action="index.php" method="POST" enctype="multipart/form-data">
        <p>
            <label for="">Groupe</label>
            <input type="text" name="groupe" />
        </p>
        <p>
            <label for="">Jour</label>
            <input type="text" name="jour" />
        </p>
        <p>
            <label for="">Nombre de stagaires</label>
            <input type="text" name="nombreStagaire" />
        </p>
        <p>
            <label for="">Api</label>
            <input type="text" name="api" />
        </p>

        <p>
            <label for="">Image</label>
            <input type="file" name="photoDeProfile" />
        </p>

        <p>
            <input type="submit" name="submit" value="Envoyer"/>
        </p>
    </form>
</body>

</html>