angular
  .module('Journlr')
  .controller('EntryShowController', EntryShowController);

EntryShowController.$inject = ['$http', '$routeParams'];
function EntryShowController ($http, $routeParams){
  var vm = this;
  $http({
    method: 'GET',
    url: '/api/entries/'+$routeParams.id
  }).then( function showSuccessCb(json){
    vm.entry = json.data;
  }, function errorCb(response) {
    console.log('Error getting that entry', response);
  });

  vm.deleteEntry = function(entry){
    var entryToDelete = $routeParams.id;
    console.log(entryToDelete);
    console.log(entries.indexOf(entryToDelete));
    $http({
      method: 'DELETE',
      url: '/api/entries/'+$routeParams.id,
      data: entryToDelete
    }).then(function deleteSuccess(entryToDelete){
      // var entryToDelete = $routeParams.id
      // console.log(entryToDelete);
      var index = vm.entries.indexOf(entryToDelete);
      vm.entries.splice(index, 1);
    }, function deleteError(response){
      console.log('Error deleteing entry ', response);
    });
  }

}
