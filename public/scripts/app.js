console.log('app js is connected');
angular.module('Journlr', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/allEntries.html',
      controller: 'EntryIndexController',
      controllerAs: 'EntryIndexCtrl'
    })
    // .when('/entries/:id'{
    //   templateUrl:
    // })
    .otherwise ({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
