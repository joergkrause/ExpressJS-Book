app.route('/login')
   .get(function (req, res) {
  res.send('Das Anmeldeformular.');
})
   .post(function (req, res) {
  console.log('Anmelden');
  res.send('Anmeldung verarbeitet!');
});