var admin = express();

admin.on('mount', function (parent) {
  console.log('Admin Gebunden');
  console.log(parent); // Übergeordnete App
});

admin.get('/', function (req, res) {
  res.send('Admin Homepage');
});

// Dieser Aufruf löst das Ereignis aus
app.use('/admin', admin);