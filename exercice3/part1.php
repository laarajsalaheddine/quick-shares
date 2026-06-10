<?php
if ($_SERVER['REQUEST_METHOD'] === "GET" && isset($_GET['search'])) {
    $articles = [
        "Tech: I switched to a standing desk this week, and my afternoon energy levels are much better.",
        "Travel: A weekend in Chefchaouen feels like walking inside a painting of blue streets and quiet cafés.",
        "Food: Homemade vegetable soup is still the easiest way to eat healthy on busy days.",
        "Books: Reading just ten pages before sleep helped me finish three novels this month.",
        "Fitness: Short 20-minute workouts are easier to keep consistent than long gym sessions.",
        "Finance: Tracking small daily expenses revealed where most of my monthly budget disappears.",
        "Environment: Replacing plastic bottles with a reusable one reduced my weekly waste immediately.",
        "Productivity: Writing tomorrow's top three tasks at night makes mornings less stressful."
    ];
    $motCle = $_GET['mot-cle'];
    $resultat = [];
    foreach ($articles as $unArticle) {
        if (strpos($unArticle, $motCle) !== FALSE) {
            // $resultat[] = $unArticle;
            array_push($resultat, $unArticle);
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Partie 1</title>
    <style>
        .resultat {
            width: 80%;
            margin: 5px auto;
            padding: 5px;
            border: 1px solid #000;
            border-radius: 8px;
        }
    </style>
</head>

<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET">
        <label for="">
            Mot clé
            <input type="text" name="mot-cle">
        </label>
        <button type="submit" name="search">
            Rechercher
        </button>
    </form>
    <?php
    if (!empty($resultat)) {
    ?>
        <div class="resultat">
            <h5> Resultat de la recherche</h5>
            <?php
            foreach ($resultat as $art) {
                echo $art;
                echo "<hr>";
            }
            ?>
        </div>
    <?php
    }
    ?>
</body>

</html>