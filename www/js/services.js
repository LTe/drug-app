angular.module('starter.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function($http) {
  // Might use a resource here that returns a JSON array

  factory = {}
  factory.events = []
  factory.event = {}
  factory.getEvents = function(){
    return $http.get("http://drug.org.pl/api/events.json").then(function(data){
      angular.extend(factory.events, data.data.events)
    })
  }
  factory.getPresenations = function(id){
    return $http.get("http://drug.org.pl/api/events/" + id + "/presentations.json");
  }

  factory.get = function(id){
    return $http.get("http://drug.org.pl/api/events/" + id + ".json");
  }

  return factory
});
