// constante app qui provient du fichier 'app.js'
const app = require ('./app')
// constante qui dit sur quel port on est 
const port = 1997
// Lecture du port et affichage du numéro du port
app.listen(port, () =>{
    console.log("l'appli tourne sur le sur le port" + port);
})