(function () {
    'use strict';

    angular
        .module("ru.redsys.dokip")
        .factory("Document", Document);

    Document.$inject = ["$resource"];

    function Document($resource) {
        return $resource("/backend/document", null, {"list": {method: "GET", isArray: false}});
    }
})();

