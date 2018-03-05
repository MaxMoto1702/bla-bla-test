(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .component('navbar', {
            templateUrl: '/assets/templates/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'vm',
            bindings: {
                currentUser: '='
            }
        });
})();