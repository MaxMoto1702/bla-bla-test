(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .service('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http) {
        var service = this;

        service.getCurrentUser = getCurrentUser;

        init();

        function init() {
        }

        function getCurrentUser() {
            return $http.get('/backend/user/current').then(function (value) {
                if (value.data) return {username: value.data.name};
            });
        }
    }
})();