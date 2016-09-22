console.log('app js is connected');
angular.module('Journlr', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controllerAs: 'entryIndexCtrl',
      controller: 'EntryIndexController'
    })
    .when('/entries/:id', {
      templateUrl: '/templates/showEntry',
      controllerAs: 'entryShowCtrl',
      controller: 'EntryShowController'
    })
    .otherwise ({
      redirectTo: '/'
    });

  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}

// EntryShowController.$inject = ['$routeParams'];
// function EntryShowController($routeParams){
//   var vm = this;
//   var prevEntry = $routeParams.entryId;
//   $http({
//     method: 'GET',
//     url: 'api/entries/'+$routeParams.id
//   }).then( function showSuccessCb(json){
//     vm.entry = json.data;
//   }, function errorCb(response) {
//     console.log('Error getting that entry', response);
//   });
// }
