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
    // var entryToDelete = $routeParams.id;
    // console.log('delete this entry: ' + entry);
    // console.log(vm.entries.indexOf(entryToDelete));
    $http({
      method: 'DELETE',
      url: '/api/entries/'+$routeParams.id,
    }).then(function deleteSuccess(entry){
      // CURRENT THEORY:
      // SERVER DELETES THE ENTRY BUT WHEN THE FRONT END
      // TRIES TO FOLLOW THROUGH, THE ENTRY IS GONE AND IT
      // THEREFORE CAN'T FIND THE INDEX OF THE ENTRY
      var entryToDelete = $routeParams.id
      console.log('entry to delete: ' + entryToDelete);
      var index = vm.entries.indexOf(entryToDelete);
      console.log('heres the entry ' + $routeParams.id);
      vm.entries.splice(index, 1);
    }, function deleteError(response){
      console.log('Error deleteing entry ', response);
    });
  }

}
