(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .component('searchByCityName', {
            templateUrl: '/assets/templates/searchByCityName.html',
            controller: 'SearchByCityNameController',
            controllerAs: 'vm',
            bindings: {
                'onSearch': '&'
            }
        });
})();