angular
  .module('Journlr', ['ngRoute'])
  .controller('EntryShowController', EntryShowController);

EntryShowController.$inject = ['$http', '$routeParams'];
function EntryShowController ($http, $routeParams){
  var vm = this;
  $http({
    method: 'GET',
    url: 'api/entries/'+$routeParams.id
  }).then(function successCb(json){
    vm.entry = json.data
  });
}
