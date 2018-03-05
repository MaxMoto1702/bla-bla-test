(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .service('AuthService', AuthService);

    AuthService.$inject = ['$http', '$rootScope', '$location'];

    function AuthService($http, $rootScope, $location) {
        var service = this;

        service.login = login;
        service.setCredentials = setCredentials;
        service.clearCredentials = clearCredentials;
        service.logout = logout;

        init();

        function init() {
        }

        function login(username, password) {
            return $http({
                method: 'POST',
                url: "/auth/login",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {username: username, password: password}
            });
        }

        function logout() {
            clearCredentials();
            return $http.get("/auth/logout").then(function (value) {
                $location.path('/login');
                return value;
            });
        }

        function setCredentials(username) {
            $rootScope.globals = {
                currentUser: {
                    username: username
                }
            };
        }

        function clearCredentials() {
            $rootScope.globals = {};
        }
    }
})();