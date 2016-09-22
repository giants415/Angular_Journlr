var db = require('./models');

var entryList = [
  {
    entryTitle: 'Entry 1',
    entryDate: 'September 21 2016',
    entryBody: 'Here is the first entry. It is not great but it is functional.'
  },
  {
    entryTitle: 'Entry 2',
    entryDate: 'September 22 2016',
    entryBody: 'Here is the second entry. It is not great as great as the first but it is also functional.'
  },
  {
    entryTitle: 'Entry 3',
    entryDate: 'September 23 2016',
    entryBody: 'Here is the third entry. It is not great as great as the first or second but it is also functional.'
  }
];

db.Entry.remove ({}, function(err,entries) {

    db.Entry.create(entryList, function (err, entries) {
      if (err) { return console.log('err', err); }
      console.log('created', entries.length, 'entries');
      process.exit();
    });
});
