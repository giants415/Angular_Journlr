angular
  .module('Journlr', [])
  .controller('EntryIndexController', EntryIndexController);

function EntryIndexController(){
  var vm = this;
  // vm.prevEntry = {};

  vm.prevEntries = [
    {entryTitle: 'Title1', entryDate:'9/19/2016'},
    {entryTitle: 'Title2', entryDate:'9/20/2016'},
    {entryTitle: 'Title3', entryDate:'9/21/2016'},
    {entryTitle: 'Title4', entryDate:'9/22/2016'},
  ];
}
