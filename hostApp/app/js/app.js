var hostApp = angular.module("hostApp", ["ngRoute"]);

hostApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    });
});

hostApp.controller('HomeController', function($scope) {
    $scope.message = "Welcome to the host application!";
});
