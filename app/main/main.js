'use strict';

angular.module('etingApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/main', {
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  });
}])

.controller('mainCtrl', ['$scope', '$location',function($scope, $location) {

  //$scope.$on('init', function () {
    var mySwiper = new Swiper('.swiper-container',{
      //Your options here:
      mode:'horizontal',
      loop: false,
      keyboardControl: true,
      mousewheelControl: true,
      slidesPerView: 1,
      initialSlide :1,
      onSlideClick: function (swiper) {
        //angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index)
      }
    });

    console.log(mySwiper);
//  });

}])

.controller('mainStoryListCtrl', ['$scope', '$location',function($scope, $location) {
  $scope.itemtype = 'story';
  $scope.ordertype = 'time';
}])
;
