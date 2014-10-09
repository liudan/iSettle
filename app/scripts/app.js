'use strict';

/**
 * @ngdoc overview
 * @name iSettleApp
 * @description
 * # iSettleApp
 *
 * Main module of the application.
 */
angular
  .module('iSettleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/settle', {
        templateUrl: 'views/settle.html',
        controller: 'SettleCtrl'
      })
      .when('/review', {
        templateUrl: 'views/review.html',
        controller: 'ReviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
