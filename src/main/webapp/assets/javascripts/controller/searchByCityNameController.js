(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .controller('SearchByCityNameController', SearchByCityNameController);

    SearchByCityNameController.$inject = [];

    function SearchByCityNameController() {
        var vm = this;
        vm.cityName = '';
        vm.submit = function () {
            vm.onSearch({cityName: vm.cityName});
        }
    }
})();
