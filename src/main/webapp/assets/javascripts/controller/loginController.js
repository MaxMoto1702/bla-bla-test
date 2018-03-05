(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthService', 'NotificationService'];

    function LoginController($location, authService, notificationService) {
        var vm = this;

        vm.login = login;

        function login() {
            authService.clearCredentials();
            authService.login(vm.username, vm.password)
                .then(function () {
                    authService.setCredentials(vm.username);
                    $location.path("/");
                }, function (value) {
                    console.log(value);
                    notificationService.error("Bad username or password");
                });
        }
    }
})();
