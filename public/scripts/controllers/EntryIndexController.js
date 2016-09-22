angular
  .module('Journlr')
  .controller('EntryIndexController', EntryIndexController);

EntryIndexController.$inject = ['$http'];
function EntryIndexController($http){
  var vm = this;
  vm.newEntry = {};
  vm.showEntryAndHideForm = true;
  vm.toggleShows = function(){
    vm.showEntryAndHideForm = !vm.showEntryAndHideForm;
  }
  // vm.submitNew = function(){
  //   var url = $location.search({});
  // }
  $http({
    method: 'GET',
    url: '/api/entries'
  }).then(function successCb(response){
    console.log('get all entries worked', response.data);
    vm.entries = response.data;
  }, function errorCb(error){
    console.log('error getting all entries: ', error);
  });

  vm.createEntry = function(){
    $http({
      method: 'POST',
      url: 'api/entries',
      data: vm.newEntry
    }).then(function successCb(response){
      vm.entries.push(response.data);
    }, function errorCb(response){
      console.log('Error posting new entry', response);
    });
  };

}
