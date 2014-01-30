angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService, $ionicLoading) {
  $scope.pets = PetService.events

  $scope.onRefresh = function(){
    PetService.getEvents().then(function(){
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  $scope.presentations = []
  $scope.event = {}

  PetService.get($stateParams.petId).then(function(data){
    angular.extend($scope.event, data.data)
  });

  $scope.promise = PetService.getPresenations($stateParams.petId);
  $scope.promise.then(function(data){
    angular.extend($scope.presentations, data.data.presentations)
  });
});
