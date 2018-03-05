(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .controller('ResultByCityNameController', ResultByCityNameController);

    ResultByCityNameController.$inject = ["$routeParams", '$http'];

    function ResultByCityNameController($routeParams, $http) {
        var vm = this;
        vm.params = $routeParams;
        $http.get('/backend/weather/byCityName/' + $routeParams.cityName).then(function (data) {
            vm.result = data.data;
        });
    }
})();
