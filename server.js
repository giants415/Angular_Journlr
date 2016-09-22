var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//CROSS ORIGIN
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//REQUIRE DATABASE
var db = require('./models');

// var entryList = [
//   {
//     entryTitle: 'Entry 1',
//     entryDate: 'September 21 2016',
//     entryBody: 'Here is the first entry. It is not great but it is functional.'
//   },
//   {
//     entryTitle: 'Entry 2',
//     entryDate: 'September 22 2016',
//     entryBody: 'Here is the second entry. It is not great as great as the first but it is also functional.'
//   }
// ];

//STATIC ROUTE
app.use(express.static('public'));
app.use(express.static('node_modules'));

//HOMEPAGE ROUTE
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/index.html');
});


//GET ALL ENTRIES FROM DB
app.get('/api/entries', function (req, res) {
  db.Entry.find(function (err, protips){
    if (err) {return console.log('get error: ' + err);}
    res.json(entries);
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
      {method: 'GET', path: 'api/entries/:id', description: 'displays one entries'}
    ]
  })
});


// LISTEN TO LOCALHOST
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
