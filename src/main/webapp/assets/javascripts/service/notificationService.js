(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .service('NotificationService', NotificationService);

    NotificationService.$inject = ['$rootScope'];

    function NotificationService($rootScope) {
        var service = this;

        service.success = success;
        service.info = info;
        service.warn = warn;
        service.error = error;
        service.removeByIdx = removeByIdx;

        init();

        function init() {
            console.log('Notification service init');
            $rootScope.notifications = [];

            $rootScope.$on('$locationChangeStart', function () {
                clearNotifications();
            });
        }

        function  clearNotifications() {
            $rootScope.notifications = [];
        }

        function success(message) {
            $rootScope.notifications.push({
                message: message,
                type: 'success'
            });
        }

        function info(message) {
            $rootScope.notifications.push({
                message: message,
                type: 'info'
            });
        }

        function warn(message) {
            $rootScope.notifications.push({
                message: message,
                type: 'warning'
            });
        }

        function error(message) {
            $rootScope.notifications.push({
                message: message,
                type: 'danger'
            });
        }

        function removeByIdx(index) {
            $rootScope.notifications.splice(index, 1);
        }
    }
})();