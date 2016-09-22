angular
  .module('Journlr', ['ngRoute'])
  .controller('EntryShowController', EntryShowController);

EntryShowController.$inject = ['$http', '$routeParams'];
function EntryShowController ($http, $routeParams){
  var vm = this;
  var entryId = $routeParams.entryId
  $http({
    method: 'GET',
    url: 'api/entries/'+$routeParams.id
  }).then( function showSuccessCb(json){
    vm.entry = json.data;
  }, function errorCb(response) {
    console.log('Error getting that entry', response);
  });
}
