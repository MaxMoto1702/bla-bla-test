(function () {
    'use strict';

    angular
        .module("ru.redsys.dokip")
        .factory("Company", Company);

    Company.$inject = ["$resource"];

    function Company($resource) {
        return $resource("/backend/company", null, {"list": {method: "GET", isArray: true}});
    }
})();

