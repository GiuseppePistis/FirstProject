var express = require('express'); // Importa express in un oggetto
const path = require('path'); //Percorso assoluto cartella

var app = express(); // Importa la funzione express su app

app.get('/', function (req, res) { //Legge la route ('/') --> req(oggetto client) e res(oggetto server) 
    res.send("<h1>Codice Html</h1>"); //Invia del codice Html in risposta
});

app.get('/test', function (req, res) { //res.sendFile per mandare file e non stringa html
    res.sendFile(path.join(__dirname, 'views/index.html')); //path.join per unire percorso assoluto a cartella scelta
});

app.listen(3000, function () { //Rimane in ascolto sulla porta 3000
    console.log("Server Attivo sulla porta 3000") //Function che si attiva all'avvio
});

//Per avviare il sito "node app.js" nel terminale
//Control c per terminare