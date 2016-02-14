// Die Applikationsinstanz wird gebildet
var express = require('express');
var app = express();

// Eine neue Instanz des Routers wird erstellt
var adminRouter = express.Router();

// Die Admin-Site (http://localhost:3000/admin)
adminRouter.get('/', function (req, res) {
  res.send('Startseite des Admin-Bereichs!');
});

// Die Benutzer-Site (http://localhost:3000/admin/users)
adminRouter.get('/users', function (req, res) {
  res.send('Alle Benutzer anzeigen!');
});

// Die Artikel-Seite (http://localhost:3000/admin/article)
adminRouter.get('/article', function (req, res) {
  res.send('Alle Artikel anzeigen!');
});

// Zuweisen der Routen an die Applikation
app.use('/admin', adminRouter);

// Der Server
var server = app.listen(3000, function () {
  console.log('Server gestartet');
});
