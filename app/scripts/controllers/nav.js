'use strict';

/**
 * @ngdoc function
 * @name iSettleApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the iSettleApp
 */
angular.module('iSettleApp')
  .controller('NavCtrl', ['$scope', 'Page', function ($scope, Page) {
    $scope.route = Page.route;
    $scope.$on('route.change', function(event) {
      $scope.route = Page.route;
    });
    $scope.getActive = Page.getActive;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
