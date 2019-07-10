(function () {
    'use strict';

    angular
        .module('customer.module', [])
        .controller('customerController', customerController);

    customerController.$inject = [];

    function customerController() {
        var vm = this;
        
        function activate() {
        }
        activate();
    }
})();
