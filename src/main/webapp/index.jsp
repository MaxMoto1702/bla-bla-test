<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Weather</title>
    <script>window.contextPath = '${pageContext.request.contextPath}';</script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/vendor/normalize-css/normalize.css" type="text/css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/vendor/bootstrap/css/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/vendor/bootstrap/css/bootstrap-theme.min.css" type="text/css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/vendor/angular/angular-csp.css" type="text/css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/vendor/angular-bootstrap/ui-bootstrap-csp.css" type="text/css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/stylesheets/main.css" type="text/css"/>
</head>
<body ng-app="maxmoto1702.weather" ng-cloak>

<navbar current-user="globals.currentUser"></navbar>

<div class="container">
    <notification-panel notifications="notifications"></notification-panel>
    <ng-view></ng-view>
</div>

<script src="${pageContext.request.contextPath}/assets/vendor/sizzle/sizzle.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/vendor/jquery/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/vendor/angular/angular.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/vendor/angular-route/angular-route.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/vendor/angular-resource/angular-resource.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/maxmoto1702.weather.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/component/navbarComponent.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/component/notificationPanelComponent.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/component/searchByCityNameComponent.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/component/searchByCoordinatesComponent.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/controller/loginController.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/controller/navbarController.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/controller/notificationController.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/controller/resultByCoordController.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/controller/resultByCityNameController.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/controller/sandboxController.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/controller/searchController.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/controller/searchByCityNameController.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/controller/searchByCoordinatesController.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/domain/Sandbox.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/service/authService.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/service/notificationService.js"></script>
<script src="${pageContext.request.contextPath}/assets/javascripts/service/userService.js"></script>
</body>
</html>
