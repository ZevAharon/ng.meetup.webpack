(function () {
    'use strict';
    angular
        .module('legacy.module', ['ui.router', 'customer.module'])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('customer', {
                    url: '/customer',
                    templateUrl: '/app/legacy/app/pages/customer.tmpl.html',
                    controller: 'customerController',
                    controllerAs: 'vm',
                });
        }]);
})();
