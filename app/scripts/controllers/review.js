'use strict';

/**
 * @ngdoc function
 * @name iSettleApp.controller:ReviewCtrl
 * @description
 * # ReviewCtrl
 * Controller of the iSettleApp
 */
angular.module('iSettleApp')
  .controller('ReviewCtrl', ['$scope', 'Page', function ($scope, Page) {
    Page.routeTo('review');

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
