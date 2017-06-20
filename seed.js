var db = require('./models');


var entryList = [
  {
    entryTitle: 'Entry 1',
    entryDate: 'September 21 2016',
    entryBody: '1 Readymade organic copper mug williamsburg, YOLO next level helvetica. Echo park tofu cred, tumblr post-ironic microdosing jean shorts organic activated charcoal lyft kombucha 3 wolf moon brunch ramps woke. Aesthetic 8-bit chicharrones man bun. Snackwave marfa mustache, hella cliche photo booth aesthetic williamsburg vegan whatever four loko. Pok pok tousled street art VHS wayfarers. Tumblr wolf portland flexitarian. La croix squid pour-over kombucha four dollar toast, roof party bicycle rights hot chicken pinterest meh air plant echo park microdosing plaid sartorial.Glossier ramps sartorial, slow-carb hot chicken disrupt hell of ethical before they sold out pinterest chia godard. Sartorial raclette jianbing 8-bit beard migas. Post-ironic humblebrag enamel pin, +1 brunch jean shorts chillwave. Copper mug biodiesel franzen, cray shabby chic single-origin coffee DIY edison bulb portland subway tile squid. Seitan DIY art party, brunch venmo meggings blog ugh salvia fixie flexitarian four loko direct trade bitters. Pork belly PBR&B keffiyeh flannel, meditation tacos biodiesel affogato af typewriter air plant beard health goth. Lo-fi drinking vinegar whatever, jean shorts meditation marfa pork belly snackwave swag letterpress squid craft beer.'
  },
  {
    entryTitle: 'Entry 2',
    entryDate: 'September 22 2016',
    entryBody: '2 Readymade organic copper mug williamsburg, YOLO next level helvetica. Echo park tofu cred, tumblr post-ironic microdosing jean shorts organic activated charcoal lyft kombucha 3 wolf moon brunch ramps woke. Aesthetic 8-bit chicharrones man bun. Snackwave marfa mustache, hella cliche photo booth aesthetic williamsburg vegan whatever four loko. Pok pok tousled street art VHS wayfarers. Tumblr wolf portland flexitarian. La croix squid pour-over kombucha four dollar toast, roof party bicycle rights hot chicken pinterest meh air plant echo park microdosing plaid sartorial. Glossier ramps sartorial, slow-carb hot chicken disrupt hell of ethical before they sold out pinterest chia godard. Sartorial raclette jianbing 8-bit beard migas. Post-ironic humblebrag enamel pin, +1 brunch jean shorts chillwave. Copper mug biodiesel franzen, cray shabby chic single-origin coffee DIY edison bulb portland subway tile squid. Seitan DIY art party, brunch venmo meggings blog ugh salvia fixie flexitarian four loko direct trade bitters. Pork belly PBR&B keffiyeh flannel, meditation tacos biodiesel affogato af typewriter air plant beard health goth. Lo-fi drinking vinegar whatever, jean shorts meditation marfa pork belly snackwave swag letterpress squid craft beer.'
  },
  {
    entryTitle: 'Entry 3',
    entryDate: 'September 23 2016',
    entryBody: '3 Readymade organic copper mug williamsburg, YOLO next level helvetica. Echo park tofu cred, tumblr post-ironic microdosing jean shorts organic activated charcoal lyft kombucha 3 wolf moon brunch ramps woke. Aesthetic 8-bit chicharrones man bun. Snackwave marfa mustache, hella cliche photo booth aesthetic williamsburg vegan whatever four loko. Pok pok tousled street art VHS wayfarers. Tumblr wolf portland flexitarian. La croix squid pour-over kombucha four dollar toast, roof party bicycle rights hot chicken pinterest meh air plant echo park microdosing plaid sartorial. Glossier ramps sartorial, slow-carb hot chicken disrupt hell of ethical before they sold out pinterest chia godard. Sartorial raclette jianbing 8-bit beard migas. Post-ironic humblebrag enamel pin, +1 brunch jean shorts chillwave. Copper mug biodiesel franzen, cray shabby chic single-origin coffee DIY edison bulb portland subway tile squid. Seitan DIY art party, brunch venmo meggings blog ugh salvia fixie flexitarian four loko direct trade bitters. Pork belly PBR&B keffiyeh flannel, meditation tacos biodiesel affogato af typewriter air plant beard health goth. Lo-fi drinking vinegar whatever, jean shorts meditation marfa pork belly snackwave swag letterpress squid craft beer.'
  },
  {
    entryTitle: 'Entry 4',
    entryDate: 'September 24 2016',
    entryBody: '1 Readymade organic copper mug williamsburg, YOLO next level helvetica. Echo park tofu cred, tumblr post-ironic microdosing jean shorts organic activated charcoal lyft kombucha 3 wolf moon brunch ramps woke. Aesthetic 8-bit chicharrones man bun. Snackwave marfa mustache, hella cliche photo booth aesthetic williamsburg vegan whatever four loko. Pok pok tousled street art VHS wayfarers. Tumblr wolf portland flexitarian. La croix squid pour-over kombucha four dollar toast, roof party bicycle rights hot chicken pinterest meh air plant echo park microdosing plaid sartorial.Glossier ramps sartorial, slow-carb hot chicken disrupt hell of ethical before they sold out pinterest chia godard. Sartorial raclette jianbing 8-bit beard migas. Post-ironic humblebrag enamel pin, +1 brunch jean shorts chillwave. Copper mug biodiesel franzen, cray shabby chic single-origin coffee DIY edison bulb portland subway tile squid. Seitan DIY art party, brunch venmo meggings blog ugh salvia fixie flexitarian four loko direct trade bitters. Pork belly PBR&B keffiyeh flannel, meditation tacos biodiesel affogato af typewriter air plant beard health goth. Lo-fi drinking vinegar whatever, jean shorts meditation marfa pork belly snackwave swag letterpress squid craft beer.'
  },
  {
    entryTitle: 'Entry 5',
    entryDate: 'September 25 2016',
    entryBody: '1 Readymade organic copper mug williamsburg, YOLO next level helvetica. Echo park tofu cred, tumblr post-ironic microdosing jean shorts organic activated charcoal lyft kombucha 3 wolf moon brunch ramps woke. Aesthetic 8-bit chicharrones man bun. Snackwave marfa mustache, hella cliche photo booth aesthetic williamsburg vegan whatever four loko. Pok pok tousled street art VHS wayfarers. Tumblr wolf portland flexitarian. La croix squid pour-over kombucha four dollar toast, roof party bicycle rights hot chicken pinterest meh air plant echo park microdosing plaid sartorial.Glossier ramps sartorial, slow-carb hot chicken disrupt hell of ethical before they sold out pinterest chia godard. Sartorial raclette jianbing 8-bit beard migas. Post-ironic humblebrag enamel pin, +1 brunch jean shorts chillwave. Copper mug biodiesel franzen, cray shabby chic single-origin coffee DIY edison bulb portland subway tile squid. Seitan DIY art party, brunch venmo meggings blog ugh salvia fixie flexitarian four loko direct trade bitters. Pork belly PBR&B keffiyeh flannel, meditation tacos biodiesel affogato af typewriter air plant beard health goth. Lo-fi drinking vinegar whatever, jean shorts meditation marfa pork belly snackwave swag letterpress squid craft beer.'
  },
  {
    entryTitle: 'Entry 6',
    entryDate: 'September 26 2016',
    entryBody: '1 Readymade organic copper mug williamsburg, YOLO next level helvetica. Echo park tofu cred, tumblr post-ironic microdosing jean shorts organic activated charcoal lyft kombucha 3 wolf moon brunch ramps woke. Aesthetic 8-bit chicharrones man bun. Snackwave marfa mustache, hella cliche photo booth aesthetic williamsburg vegan whatever four loko. Pok pok tousled street art VHS wayfarers. Tumblr wolf portland flexitarian. La croix squid pour-over kombucha four dollar toast, roof party bicycle rights hot chicken pinterest meh air plant echo park microdosing plaid sartorial.Glossier ramps sartorial, slow-carb hot chicken disrupt hell of ethical before they sold out pinterest chia godard. Sartorial raclette jianbing 8-bit beard migas. Post-ironic humblebrag enamel pin, +1 brunch jean shorts chillwave. Copper mug biodiesel franzen, cray shabby chic single-origin coffee DIY edison bulb portland subway tile squid. Seitan DIY art party, brunch venmo meggings blog ugh salvia fixie flexitarian four loko direct trade bitters. Pork belly PBR&B keffiyeh flannel, meditation tacos biodiesel affogato af typewriter air plant beard health goth. Lo-fi drinking vinegar whatever, jean shorts meditation marfa pork belly snackwave swag letterpress squid craft beer.'
  },
];

db.Entry.remove ({}, function(err,entries) {

    db.Entry.create(entryList, function (err, entries) {
      if (err) { return console.log('err', err); }
      console.log('created', entries.length, 'entries');
      process.exit();
    });
});
