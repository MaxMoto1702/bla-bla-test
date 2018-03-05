(function () {
    'use strict';

    angular
        .module("ru.redsys.dokip")
        .factory("Event", Event);

    Event.$inject = ["$resource"];

    function Event($resource) {
        return $resource("/backend/event", null, {"list": {method: "GET", isArray: false}});
    }
})();

