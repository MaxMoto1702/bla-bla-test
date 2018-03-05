(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$http', '$q', 'NotificationService', '$location'];

    function SearchController($http, $q, notificationService, $location) {
        var vm = this;

        vm.searchByCityName = searchByCityName;
        vm.searchByCoordinates = searchByCoordinates;

        init();

        function init() {
        }

        function searchByCityName(cityName) {
            $location.path("/resultByCity/" + cityName)
        }

        function searchByCoordinates(lat, lon) {
            $location.path("/resultByCoord/" + lat + "," + lon);
        }
    }
})();
