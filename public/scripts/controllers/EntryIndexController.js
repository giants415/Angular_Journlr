angular
  .module('Journlr')
  .controller('EntryIndexController', EntryIndexController);

EntryIndexController.$inject = ['$http'];
function EntryIndexController($http){
  var vm = this;
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
