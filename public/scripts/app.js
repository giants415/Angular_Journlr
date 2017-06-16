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
    //specify the delete location

  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
