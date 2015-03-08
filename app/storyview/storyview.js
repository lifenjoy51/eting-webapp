'use strict';

angular.module('etingApp.storyview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/storyview', {
    templateUrl: 'storyview/storyview.html',
    controller: 'storyviewCtrl'
  });
}])

.controller('storyviewCtrl', ['$scope', '$location',function($scope, $location) {
  $scope.goToPage = function (page) {
    $scope.back();
    $location.path('/'+page);
  };
}]);
