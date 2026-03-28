const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenue sur mon serveur Express !");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    res.json({ message: "Connexion réussie", email: email });
});

app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send("Utilisateur demandé : " + userId);
});

app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});