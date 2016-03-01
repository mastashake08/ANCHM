angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$ionicLoading) {
  $scope.requestForm = {};
  $scope.sendForm = function(){
    $ionicLoading.show({
     template: 'Sending Form...'
   });
    $http.post('http://159.203.107.190/request-more-info',$scope.requestForm).success(function(){
      $ionicLoading.hide();
      alert('Someone will reach out to you to shortly!');
    }).error(function(){
      $ionicLoading.hide();
      alert('Something went wrong, please try again.');
    })
  };
})

.controller('NotificationsCtrl', function($scope, Notifications) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $scope.$on('$ionicView.enter', function(e) {
    $scope.notifications = Notifications.query();
  });

  $scope.notifications = Notifications.query();

})

.controller('NotificationDetailCtrl', function($scope, $stateParams, Notifications) {

  $scope.notification = Notifications.get({ alertId: $stateParams.notificationId}, function() {

  }); // get() returns a single entry

  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
