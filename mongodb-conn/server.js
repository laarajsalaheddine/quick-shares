const express = require('express');
const dotenv = require('dotenv');
const { getDatabase, connectToDB } = require('./db.js');
const app = express();
dotenv.config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json());
// process.env.PORT

app.get("/health", (req, resp) => {
    resp.json({
        "message": "API is working"
    });
});


// création 
app.post("/users", async (req, resp) => {
    try {
        let body = req.body;
        let db = await getDatabase();
        let collection = db.collection("users");

        const result = await collection.insertOne({
            nom: body.nom,
            prenom: body.prenom,
            email: body.email,
            age: body.age,
            role: body.role,
            actif: body.actif,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        resp.status(201).json(body);
    } catch (error) {
        console.log("Catch block:", error)
    }
});

// lire tous 
app.get("/users", async (req, resp) => {
    try {
        let db = await getDatabase();
        let collection = db.collection("users");

        const users = await collection.find().toArray(); // cursor
        resp.status(200).json(users);
    } catch (error) {
        console.log("Catch block:", error)
    }

});

// lire un seul doc 
app.get("/users/:prenom", async (req, resp) => {
    try {
        let prenom = req.params.prenom
        let db = await getDatabase();
        let collection = db.collection("users");

        const usersByMail = await collection.findOne({
            prenom: prenom
        });
        resp.status(200).json(usersByMail);
    } catch (error) {
        console.log("Catch block:", error)
    }
});

// Modifier / update
app.put("/users/:prenom", async (req, resp) => {

    try {
        let prenom = req.params.prenom;
        let body = req.body;
        let db = await getDatabase();
        let collection = db.collection("users");

        const result = await collection.updateOne(
            { prenom },
            {
                $set: {
                    nom: body.nom,
                    prenom: body.prenom,
                    email: body.email,
                    age: body.age,
                    role: body.role,
                    actif: body.actif,
                    updatedAt: new Date()
                }
            }
        );
        resp.status(201).json(body);
    } catch (error) {
        console.log("Catch block:", error)
    }
});

// Modifier / update
app.delete("/user/:id", (req, resp) => {

    resp.status(204).json({
        "message": "read one"
    });
});



app.listen(PORT, () => {
    console.log(`${HOST}:${PORT}/`);
    // console.log(`http://localhost:${PORT}/api-doc`);
})
