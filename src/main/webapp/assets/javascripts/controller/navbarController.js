(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ["$http", "AuthService"];

    function NavbarController($http, authService) {
        var vm = this;

        init();

        vm.logout = logout;

        function init() {
        }

        function logout() {
            authService.logout().then(function () {
                authService.clearCredentials()
            });
        }
    }
})();
