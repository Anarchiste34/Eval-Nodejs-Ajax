// On déclare la constante qui contient l'export du module express
const express = require("express");
//On déclare la constante qui contient la fonction express qui crée l'appli
const app = express();
//On déclare la constante qui contient l'export du module body-parser
const bodyParser = require("body-parser");
// Pour faire l'appli express devra utiliser bodyParser
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// Import des routes de l'application
const feuRoute = require('./src/routes/feu_route');
const légendaireRoute = require('./src/routes/legendaire_route');

// Enregistrement des routes de l'application
app.use(feuRoute);
app.use(légendaireRoute);


//Test route par défault qui renvoie uen chaine de caractère
// Ex: http://localhost:1997/
app.get('/', (request, response) =>{
response.send("Bien joué tout fonctionne !")
});



module.exports = app;