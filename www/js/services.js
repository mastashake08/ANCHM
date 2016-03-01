angular.module('starter.services', ['ngResource'])

.factory('Notifications', function($resource) {
  // Might use a resource here that returns a JSON array

  return $resource('http://159.203.107.190/alert/:alertId');

});
