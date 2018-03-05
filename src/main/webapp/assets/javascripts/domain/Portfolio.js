(function () {
    'use strict';

    angular
        .module("ru.redsys.dokip")
        .factory("Portfolio", Portfolio);

    Portfolio.$inject = ["$resource"];

    function Portfolio($resource) {
        return $resource("/backend/portfolio", null, {"list": {method: "GET", isArray: true}});
    }
})();

