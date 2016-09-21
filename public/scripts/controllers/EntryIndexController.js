angular
  .module('Journlr', [])
  .controller('EntryIndexController', EntryIndexController);

function EntryIndexController(){
  var vm = this;
  vm.prevEntryList = {};

  vm.prevEntryList = {
    entry: 'September 19 2016 - Title1',
    entry: 'September 20 2016 - Title2',
    entry: 'September 21 2016 - Title3',
    entry: 'September 22 2016 - Title4',
  };
}
