(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .controller('ResultByCoordController', ResultByCoordController);

    ResultByCoordController.$inject = ["$routeParams", '$http'];

    function ResultByCoordController($routeParams, $http) {
        var vm = this;
        vm.params = $routeParams;
        $http.get('/backend/weather/byCoord/' + $routeParams.lat + "," + $routeParams.lon).then(function (data) {
            vm.result = data.data;
        });
    }
})();
