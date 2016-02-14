var express = require('express');

var app = express();    // Hauptapplikation
var admin = express();  // Unterapplikation

admin.get('/', function (req, res) {
  console.log(admin.mountpath); // Ausgabe des Stammpfades
  res.send('Admin Homepage');
})

// Bestimmen des Stammpfades der Unterapplikation
app.use('/admin', admin); 
