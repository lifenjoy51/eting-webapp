'use strict';

// Declare app level module which depends on views, and components
angular.module('etingApp', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'etingApp.splash',
  'etingApp.main',
  'etingApp.storyview',
  'etingApp.version'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/splash'});
}]);
/**
.run(function($rootScope, $window) {
  $rootScope.slide = '';
  $rootScope.$on('$routeChangeStart', function() {
    //event button to move backward
    $rootScope.back = function() {
      console.log('back');
      $rootScope.slide = 'slide-right';
      $window.history.back();
    }
    //event button item list to move forward
    $rootScope.next = function() {
      console.log('next');
      $rootScope.slide = 'slide-left';
    }
  });
});;
*/
