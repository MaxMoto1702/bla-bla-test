(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .component('notificationPanel', {
            templateUrl: '/assets/templates/notificationPanel.html',
            controller: 'NotificationController',
            controllerAs: 'vm',
            bindings: {
                notifications: '='
            }
        });
})();