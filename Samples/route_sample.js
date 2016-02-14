var app = express();

app.route('/events')
  .all(function (req, res, next) {
      // alle Verben
}).get(function (req, res, next) {
  // nur GET
  res.json({ "sample" : "value" });
}).post(function(req, res, next) {
      // nur POST
});