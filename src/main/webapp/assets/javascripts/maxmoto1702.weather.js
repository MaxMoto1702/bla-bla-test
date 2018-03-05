(function () {
    'use strict';

    angular
        .module('maxmoto1702.weather', [
            'ngResource',
            'ngRoute',
            'ui.bootstrap'
        ])
        .constant("contextPath", window.contextPath)
        .config(config)
        .run(run);

    config.$inject = ["$httpProvider", "$routeProvider"];

    function config($httpProvider, $routeProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        $httpProvider.interceptors.push(httpRequestInterceptor);
        $routeProvider
            .when("/", {
                templateUrl: "/assets/templates/search.html",
                controller: "SearchController",
                controllerAs: "vm"
            })
            .when("/login", {
                templateUrl: "/assets/templates/login.html",
                controller: "LoginController",
                controllerAs: "vm"
            })
            .when("/resultByCity/:cityName", {
                templateUrl: "/assets/templates/result.html",
                controller: "ResultByCityNameController",
                controllerAs: "vm"
            })
            .when("/resultByCoord/:lat,:lon", {
                templateUrl: "/assets/templates/result.html",
                controller: "ResultByCoordController",
                controllerAs: "vm"
            })
            .when("/sandbox", {
                templateUrl: "/assets/templates/sandbox.html",
                controller: "SandboxController",
                controllerAs: "vm"
            });
    }

    httpRequestInterceptor.$inject = ["$q", "$location", "contextPath", 'NotificationService'];

    function httpRequestInterceptor($q, $location, contextPath, notificationService) {
        return {
            request: function (config) {
                if (config.url.indexOf("/") === 0) {
                    config.url = contextPath + config.url;
                }
                return config;
            },

            // optional method
            response: function (response) {
                // console.log('HTTP interceptor response', response);
                // do something on success
                return response;
            },

            // optional method
            responseError: function (rejection) {
                if (rejection.status === 401) {
                    $location.path("/login");
                } else {
                    notificationService.error(rejection.data);
                }
                return $q.reject(rejection);
            }
        };
    }

    run.$inject = ['$rootScope', '$location', '$http', 'UserService'];

    function run($rootScope, $location, $http, userService) {
        // keep user logged in after page refresh
        $rootScope.globals = {};
        userService.getCurrentUser().then(function (value) {
            $rootScope.globals.currentUser = value;
            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in and trying to access a restricted page
                var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
                var loggedIn = $rootScope.globals.currentUser;
                if (restrictedPage && !loggedIn) {
                    $location.path('/login');
                }
            });
        });
    }
})();
