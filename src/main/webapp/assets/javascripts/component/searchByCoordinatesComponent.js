(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .component('searchByCoordinates', {
            templateUrl: '/assets/templates/searchByCoordinates.html',
            controller: 'SearchByCoordinatesController',
            controllerAs: 'vm',
            bindings: {
                'onSearch': '&'
            }
        });
})();