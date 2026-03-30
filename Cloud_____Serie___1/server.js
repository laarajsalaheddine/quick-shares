const express = require('express'); // importation
const fs = require('fs'); // importation
const data = require('./data/articles.json'); // importation
// readFileSync => readfile Synchrone
const app = express();
const PORT = 3000;

// app.use(express.json());
// parsing du body de la requete http

app.get('/', () => {
    console.log(data);
})

// helper = aideur
const readArticles = (callback) => {
    console.log("reading ......");
    // callback hell / enfer des callback.....
    // libuv / event
    fs.readFile('./data/articles.json', (err, data) => {
        if (err) return callback(err, null);
        callback(null, JSON.parse(data || "[]"));
    });
}

const writeArticles = (data, callback) => {
    console.log("writing ......");
    fs.writeFile('./data/articles.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return callback(err);
        callback(null, 'Articles written successfully');
    });
}


// endpoints = chemin/path + verbe http  
app.get('/articles', (_req, res) => {

    readArticles((err, articles) => {
        if (err) {
            console.error("error", err);
            return res.status(500).json({ error: err.message });
        }
        console.log(articles);
        res.json(articles);
    });

});

// proof of concept poc ==> recréer une solution exitante

// param d'url => www.exemple.com/path/1/  (get/delete)
// param de requete (query) => www.exemple.com/path/1/?abc=3  (get)
// param de body => www.exemple.com/path/1/ (post/put/patch)

app.post('/articles', express.json(), (req, res) => {
    readArticles((err, articles) => {
        if (err) {
            console.error("error", err);
            return res.status(500).json({ error: err.message });
        }

        articles.push(req.body);

        writeArticles(articles, (err) => {
            if (err) {
                console.error("error", err);
                return res.status(500).json({ error: err.message });
            }

            res.status(201).send({ message: 'Article added', article: req.body });
            //res.method1 => configuration {status...etc}
            //res.method2 => termination  {json, send,  end .....}
        });
    });
});

app.put('/articles/:id', express.json(), (req, res) => {
    readArticles((err, articles) => {
        if (err) {
            console.error("error", err);
            return res.status(500).json({ error: err.message });
        }

        articles.forEach(elt => {
            if (elt.id === req.param.id) {
                elt.title = req.body.title
                elt.content = req.body.content
            }
        });

        writeArticles(articles, (err) => {
            if (err) {
                console.error("error", err);
                return res.status(500).json({ error: err.message });
            }

            res.status(201).send({ message: 'Article added', article: req.body });
            //res.method1 => configuration {status...etc}
            //res.method2 => termination  {json, send,  end .....}
        });
    });
});


app.delete('/articles/:id', express.json(), (req, res) => {
    readArticles((err, articles) => {
        if (err) {
            console.error("error", err);
            return res.status(500).json({ error: err.message });
        }

        // suppression
        // array.splice(startPosition, deleteCount, EltToInjectAtStartPos) 
        // startPosition => position à trouver dans le tableau
        // deleteCount => nombre d'élement à supprimer
        // EltToInjectAtStartPos => l'élément avec lequel on va reemplacer l'element de la startPosition
        articles.splice((articles.id - 1), 1)

        writeArticles(articles, (err) => {
            if (err) {
                console.error("error", err);
                return res.status(500).json({ error: err.message });
            }

            res.status(201).send({ message: 'Article added', article: req.body });
            //res.method1 => configuration {status...etc}
            //res.method2 => termination  {json, send,  end .....}
        });
    });
});


// put => modification

// delete

app.listen(PORT, () => {
    // loggin / journalisation
    console.log("App is running on: http://localhost:" + PORT);
});


