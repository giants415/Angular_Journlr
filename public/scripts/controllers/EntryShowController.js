angular
  .module('Journlr')
  .controller('EntryShowController', EntryShowController);

EntryShowController.$inject = ['$http', '$routeParams', '$location'];
function EntryShowController ($http, $routeParams, $location){
  var vm = this;
  $http({
    method: 'GET',
    url: '/api/entries/'+$routeParams.id
  }).then( function showSuccessCb(json){
    vm.entry = json.data;
  }, function errorCb(response) {
    console.log('Error getting that entry', response);
  });


}
