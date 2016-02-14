var admin = express();

admin.get('/', function (req, res) {
  console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage');
})

var secret = express();
secret.get('/', function (req, res) {
  console.log(secret.mountpath); // /secr*t
  res.send('Admin Secret');
});

// Lade den Router 'secret' mit dem Pfad '/secre*' 
// für die Unterapplikation admin
admin.use('/secre*', secret);

// Lade den Router 'admin' mit den Pfaden '/adm*' und '/manager'
// für die Hauptapplikation
app.use(['/adm*', '/manager'], admin); 