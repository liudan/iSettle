'use strict';

/**
 * @ngdoc service
 * @name iSettleApp.Page
 * @description
 * # Page
 * Service in the iSettleApp.
 */
angular.module('iSettleApp')
  .service('Page', ['$rootScope', function Page($rootScope) {
    var service = {
      route: 'home',
      routeTo: function(route) {
        service.route = route;
        $rootScope.$broadcast('route.change');
      },
      getActive: function(route) {
        if (service.route === route) {
          return 'active';
        } else {
          return '';
        }
      }
    };

    return service;
  }]);
