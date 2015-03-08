'use strict';

angular.module('etingApp.splash', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/splash', {
    templateUrl: 'splash/splash.html',
    controller: 'splashCtrl'
  }).
  when('/main', {
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  });
}])

.controller('splashCtrl', ['$location','$timeout',
function($location, $timeout) {

  function redirectToMain(){
    $location.path('/main');
  }

  //3초후 화면이동.
  $timeout(redirectToMain, 1000);

}]);
