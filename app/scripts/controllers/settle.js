'use strict';

/**
 * @ngdoc function
 * @name iSettleApp.controller:SettleCtrl
 * @description
 * # SettleCtrl
 * Controller of the iSettleApp
 */
angular.module('iSettleApp')
  .controller('SettleCtrl', ['$scope', 'Page', function ($scope, Page) {
    Page.routeTo('settle');

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
