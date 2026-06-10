<?php
echo "<pre>";
print_r("===== files");
print_r($_FILES);
echo "<pre>";
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST["send"])) {
    $error = [];
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $age = $_POST["age"];
    $email = $_POST["email"];
    // $cv=$_FILES["cv"]
    $isEmpty = empty($nom) && empty($prenom) && empty($age) && empty($email);
    if (!is_int($age)) {
        $isEmpty = false;
        goto abcd;
    }

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $isEmpty = false;
        goto abcd;
    }
    abcd:
    if ($isEmpty) {
        $error[] = "Données non valide";
    } else {
        // cas normal

        if (isset($_FILES['cv']) && $_FILES['cv']['error'] == 0) {
            $extension = pathinfo($_FILES['cv']['name'], PATHINFO_EXTENSION);
            $fill = ['pdf', 'doc', 'docx', 'jpg'];
            if (in_array($extension, $fill)) {
                $taille = $_FILES['cv']['size'] / (1024 * 1024);
                if ($taille <= 3) {
                    if (move_uploaded_file($_FILES['cv']['tmp_name'], 'uploads/' . time() . "." . $extension)) {
                        echo "le fichier est passé avec succes";
                    } else {
                        $error[] = "move error";
                    }
                } else {
                    $error[] = "file size errone";
                }
            } else {
                $error[] = "type errone";
            }
        } else {
            $error[] = "error de formulaire files";
        }
        if (empty($error)) {
            header("location: index.php?nom=$nom&prenom=$prenom&age=$age&email=$email&success=Le fichier " . $_FILES['cv']["name"] . " été ajouté avec succès" );
        } else {
            foreach ($error as $message) {
                echo "<p style='color:red;'>$message</p>";
            }
        }
        // 
    }
}
