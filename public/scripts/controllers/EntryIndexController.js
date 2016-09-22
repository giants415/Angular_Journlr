angular
  .module('Journlr', ['ngRoute'])
  .controller('EntryIndexController', EntryIndexController);

EntryIndexController.$inject = ['$http'];
function EntryIndexController($http){
  var vm = this;
  // vm.prevEntry = {};
  // vm.prevEntries = [
  //   {entryTitle: 'Title1', entryDate:'9/19/2016'},
  //   {entryTitle: 'Title2', entryDate:'9/20/2016'},
  //   {entryTitle: 'Title3', entryDate:'9/21/2016'},
  //   {entryTitle: 'Title4', entryDate:'9/22/2016'},
  // ];
  $http({
    method: 'GET',
    url: '/api/entries'
  }).then(function successCb(response){
    console.log('get all entries worked', response.data);
    vm.entries = response.data;
  }, function errorCb(error){
    console.log('error getting all entries: ', error);
  });

}
