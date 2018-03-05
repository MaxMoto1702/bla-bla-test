(function () {
    'use strict';

    angular
        .module("maxmoto1702.weather")
        .factory("Sandbox", Sandbox);

    Sandbox.$inject = ["$resource"];

    function Sandbox($resource) {
        return $resource("/assets/data/sandbox-array.json", null, {"list": {method: "GET", isArray: true}});
    }
})();

