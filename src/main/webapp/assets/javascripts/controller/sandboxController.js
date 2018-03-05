(function () {
    'use strict';

    angular.module('maxmoto1702.weather')
        .controller('SandboxController', SandboxController);

    SandboxController.$inject = ['$http', '$q', 'Sandbox', '$resource', "$rootScope", 'NotificationService'];

    function SandboxController($http, $q, Sandbox, $resource, $rootScope, NotificationService) {
        var vm = this;

        vm.deferred = $q.defer();

        $rootScope.rootScopeVar = {'message': 'hello'};

        NotificationService.success('test success');
        NotificationService.info('test info');
        NotificationService.warn('test warning');
        NotificationService.error('test error');

        $http.get('test');

        setTimeout(function () {
            console.log("Notify 1...");
            vm.deferred.notify('Notify message 1');
        }, 4000);
        setTimeout(function () {
            console.log("Notify 2...");
            vm.deferred.notify('Notify message 2');
        }, 5000);
        setTimeout(function () {
            console.log("Resolve...");
            vm.deferred.resolve('Resolve message');
        }, 6000);
        setTimeout(function () {
            console.log("Reject...");
            vm.deferred.reject('Reject message');
        }, 7000);
        setTimeout(function () {
            console.log("Notify 3...");
            vm.deferred.notify('Notify message 3');
        }, 8000);

        console.log("Prepared deferred", vm.deferred);
        console.log("Prepared promise", vm.deferred.promise);

        vm.deferred.promise
            .then(function (value) {
                console.log("Resolved", value, this);
                vm.var1 = value;
                return value;
            }, function (value) {
                console.log("Rejected", value, this);
                vm.var1 = value;
                return value;
            }, function (value) {
                console.log("Updated", value, this);
                vm.var1 = value;
                return value;
            })
            .then(function (value) {
                console.log("Resolved", value, this);
                vm.var2 = value;
                return value;
            }, function (value) {
                console.log("Rejected", value, this);
                vm.var2 = value;
                return value;
            }, function (value) {
                console.log("Updated", value, this);
                vm.var2 = value;
                return value;
            });

        vm.list = Sandbox.list();
        console.log("List", vm.list);

        vm.item = $resource("/assets/data/sandbox-item.json", null, {"get": {method: "GET", isArray: false}}).get();
        console.log("Item", vm.item);
    }
})();
