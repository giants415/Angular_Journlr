var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//CROSS ORIGIN
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// STATIC ROUTE
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

//REQUIRE DATABASE
var db = require('./models');

//HOMEPAGE ROUTE
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/index.html');
});
//TEMPLATE ROUTE
app.get('/templates/:name', function templates(req, res){
  var name = req.params.name;
  res.sendFile(__dirname + '/templates/' + name + '.html');
});

//DISPLAYS ALL ENTRIES
app.get('/api/entries', function (req, res) {
  db.Entry.find(function (err, entries){
    if (err) {return console.log('get error: ' + err);}
    res.json(entries);
  });
});

//DISPLAY ONE ENTRY
app.get('/api/entries/:id', function (req, res){
  db.Entry.findOne({_id: req.params.id}, function(err, data){
    if (err) {return console.log("single entry get error: " + err);}
    res.json(data);
  });
});

//POST A NEW ENTRY
app.post('/api/entries', function (req, res){
  var newEntry = new db.Entry({
    entryTitle: req.body.entryTitle,
    entryDate: req.body.entryDate,
    entryBody: req.body.entryBody
  });
    newEntry.save(function(err, entry){
      if (err) {
        return console.log("error saving new entry: " + err);
      } else {
        res.json(newEntry);
      }
    });
});

//DELTE AN ENTRY
app.delete('/api/entries/:id', function (req, res){
  var entryId = req.params.id;
  db.Entry.findOneAndRemove({_id: entryId}, function (err, deleteEntry){
    if (err){
      return console.log("error deleting entry: " + err);
    } else {
      res.json(deleteEntry);
    };
  });
});


//JSON ENDPOINTS
app.get('/api', function api_index(req, res) {
  res.json({
    EntriesEndpoints: true,
    message: 'Here are my endpoints',
    endpoints: [
      {method: 'GET', path: '/api', description: 'Homepage'},
      {method: 'GET', path: 'api/entries', description: 'displays all entries'},
      {method: 'GET', path: 'api/entries/:id', description: 'displays one entry'},
      {method: 'DELETE', path: 'api/entries/:id', description: 'deletes an entry'},
      {method: 'POST', path: 'api/entries', description: 'adds a new entry'}
    ]
  })
});


// LISTEN TO LOCALHOST
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
