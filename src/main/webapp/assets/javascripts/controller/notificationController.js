(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .controller('NotificationController', NotificationController);

    NotificationController.$inject = ['NotificationService'];

    function NotificationController(notificationService) {
        var vm = this;

        vm.closeAlert = closeAlert;

        init();

        function init() {
        }

        function closeAlert(index) {
            notificationService.removeByIdx(index);
        }
    }
})();
