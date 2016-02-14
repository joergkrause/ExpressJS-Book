adminRouter.param('id', function (req, res, next, name) {
  console.log('Validierung für ID ' + id);
  var id = Number(req.params.id);
  if (!id) {
    // Fehlerbehandlung
  } else {
    // Ablage des geprüften Wertes
    req.id = id;
    // Weiter mit Verarbeitung
    next();
  }
});

adminRouter.get('/users/:id', function (req, res) {
  res.send('ID: ' + req.id + '!');
});