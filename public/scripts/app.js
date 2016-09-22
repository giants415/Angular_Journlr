console.log('app js is connected');
angular.module('Journlr', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'EntryIndexController',
      controllerAs: 'EntryIndexCtrl'
    })
    .when('/:id', {
      templateUrl: 'templates/showEntry.html',
      controllerAs: 'EntryShowCtrl',
      controller: 'EntryShowController'
    })
    .otherwise ({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
