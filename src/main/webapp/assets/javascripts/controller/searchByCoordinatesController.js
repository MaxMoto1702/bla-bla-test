(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .controller('SearchByCoordinatesController', SearchByCoordinatesController);

    SearchByCoordinatesController.$inject = [];

    function SearchByCoordinatesController() {
        var vm = this;
        vm.lat = '';
        vm.lon = '';
        vm.submit = function () {
            vm.onSearch({lat: vm.lat, lon: vm.lon});
        }
    }
})();
