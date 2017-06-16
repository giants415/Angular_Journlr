angular
  .module('Journlr')
  .controller('EntryIndexController', EntryIndexController);

EntryIndexController.$inject = ['$http', '$routeParams', '$window'];
function EntryIndexController($http, $routeParams, $window){
  var vm = this;
  vm.newEntry = {};
  vm.showEntryAndHideForm = true;
  vm.toggleShows = function(){
    vm.showEntryAndHideForm = !vm.showEntryAndHideForm;
  }

  $http({
    method: 'GET',
    url: '/api/entries'
  }).then(function successCb(response){
    console.log('get all entries worked', response.data);
    vm.entries = response.data;
  }, function errorCb(error){
    console.log('error getting all entries: ', error);
  });


  vm.deleteEntry = function(entry){
    // vm.entries = response.data;
    // console.log('EntryShowController delete');
    // console.log('vm.entries: ' + JSON.stringify(vm));
    // console.log('vm.entry title: '+ vm.entry.indexOf(vm.entry.entryTitle));
    // console.log('type of vm.entry: ' + typeof(vm.entry._id));
    // console.log(vm.entry.entryTitle);
    // console.log('vm.entry ID: ' + vm.entries.indexOf(vm.entry._id));
    // var entryToDelete = $routeParams.id;
    // console.log('delete this entry: ' + entry);
    // console.log(vm.entries.indexOf(entryToDelete));
    // console.log(typeof($routeParams.id));
    // console.log(vm.entries.indexOf(vm.entry.entryTitle));

    $http({
      method: 'DELETE',
      url: '/api/entries/'+$routeParams.id
    }).then(function deleteSuccess(json){
      console.log('EntryShowController delete');
      // CURRENT THEORY:
      // SERVER DELETES THE ENTRY BUT WHEN THE FRONT END
      // TRIES TO FOLLOW THROUGH, THE ENTRY IS GONE AND IT
      // THEREFORE CAN'T FIND THE INDEX OF THE ENTRY
      var entryToDelete = $routeParams.id;
      console.log(vm);
      console.log('entry to delete: ' + entryToDelete);
      var index = vm.entries.indexOf(entryToDelete);
      console.log('heres the entry ' + $routeParams.id);
      vm.entries.splice(index, 1);
      $window.location.href = '/';
    }, function deleteError(response){
      console.log('Error deleteing entry ', response);
    });
  }
//MIGHT HAVE TO BUILD AN INDIVIDUAL GET ENTRY HERE
// MAYBE MOVE DELETE ENTRY TO THIS CONTROLLER???

  vm.createEntry = function(){
    $http({
      method: 'POST',
      url: 'api/entries',
      data: vm.newEntry
    }).then(function successCb(response){
      console.log(response.data)
      vm.entries.push(response.data);
      vm.newEntry = {};
      console.log('vm.entries yields: ' + vm.entries[0].entryTitle);
    }, function errorCb(response){
      console.log('Error posting new entry', response);
    });
  };

}
