'use strict';

/**
 * @ngdoc function
 * @name iSettleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iSettleApp
 */
angular.module('iSettleApp')
  .controller('MainCtrl', ['$scope', 'Page', function ($scope, Page) {
    Page.routeTo('home');

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
